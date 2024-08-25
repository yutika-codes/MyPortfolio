import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {CgProfile} from "react-icons/cg";
// import { DonarReview } from '../../../backend/models/DonarReview';

const DisplayReviews = () => {
    const [reviews,setReview]=useState('');
   
    useEffect(()=>{
      
        const fetchdata = async ()=>{
        const data = await axios.get("http://localhost:4000/api/review");
        console.log("reviews>>>>>",data);
        setReview(data);
        };
        fetchdata();
    },[]);

  return (
    
        reviews && reviews?.data.map((newReview)=>(<div className="testimonilal-box">
        <div className="box-top">
            <div className="profile">
                                 
                 <CgProfile className="profile-icon"/>
                    </div>
                    <div className="name-user">
                        <strong>{newReview.Name}</strong>
                        <br/>
                    <span>{newReview.profession}</span>
                    </div>
                    <br/>
                <div className="reviews">
                {newReview.Review}
                </div>
            </div>


        </div>)
    )
    
   
            
  )
}

export default DisplayReviews
