





import React from 'react'
import Header from '../components/header/header'
import Page from '../components/navbar/navbar'
import Shop from '../components/shop/shop'
import Footer from '../components/footer/footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/landpage/landpage.css'


const SodaLandPage:React.FC = () => {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
        const [email, setEmail] = useState('')
        const [errorMessage, setErrorMessage] = useState('')
        const [successMessage, setSuccessMessage] = useState('')
        const navigate = useNavigate()

        const userSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault()
                setErrorMessage('')
                setSuccessMessage('')
                const data  = { username , password, confirmPassword , email }
                try {
                    const response =  await fetch(`${process.env.REACT_APP_API_URL}/submit`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                            body:JSON.stringify(data),
                            credentials: 'include', //ensures cookies are sent between different domains or ports
                         })

                         const contentType = response.headers.get('content-type')   // Always check if the response is valid JSON
                         if(response.ok && contentType && contentType.includes('application/json')) {
                              const results = await response.json();
                              setSuccessMessage(results.message);
                              setUsername('')
                              setPassword('')
                              setConfirmPassword('')
                              setEmail('')
                              navigate('/welcomepage')
                         } else {
                              const errorResponse = await response.json()
                              setErrorMessage(errorResponse.message || 'an error has occurred')
                         }
                         }catch(error:any)  {
                            setErrorMessage(error.message || "Something went wrong")
                     }
                 }

      return (
    <>
    {/*------------------------HEADER COMPONENT-------------------------*/}
    <Header />






     {/*----------------------PAGE COMPONENT----------------------*/}
     <Page />





          {/*-------------------EXPRESS JS FORM CODE --------------------*/}

            <div className='Form-Container'>

             <div className='Form-Wrapper'>

             <form onSubmit={userSubmit} className='Subscribe-Form' id='subscribe-form'>
               <h1>Subscribe</h1>
              { errorMessage && <div>{errorMessage}</div> }
              {successMessage && <div>{successMessage}</div> }
              <div><label htmlFor='username'>Username</label></div>
              <div><input onChange={(e) => setUsername(e.target.value)} type='text' value={username} placeholder='Username' required></input></div>
              <div><label htmlFor='password'>Password</label></div>
              <div><input onChange={(e) => setPassword(e.target.value)} type='password' value={password} placeholder='Password' required></input></div>
              <div><label htmlFor='confirm-password'>Confirm-Password</label></div>
              <div><input onChange={(e) => setConfirmPassword(e.target.value)} type='password' value={confirmPassword} placeholder='Confirm-Password' required></input></div>
              <div><label htmlFor='email'>Email</label></div>
              <div><input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='Email' required></input></div>
               <div><button type='submit'>Sign Up</button></div>
          </form>


             </div>


            </div>
    




    {/*-----------------------SHOP COMPONENT--------------------------*/}
    <Shop />


        {/*------------------------FOOTER COMPONENT-------------------------*/}

            <Footer />






    </>
  )
}

export default SodaLandPage
