import React, { useState } from "react";
// import { Alert } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { Outlet, useNavigate } from "react-router-dom"; 
import Home from "./Home";
import "../styles/Login.css"


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e) => 
  {
      e.preventDefault();

      const  res = await fetch("http://localhost:4000/api/login",{
    method:"POST",
   
  headers: { 'Content-Type' : 'application/json' 
},
   body:JSON.stringify({
    email,
    password
     })
   
  });
  const data = res.json();
  if(res.status === 400 ||  !data )
   {

    window.alert("Invalid Credentials!");
   } else {
    window.alert("Login Successfull!");
    navigate("/AdminDashboard");

   }
  }
  // const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  // function handleLogin(e) {
  //   e.preventDefault();
  //   let pass = localStorage
  //     .getItem("sansPassword")
  //     .replace(/"/g, "");
  //   let mail = localStorage.getItem("sansEmail").replace(/"/g, "");
    

  //   if (!email || !password) {
  //     setFlag(true);
  //     console.log("EMPTY");
  //   } else if (passwordlog !== pass || emaillog !== mail) {
  //     setFlag(true);
  //   } else {
  //     setHome(!home);
  //     setFlag(false);
  //   }
  // }
  const navigate=useNavigate();

  const Donor=()=>{
    navigate("/RegistrationDonor");
  }
  const NGO=()=>{
    navigate("/RegistrationNGO");
  }

  return (
    <div className="App">
    <div className="outer">
      <div className="inner">
    <div>
      {home ? (
        <form method ="POST">
          <h3>Log In</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
             
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              
            />
          </div>

          <button onClick={loginUser} type="submit" id="login" className="btn btn-dark btn-lg btn-block">
            Login
          </button>
          
          {/* {flag && (
            <Alert color="primary" variant="warning">
              You have not registered.Please register before login.
            </Alert>
          )} */}
          <p id="p1"><b>Not yet registered?<br></br>Register now as</b></p>
          <div className="register">

                  <Link to="/RegistrationDonor"><button type="submit" onClick={() => Donor}
                  id="bt1" 
                  className="btn btn-dark btn-lg btn-block">Donor</button></Link>

          <Link to="/RegistrationNGO"><button type="submit" onClick={() => NGO}
                  id="bt2" 
                  className="btn btn-dark btn-lg btn-block">NGO</button></Link>
          </div>
          
        </form>
      ) : (
        <Home />
        
      )}
      <Outlet/>
    </div>
  </div>
  </div>
  </div>

  );
}

export default Login;
