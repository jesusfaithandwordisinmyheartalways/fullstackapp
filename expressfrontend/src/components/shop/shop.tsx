




import React from 'react'
import '../shop/shop.css'
import GuyDrink from '../images/guysdrinking.webp'
import WomanDrink from '../images/woman drinking.webp'
import ManDrink from '../images/mandrinkning.jpg'


const Shop:React.FC = () => {

        const Instagram = (url:string):void => {
             window.location.href = url;
        }

  return (
  <>
  
  <div className='Shop-Container'>
    <div className='Shop-Wrapper'>
        <div><div><h3>FANS ARE EXCITED</h3></div></div>
    </div>

  </div>
  
  
     <div className='Shop-Container-Two'>

     <div className='Shop-Wrapper-Two'>
        <div><div><h3>TAG US</h3></div></div><div><div><div className='Tag-Beverage' onClick={() => Instagram('https://www.instagram.com/')}>   @ BEVERAGE MARKETPLACE</div></div></div>
    </div>


     </div>



     <div className='Shop-Container-Three'>
        <div className='Shop-Wrapper-Three'>

            <div><div><img src={GuyDrink}></img></div></div>

            <div><div><img src={ WomanDrink}></img></div></div>

            <div><div><img src={ManDrink}></img></div></div>

            


        </div>



     </div>






      


  
  
  </>  


  )
}

export default Shop
