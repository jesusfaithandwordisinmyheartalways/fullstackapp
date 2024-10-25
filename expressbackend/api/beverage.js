


const jsonWebToken = require('jsonwebtoken');

const secretKey = 'mySecretKey';  // Replace with an environment variable for production

// Regex patterns
const userRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/;
const passwordRegex = /^(?=(.*[A-Z]){3,})(?=(.*[!@#$%^&*()]){0,5}).{7,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password, confirmPassword, email } = req.body;

        // Validation checks
        if (!userRegex.test(username)) {
            return res.status(400).json({ message: 'Username must contain at least 1 uppercase, 8 chars, 3 special chars.' });
        }
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ message: 'Password must contain at least 3 uppercase, 7 chars, 5 special chars max' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid Email: Please provide a valid email address.' });
        }

        // Generate token and set cookie
        const token = jsonWebToken.sign({ username, email }, secretKey, { expiresIn: '30d' });
        res.setHeader('Set-Cookie', `authenticationToken=${token}; HttpOnly; Max-Age=${30 * 24 * 60 * 60}; Path=/`);

        return res.status(200).json({ message: 'User Cookies has been successfully stored for 30 days on the server' });
    } else {
        res.status(404).json({ message: 'Not found' });
    }
}