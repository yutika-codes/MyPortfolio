import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
import "../styles/HowItWorksCard.css";
import {FaArrowCircleRight} from "react-icons/fa";
const HowItWorksCardNgos = () => {
  return (
    <>
      < div className="HowItWorks">
      <div>
    <div className='HowItWorksCard'>
            
            <img src="ngo1.jpg" className="ls-is-cached lazyloaded gm-observing gm-observing-cb" alt="Careshare - working for donars - Choose a cause" loading="lazy"/>
           
            <p>CHOOSE A CATEGORY!</p>
           <span>Browse different Category and select a cause.</span>     
    </div>

    <span className='forwardArrow'><FaArrowCircleRight/></span>

            <div className='HowItWorksCard'><img src="https://www.donatekart.com/_next/static/images/dk-process1-ff826ef23fbf38ff6e312d69ad1c17b6.webp" className="ls-is-cached lazyloaded gm-observing gm-observing-cb" alt="Careshare - working for donars - Choose a cause" loading="lazy"/>
            <p>CHOOSE A CATEGORY!</p>
           <span>Browse different Category and select a cause.</span> 
           </div>
               
            <span className='forwardArrow'><FaArrowCircleRight/></span>

           <div className='HowItWorksCard'><img src="https://www.donatekart.com/_next/static/images/dk-process1-ff826ef23fbf38ff6e312d69ad1c17b6.webp" className="ls-is-cached lazyloaded gm-observing gm-observing-cb" alt="Careshare - working for donars - Choose a cause" loading="lazy"/>
            <p>CHOOSE A CATEGORY!</p>
           <span>Browse different Category and select a cause.</span> 
           </div>
           </div>   
           </div>        
          
  
                    {/* <Outlet></Outlet> */}
                   


        </>

  )
}

export default HowItWorksCardNgos

