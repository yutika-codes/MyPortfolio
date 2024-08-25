import React,{useEffect,useState} from 'react'
import axios, { Axios } from 'axios';
import {CgProfile} from "react-icons/cg";
// import { DonarReview } from '../../../backend/models/DonarReview';

const AdminGet = () => {
    const [post,setPost]=useState('');
    
    useEffect(()=>{
      
        const fetchdata = async ()=>{
        const data = await axios.get("http://localhost:4000/api/get");
        console.log("post>>>>>",data);
        setPost(data);
        };
        fetchdata();
    },[]);
   

    // const handleUpClick=async(e)=>{
    //     e.preventDefault();

    //     const verify= post;
         
    //      const  res = await fetch("http://localhost:4000/api/update",{
    //       method:"POST",
         
    //     headers: { 'Content-Type' : 'application/json' 
    
    //   },
    //   body:JSON.stringify({

    //     "verify":"true"
    
    //        })
       
    //      });
    
      
    //      const data = await res.json();
    //      if(res.status === 422 || !data )
    //      {
      
    //       window.alert("Invalid Registration!");
    //       console.log("Invalid Registration");
    //      } else {
    //       window.alert("Registration Successfull!");
    //       console.log("Registration Successfull!");
      
    //      }
    // }
   
    const handleUpClick = async (e) => {
        e.preventDefault();
    {
        axios.post("http://localhost:4000/api/update:_id",{
            
            verify:true
        })
        // setPost({"verify":"true"});
    }
}
         
        

  return (
    
        post && post?.data.map((newcategory)=>(<div className="testimonilal-box">
        <div className="box-top">
            <div className="profile">
                    </div>
                    <div className="name-user">
                        <strong>{newcategory.name}</strong>
                        <br/>
                    <span>{newcategory.category}</span>
                    </div>
                    <br/>
                <div className="reviews">
                {newcategory.description}
                </div>
               hello
                <button className='from-control btn btn-primary' value={newcategory._id} onClick={()=>handleUpClick(newcategory._id)}>ADD</button>
           { console.log(newcategory._id)}
            </div>


        </div>
        )
    )
    
 
            
  )};


export default AdminGet
