import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
import "../styles/HowItWorksCard.css";
import {FaArrowCircleRight} from "react-icons/fa";
// import "../images/image1.jpeg"
const HowItWorksCardDonar = () => {
  return (
    <>
      < div className="HowItWorks">
      <div>
    <div className='HowItWorksCard'>
            
            <img src="image2.jpg" className="ls-is-cached lazyloaded gm-observing gm-observing-cb" alt="Careshare - working for donars - Choose a cause" loading="lazy"/>
           
            <p>CHOOSE A CATEGORY!</p>
           <span>Browse different Category and select a cause.</span>     
    </div>

    <span className='forwardArrow'><FaArrowCircleRight/></span>

            <div className='HowItWorksCard'><img src="image2.jpg" className="ls-is-cached lazyloaded gm-observing gm-observing-cb" alt="Careshare - working for donars - Choose a cause" loading="lazy"/>
            <p>CHOOSE A CATEGORY!</p>
           <span>Browse different Category and select a cause.</span> 
           </div>
               
            <span className='forwardArrow'><FaArrowCircleRight/></span>

           <div className='HowItWorksCard'><img src="image2.jpg" className="ls-is-cached lazyloaded gm-observing gm-observing-cb" alt="Careshare - working for donars - Choose a cause" loading="lazy"/>
            <p>CHOOSE A CATEGORY!</p>
           <span>Browse different Category and select a cause.</span> 
           </div>
           </div>   
           </div>        
                    {/* <Outlet></Outlet> */}
                   


        </>

  )
}

export default HowItWorksCardDonar
