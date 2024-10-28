



const express = require('express')
const cors = require('cors') // cors module -allows the server to handle request from different domains
const cookieParse = require('cookie-parser') // cookie parser parses and enables reading and managing cookies
const helmet = require('helmet') // helmet module- protects against common web vulnerabilities
const rateLimit = require('express-rate-limit')// express rate limit module- limits the number of request a user can make to the server/ protects against attacks
const jsonWebToken = require('jsonwebtoken') // jsonwebtoken module- creates, sign & verify json web tokens for secure authentication btw client /server
const bodyParser = require('body-parser')


const app = express()

//CORS setup: Allow request from the frontend localhost:3003
app.use(cors({
    origin: 'http://localhost:9000',    //allow the frontend request
    credentials:true,    // allow cookies to be sent/received
}));





app.use(helmet())
app.use(bodyParser.json())
app.use(cookieParse())


const serverLimit = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15-minute time window
    max: 100,    // Maximum 100 requests allowed per windowMs
    message: 'Too many request, try again later',  // Custom message when limit is reached
})
app.use(serverLimit)


const secretKey = 'mySecretKey' // secret key for the token signing

const userRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/;
const passwordRegex =  /^(?=(.*[A-Z]){3,})(?=(.*[!@#$%^&*()]){0,5}).{7,}$/; 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 


app.post('/submit', (req, res) => {
    const { username , password, confirmPassword, email } = req.body;
    console.log('Response body:', req.body);

    if(!userRegex.test(username)) {
        return res.status(400).json({message: 'Username must contain at least 1 uppercase, 8 chars, 3 special chars.'})
    }
    if(!passwordRegex.test(password)) {
        return res.status(400).json({message: 'Password must contain at least 3 uppercase, 7 chars, 5 special chars max'})
    }
    if(password !== confirmPassword) {
        return res.status(400).json({message: 'Passwords do not match'}) 
    } 
    if(!emailRegex.test(email)) {
        return res.status(400).json({message: 'Invalid Email: Please provide a valid email address.'});
    }
    const token = jsonWebToken.sign({ username, email }, secretKey, { expiresIn: '30d'});
    const cookieSetToExpire = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    res.cookie('authenticationToken', token, {
        httpOnly:true,
        secure:false,
        sameSite:'Strict',
        expires:cookieSetToExpire
    });
    
    console.log('Sending JSON Response'); // Log response status
     return res.status(200).json({ message: 'User Cookies has been successfully stored for 30 days on the server' });

});


app.get('/', (req, res) => {
    res.send('Welcome to the backend of the server')
})


const PORT = 9001;
app.listen(PORT, () => {
        console.log(`server is on port: ${PORT}`)
})
