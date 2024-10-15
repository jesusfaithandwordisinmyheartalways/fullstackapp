




import React from 'react'
import '../footer/footer.css'
import Twitter from '../images/twitter.png';
import Fb from '../images/meta.png';
import Pinterest from '../images/pinterest.png';
import Instagram from '../images/instagram.png'





const Footer:React.FC = () => {



  return (
    
    <>

    <div className='Footer-Container'>

      <div className='Footer-Wrapper'>

          <div className='footer-beverage-wrapper'>
          <div><div><h3>Beverage Marketplace</h3></div></div>
          </div>

          <div className='footer-beverage-wrapper-two'>
            <div><div><img src={Twitter}></img></div></div>
            <div><div><img src={Pinterest}></img></div></div>

            <div><div><img src={Fb}></img></div></div>

            <div><div><img src={Instagram}></img></div></div>

            </div>

      </div>



      <div className='Footer-Wrapper-Two' >

          <div><div><p>Contact Us</p></div></div>
          <div><div><p>Buy Wholesale on Faire</p></div></div>
          <div><div><p>Join Our Affiliate Program</p></div></div>
          <div><div><p>Become a Brand Ambassador</p></div></div>
          <div><div><p>Terms & Conditions</p></div></div>
          <div><div><p>Shipping & Refund Policy</p></div></div>
          <div><div><p>Accessibility Statement</p></div></div>
          <div><div><p>Privacy Policy</p></div></div>
          <div><div><p>Do not sell my personal information</p></div></div>

        </div>





    </div>



     



 




    
    

    <div className='Footer-Container-Two'>

        <div className='Footer-Wrapper-Three'>
          <div><div>© Copyright 2024, Beverage Marketplace, LLC</div></div>
        </div>

    </div>

    
    
    </>

      
  
  )
}






export default Footer
