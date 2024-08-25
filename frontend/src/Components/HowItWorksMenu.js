import React from 'react'
import "../styles/HowItWorksMenu.css"
import { Link, Outlet} from 'react-router-dom'
const HowItWorksMenu = () => {

  return (


    <>
    <div className='HowItWorksMenu'>
      <Link to="careShare" className="ForDonarsNGOsLink">For Donars</Link>
       <Link to="ForNGOs"  className="ForDonarsNGOsLink">For NGOs</Link>
       </div>      
      
        <Outlet></Outlet>
</>
  )
}

export default HowItWorksMenu