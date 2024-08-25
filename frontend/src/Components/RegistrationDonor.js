import React, { useState } from "react";
// import { Alert } from "react-bootstrap";
import Login from "./Login";
// import axios from "axios";
// import swal from 'sweetalert'; 
import { NavLink, useNavigate } from "react-router-dom";
// import "../styles/RegistrationDonor.css";

function Registration() {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    Firstname:"",Lastname:"",email:"",password:"",phone:"",address:"",cpassword:"",pincode:""
    });

  const [login] = useState(true);


let name,value;

  const handleInputs = (e)=> {
console.log(e);
name = e.target.name;
value = e.target.value;

setUser({...user,[name]:value});
}

const postData = async (e) => {
  e.preventDefault();

  const {Firstname,Lastname,password,phone,address,cpassword,email,pincode} = user;

   const  res = await fetch("http://localhost:4000/api/register",{
    method:"POST",
   
  headers: { 'Content-Type' : 'application/json' 
},
   body:JSON.stringify({

    Firstname,Lastname,password,phone,address,cpassword,email,pincode

       })
   });


   const data = await res.json();
   if(res.status === 422 || !data )
   {

    window.alert("Invalid Registration!");
    console.log("Invalid Registration");
   } else {
    window.alert("Registration Successfull!");
    console.log("Registration Successfull!");

   }
navigate("/login");  
  }

 
  

  return (
    <>
        <div className="App">
        <div className="outer">
        <div className="inner">
        <div>
          {" "}
          {login ? (
            <form method="POST">
              <h3><b><u>Register For Donor</u></b></h3>

              <div className="form-group">
                <label>Firstname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                value={user.Firstname}
              onChange={handleInputs}                 
               name="Firstname"
                />
              </div>

              <div className="form-group">
                <label>Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  value={user.Lastname} onChange={handleInputs}                
                   name="Lastname"
                  
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
  value={user.email}  onChange={handleInputs}  
            name="email"           
                />
              </div>

              <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                value={user.phone}
                name="phone"
onChange={handleInputs}                
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="Address"
                  className="form-control"
                  placeholder="Address"
                  name="address"
         value={user.address} 
      onChange={handleInputs}        
                />
              </div>

              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pincode"
                  name="pincode"
        value={user.pincode} 
      onChange={handleInputs}         
                />
              </div>

              <div className="form-group">
                <label> Create Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create password"
                  name="password"
          value={user.password}
         onChange={handleInputs}                
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  name="cpassword"
                value={user.cpassword}
                
                onChange={handleInputs}                 
                />
              </div>

              <button  type="submit" className="btn btn-dark btn-lg btn-block"  id="Register"  onClick={postData}>Register</button>
               
              <NavLink><p className="forgot-password text-right">
                I am already register{" "}
                 </p></NavLink>

              
            </form>
          ) : (
            <Login />
          )}
        </div>
  </div>
  </div>
  </div>
    
    </>
  );
}

export default Registration;
