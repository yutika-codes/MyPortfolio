import React from 'react'
import "../styles/PreNavbar.css"
import { NavLink ,Link, useNavigate} from 'react-router-dom'
import {HiOutlineLogin} from "react-icons/hi"


// const cartIcon = <svg className="temp" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
// const navigate=useNavigate();

  
const PreNavbar = () => {
    const Login=()=>{
        useNavigate("/Login");
      }
    return (
        <div className="preNav">
              <div>
                <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/512/external-donation-medical-itim2101-lineal-color-itim2101-1.png" alt="logo"/>


                           <div className="dropdown">
                            <button className="dropbtn"><NavLink className="dropbtn" to="/">CareShare</NavLink></button>
                            </div>
                            <span>|</span>
                
                            <div className="dropdown">
                            <NavLink className="dropbtn" to="/howitworks"><button className="dropbtn" herf="/">How it works</button> </NavLink>
                            </div>
                            <span>|</span>

                            <div className="dropdown">
                            <NavLink className="dropbtn" to="/about"><button className="dropbtn"> Who we are </button> </NavLink>
                            </div>
                            <span>|</span>
                 
                            <div className="dropdown">
                            <NavLink className="dropbtn" to="/whatwedo"><button className="dropbtn">What we do</button></NavLink>
                            </div>
                            <span>|</span>

                            <div className="dropdown">
                            <NavLink className="dropbtn" to="/contact"><button className="dropbtn">Contact us</button></NavLink> 
                            </div>

                
                        <div className="div2">
                            <div className="dropdown">
                            <Link to="/Login"><button className="dropbtn" type="submit1" onClick={() => Login}>Login<HiOutlineLogin/></button></Link>
                            
                            
               
                          </div> 

                    </div>
                 </div>
             </div>

    )
}

export default PreNavbar
