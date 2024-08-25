import React from 'react'
import "../../styles/Sidebar.css"
import  {motion} from "framer-motion";
import  {IoIosNotifications} from "react-icons/io";
import {TfiWrite} from "react-icons/tfi";

import {FaBars} from "react-icons/fa"
//import {Routes} from "react-router-dom";
import {Link} from "react-router-dom";
import {useState} from "react";
const routes = [ 
  {
    path:"/update",
    name:"Update",
    icon:<IoIosNotifications/>,
  },

  {
    path: "/AdminsPost",
    name: "Add categories",
    icon: <TfiWrite/>,
  },

  
];
const AdminSidebar = ({children}) => {
  const[isOpen,setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="main-container">
    <motion.div animate= {{ width: isOpen ? "200px" : "36px"}} className="Sidebar"> 
     <div className="top_section">
      {isOpen && <h1 className='logo'>Welcome</h1>}
      <div className="bars">
        <FaBars onClick={toggle}/>
      </div>
     </div>

     
     <section className="routes">
      {routes.map((route) => (
        <Link  activeClassName="active" to={route.path} key={route.name} className="link">
          <div className="icon">
            {route.icon}
          </div>
          <div className="link_text">{route.name}</div>
        </Link>
      ))}
      </section>
      </motion.div>
     <main> 
        {children}
     </main>
    
    </div>
  )
}

export default AdminSidebar
