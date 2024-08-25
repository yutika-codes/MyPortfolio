import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login.js";
import "../styles/RegistrationNGO.css"
import { useNavigate } from "react-router-dom";
function RegistrationNGO() {

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
      console.log("Invalid Registration!");
     } else {
      window.alert("Registration Successfull!");
      console.log("Registration successfull!");
  
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
              <h3>Register for NGO</h3>

              <div className="form-group">
                <label>Name of NGO</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter NGO name"
                  name="name"
                  onChange={handleInputs}
                />
              </div>

              <div className="form-group">
                <label>NGO email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={handleInputs}
                />
              </div>

              <div className="form-group">
                <label> Create Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create password"
                  onChange={handleInputs}
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  onChange={handleInputs}/>
              </div>

              <div className="form-group">
                <label>Tel No.</label>
                <input
                  type="phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={handleInputs}
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  onChange={handleInputs}
                />
              </div>

              <div className="form-group">
                <label>Type of NGO</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter NGO type"
                  onChange={handleInputs}
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>
              <p onClick={postData} className="forgot-password text-right">
                Already registered{" "}?
                
              </p>
             
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              
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

export default RegistrationNGO;
