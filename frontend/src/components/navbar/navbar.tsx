







import React from 'react'
import './navbar.css'
import Soda from '../images/soda.png'
import Beverage from '../images/beverageone.png'
import BeverageTwo from '../images/beveragetwo.webp'
import BeverageThree from '../images/beveragthree.png'
import BeverageFour from '../images/sipyourway.png'
import BeverageFive from '../images/drink-collection.png'
import BeverageSeven from '../images/beverage-bliss.jpg'
import { useState } from 'react'
import BlackCherry from '../images/BlackCherry.webp'
import Bevegan from '../images/bvegancola.jpg'
import CulturePop from '../images/culture Strawberry Rhubarb.webp'
import DrPepper from '../images/dr-pepper.jpg'
import LemonLime from '../images/LemonLime.png'
import Fanta from '../images/fanta.jpg'
import SpringWater from '../images/spring water .jpg'
import Sweepers from '../images/sweepers.jpg'
import Welcome from '../images/welcome.webp'
import Cans from '../images/cans.jpg'





interface Slide {
    src:string;
    caption:string;
}


const Page:React.FC = () => {
    const [currentImageSlide, setCurrentImageSlide] = useState<number>(0);

    const imageSlides:Slide[] = [
        {src: BlackCherry, caption: "Black Cherry Beverage"},
        {src: Bevegan, caption: "Vegan Beverage"},
        {src:Fanta, caption: "Fanta Beverage"},
        {src: CulturePop, caption: 'Culture Beverage'},
        {src: DrPepper, caption: 'Dr Pepper Beverage'},
        {src: SpringWater, caption: 'Spring Water Beverage'},
        {src: LemonLime, caption: 'Lemon Beverage'},
        {src: Sweepers, caption: 'Sweepers Beverage'}
    ]

        const nextSlide = ():void => {
            setCurrentImageSlide((prevSlide) => (prevSlide + 1) % imageSlides.length);
        }

        const prevSlide = (): void => {
            setCurrentImageSlide((prevSlide) => (prevSlide - 1 + imageSlides.length) % imageSlides.length);
          };


          const selectSlide = (index: number): void => {
            setCurrentImageSlide(index);
          };







  return (
   <>


   <div className='navbar-container'>

      <div className='navbar-wrapper'>

        <div><button style={{color: 'orange'}} type='button'>Inventory</button></div> 
        
        <div><button style={{color: 'dodgerblue'}} type="button">Locate Us</button></div>
        <div><div><h3>Beverage MarketPlace</h3></div></div><div className='soda-image'><div><img src={Soda}></img></div></div> 

        <div><button style={{color: 'purple'}} type="button">Subscribe</button></div>

        <div><button style={{color: 'grey'}} type="button">Contact</button></div>

    </div>


   </div>





    <div className='Content-Container'>
        <div className='Content-Wrapper'>

            <div className='beverage-content-header'>
                <div><div><h1><strong>The Flavors of Drinks, You Cant Resist</strong></h1></div></div>
                </div>

            <div className='beverage-one'><div><img src={Beverage}></img></div></div>

            <div className='beverage-two'><div><img src={BeverageTwo}></img></div></div>


            <div className='beverage-three'><div><img src={BeverageThree}></img></div></div>


        </div>



    </div>
   
   
   










{/*--------------------------CONTENT CONTAINER TWO-------------------------*/}





   <div className='Content-Container-Two'>

        <div className='Beverage-Preference-Wrapper'>
            <div><div><h3>Sip Your Way <div><img src={BeverageFour}></img></div></h3><div></div></div></div>

            <div><div><h3>Taste the Variety<div><img src={BeverageFive}></img></div> </h3></div></div>

            <div><div><h3>Refresh Your Choice<div><img src={Cans}></img></div> </h3></div></div>


            <div><div><h3>Beverage Bliss<div><img src={BeverageSeven}></img></div></h3></div></div>

            

        </div>


   </div>








{/*--------------------------CONTENT CONTAINER THREE ImageCarousel -------------------------*/}


        <div className='Content-Container-Three'>


        <div className="slideshow-container">
      {imageSlides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentImageSlide ? 'active' : ''}`}
          style={{ display: index === currentImageSlide ? 'block' : 'none' }}
        >
          <div className="numbertext">{index + 1} / {imageSlides.length}</div>
          <div className="image-wrapper">
            <img src={slide.src} alt={`Slide ${index}`} className="slide-image" />
          </div>
          <div className="text">{slide.caption}</div>
        </div>
      ))}

      <a className="prev" onClick={prevSlide}>❮</a>
      <a className="next" onClick={nextSlide}>❯</a>

      <div style={{ textAlign: 'center' }}>
        {imageSlides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageSlide ? 'active' : ''}`}
            onClick={() => selectSlide(index)}
          />
        ))}
      </div>
    </div>

      

        </div>









{/*--------------------------CONTENT CONTAINER FOUR-------------------------*/}

<div className='Content-Container-Four'>

    <div className='Content-Container-Wrapper'>

        <div><div><img src={Welcome}></img></div></div>

        <div className='welcome-wrapper'>
            <div><div><h1>Coming Near You</h1></div></div>
            <div ><h3>Get ready to quench your thirst as the ultimate soda marketplace, offering a wide range of beverage brands, comes to a town near you!</h3>
            </div>

            <div className='subscribe-below-div'><div>Subscribe Below</div></div>
            </div>

    </div>



</div>









                {/*--------------------------CONTENT CONTAINER FIVE & EXPRESS JS USER FORM-------------------------*/}












   
   
   </>
  )
}









export default Page
