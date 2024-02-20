import React from 'react'
import Profile from "../../assets/home2.jpeg"
import {Link} from "react-router-dom"
import "./home.css"
import {FaArrowRight} from "react-icons/fa"

function Home() {
  return (
    <section className="grid home section">
      <img src={Profile} alt="" className="home__img" />
     <div className="home__content">
      <div className="home__data">
        <h1 className="home__title">
          <span>I' am Adnan Ashraf </span>
           Web Developer
        </h1>
        <p className="home__description">
        I believe that every line of code has the potential to create something extraordinary, and I'm determined to harness that potential.While coding is my passion, I also believe in the importance of maintaining a well-rounded life. Outside of the digital world, I'm an avid Cricketer, Musician enthusiast. 
        </p>


        <Link to='/about' className="button">More About Me {' '}<span className='button__icon'><FaArrowRight/></span></Link>
      </div>
     </div>

<div className="color__block">

</div>







    </section>
  )
}

export default Home
