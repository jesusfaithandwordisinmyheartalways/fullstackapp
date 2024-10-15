







import React from 'react'
import '../header/header.css'



const Header:React.FC = () => {


    const HeaderClick = () => {
        alert('Please fill out the form to receive shipping information')
    }

  return (
    <>
    <div className='header-container' onClick={HeaderClick}>
        <div className='header-wrapper'>
            <div><div><h3>Free Shipping on All Orders</h3></div></div>


        </div>
    </div>
    
    
    
    </>
  )
}





export default Header
