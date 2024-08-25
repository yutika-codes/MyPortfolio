import React ,{useState} from 'react'
import {CgProfile} from "react-icons/cg";
import "../styles/DonarReviewCard.css"
import {NavLink} from "react-router-dom"
import axios from"axios";
function DonarReviewCard () {
   
    const [review,setReview] = useState({
        Name:"",profession:"",Review:""
        });

        let name,value;
        const handleInputs = (e)=> {
            console.log(e);
            name = e.target.name;
            value = e.target.value;

            setReview({...review,[name]:value});

        }


        const handleUpClick = async (e) => {
            e.preventDefault();
          
            const {Name,profession,Review} = review;
          
             const  res = await fetch("http://localhost:4000/api/addreview",{
              method:"POST",
             
            headers: { 'Content-Type' : 'application/json' 
          },
             body:JSON.stringify({
          
              Name,profession,Review
          
                 })
             });
             const data = await res.json();
             if(res.status === 422 || !data )
             {
          
              window.alert("Invalid Registration!");
              console.log("Invalid Registration!");
             } else {
              window.alert("Review addded sucessfully!");
              console.log("Review added successfull!");
             }
           
            
            }
    return (
        <>
        <div className="ProductReviewCard">
           <div className="testimonilal-box">
            <div className="box-top">
                <div className="profile">
                     <CgProfile className="profile-icon"/>
                        </div>
                        
                        <div className="name-user">
                            <strong>Krupi Pangam</strong>
                            <br/>
                        <span>Profession</span>
                        </div>
                        <br/>
                    <div className="reviews">
                        Review of the donar
                    </div>
                    
                </div>


            </div>
           
            <div className="testimonilal-box">
            <div className="box-top">
                <div className="profile">
                                     
                     <CgProfile className="profile-icon"/>
                        </div>
                        
                        <div className="name-user">
                            <strong>Krupi Pangam</strong>
                            <br/>
                        <span>Profession</span>
                        </div>
                        <br/>
        
                    <div className="reviews">
                        Review of the donar
                    </div>
                </div>


            </div>
            
            <div className="testimonilal-box mb-4">
            <form className="box-top ">
                <div className="profile ">
                                     
                     <CgProfile className="profile-icon"/>
                        </div>
                        
                        <div className="name-user">
                        <strong> <input className="form-control"type ="text" name="Name" onChange={handleInputs} value={review.Name} placeholder='Enter your name'/></strong>
                            <br/>
                        <span> <input type ="text" className='form-control'name="profession" onChange={handleInputs} value={review.profession} placeholder='Enter your profession'/></span>
                        </div>
                        <br/>
        
                    <textarea className="reviews form-control mb-3"name="Review"  onChange={handleInputs} value={review.Review}  placeholder='Write a Review........'>

                    </textarea>
                  <button className='from-control btn btn-primary' onClick={handleUpClick}>Add a Review</button>
                  
                </form>

                
            </div >
            <NavLink to="/review"className="reviewlink">View more reviews</NavLink>
            </div>
           

            </>
        
    );
    
}
export default DonarReviewCard;
