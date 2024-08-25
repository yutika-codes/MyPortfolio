// import { json } from "body-parser";
import pkg from 'body-parser';
const { json } = pkg;
import {catchAsyncError} from "../middlewares/catchAsyncError.js";
import { Donar} from '../models/Donar.js';
import { DonarReview } from '../models/DonarReview.js';
import ErrorHandler from "../utils/ErrorHandler.js";
import bcrypt from "bcryptjs";
import  jwt  from 'jsonwebtoken';
import { Categories } from '../models/Categories.js';
// import { DonarReview } from '../models/DonarReview.js';
// import { sendEmail } from '../utils/SendEmail.js';
// import { sendToken } from "../utils/sendToken.js";
// import crypto, { createHash } from "crypto";
// import {Course} from "../models/Course.js"
//Register
export const register = catchAsyncError(async(req,res,next)=>{

    const {Firstname,Lastname,password,phone,address,cpassword,email,pincode}=req.body;

    // const file = req.file;

    if(!Firstname || !Lastname ||!password ||!phone ||!address ||!cpassword ||!email ||!pincode)
     return res.status(422).json({ error:"Please entre all fields!"});

try{
    const userExists = await Donar.findOne({ email :email });  // check if user already exists

    if(userExists){
        return res.status(422).json({ error:"User already Exists!"});
    } else if(password != cpassword)
    {
        return res.status(422).json({ error: "password are not matching!"});
    
    }else{

   const  user =  new Donar({Firstname,Lastname,email,password, phone,address, cpassword,pincode});

    await user.save();

    }
     res.status(201).json({ message:"User registered successfully!"});

}catch (err)
{
    console.log(err);
}

});


   



//Login
export const login = catchAsyncError(async(req,res,next)=>{

    const { email, password } = req.body;
// console.log("email", email, "password",password);
    // const file = req.file;

    if(!email ||!password)
     return next(new ErrorHandler("Please enetr all fields",400));

    const userLogin = await Donar.findOne({ email :email });
        //  console.log(user);

    if(!userLogin)
    return next (new ErrorHandler("Incorrect Email or Password",400));

    const isMatch = await bcrypt.compare(password,userLogin.password);
    const token = await userLogin.generateAuthToken();
    
    res.cookie("jwtoken",token,{
        expires:new Date(Date.now()  +15*24*60*60*1000),
        httpOnly:true
    });

    if(!isMatch)
    
    return next (new ErrorHandler("Invalid Credientials",401));
// sendToken(res,user,`Welcome back,${user.name}`,200);
res.status(200).json({meassage :`Welcome,${userLogin.Firstname}`});

});

//craete new review 
export const  DonarReviews = catchAsyncError(async(req,resp,next) =>{
        let Review = new DonarReview (req.body);
        let result = await Review.save();
        resp.send(result);
       
});

export const displayReviews = catchAsyncError(async(req,res,next)=>
{
    DonarReview.find((err,data) =>
    {
        if(err)
        {
            res.status(500).send(err);

        }
        else
        {
            res.status(200).send(data);      
        }
    });
})




//To display data on admins get(updatespage)
export const Adminupdates = catchAsyncError(async(req,res,next)=>
{
    Categories.find((err,data) =>
    {
        if(err)
        {
            res.status(500).send(err);

        }
        else
        {
            res.status(200).send(data);      
        }
    });
})




//post Category for Ngo
export const postCategory = catchAsyncError(async(req,resp,next)=>{
    let newcategory = new Categories(req.body);
    let result = await newcategory.save();
    resp.send(result);
})


//update boolean value of category
export  const updateDocument = catchAsyncError((req,res,next)=>{
   const id = req.body.id;
   const verify = req.body.verify;
    Categories.findByIdAndUpdate(id, {$set:{verify:verify}},(err,data)=>{
        if(err)
 return console.log(err);  
 res.json(data)
}
)










    })

 

// //Logout
// export const logout = catchAsyncError(async(req,res,next)=>{
//     res.status(200).cookie("token",null,{
//     expires:new Date(Date.now()+15*24*60*60*1000),
//     httpOnly: true,
//     secure:true,
//     sameSite:"none",
//     }).json({
//         success:true,
//         message:"Logged out Successfully!",
//     });
// });



// export const getMyProfile = catchAsyncError(async(req,res,next)=>{

//     const user = await User.findById(req.user._id);


//     res.status(200).json({
//         success:true,
//         user,
//     });
// });

// //ChangePassword
// export const changePassword = catchAsyncError(async(req,res,next)=>{

//     const {oldPassword, newPassword} = req.body;
//     if(!oldPassword ||!newPassword)
//      return next(new ErrorHandler("Please enetr all fields",400));

//     const user = await User.findById(req.user._id).select("+password");

//     const isMatch =await user.comparePassword(oldPassword);
//     if(!isMatch) return next(new ErrorHandler("Inccorect Old Password",400));

//     user.password= newPassword;
//     await user.save();
//     res.status(200).json({
//         success:true,
//         mesaage:"Password Changed Successfully",
//     });
//     });
// //Update profile
//     export const updateProfile = catchAsyncError(async(req,res,next)=>{

//         const {name, email} = req.body;
        
    
//         const user = await User.findById(req.user._id);
//         if(name) user.name = name;
//         if(email) user.email = email;

//         await user.save();
//         res.status(200).json({
//             success:true,
//             mesaage:"Profile Updated Successfully",
//         });
//         });

//         export const updateprofilepicture = catchAsyncError(async(req,res,next)=>{
//             //Cloudinary:TODO
//             res.status(200).json({
//                 success:true,
//                 message:"Profile Picture Updated Successfully",
//             });
//         });

//         //fogetPassword
//         export const ForgetPassword = catchAsyncError(async(req,res,next)=>{
    

//         const {email} = req.body;

//         const user =await User.findOne({email});

//         if(!user) return next(new ErrorHandler("No user found with this email Id",400))
//         //RestToken


//         const resetToken = await user.getResetToken();
//         // http://localhost:3000/resetpassword/yfguguhbugbu;
//         await user.save();

//         const url= `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
        
//         const message  = `Click on the link to rest your password. ${url} .If you have not requesedt then please ignore.`;

//         //Send token via email
//       await  sendEmail(user.email,"ChareShare Reset Password",message)
                                            

//             res.status(200).json({
//                 success:true,
//                 message:`Reset Token has been sent to ${user.email}`,
//             });

//         });
//         export const resetPassword = catchAsyncError(async(req,res,next)=>{
    
//             const {token} = req.params;

//             const resetPasswordToken = crypto
//             .createHash("sha256")
//             .update(token)
//             .digest("hex");

//             const user = await User.findOne({
//                 resetPasswordToken,
//                 resetPasswordExpire:{
//                     $gt:Date.now(),
//                 },
                
//             });
//             if(!user)return next(new ErrorHandler("Token is invalid or has been expired"));

//             user.password = req.body.password;
//             user.resetPasswordToken=undefined;
//             user.resetPasswordExpire=undefined;
//             await user.save();

//             res.status(200).json({
//                 success:true,
//                 message:"Password Changed Successfully",

//             });
            
//         });

        
//        export const AddtoPlaylist = catchAsyncError(async(req,res,next)=>{;
//         const user = await User.findById(req.user._id);

//         const course = await Course.findById(req.body.id);

//         if (!course)return next (new ErrorHandler("Invalid Course Id",404));

//         const itemExist = user.playlist.find((item)=>{
//             if(item.course.toString()===course._id.toString()) return true;

//         })
//     if(itemExist) return next(new ErrorHandler("Item Already Exists",409));

//         user.playlist.push({
//             course: course._id,
//             poster: course.poster.url,
//         });

//         await user.save();
    

//         res.status(200).json({
//             success:true,
//             message:"Added to Playlist!"
//              });
//         });
        
        

        
       
//        //Remove from Playlist
//        export const removeFromPlaylist = catchAsyncError(async(req,res,next)=>{;
//         const user = await User.findById(req.user._id);

//         const course = await Course.findById(req.query.id);

//         if (!course)return next (new ErrorHandler("Invalid Course Id",404));

        


//         const newPlaylist = user.playlist.filter(item=>{
//             if(item.course.toString()!==course._id.toString()) return item;
//         })
        
//         user.playlist = newPlaylist;
//         await user.save();

//         res.status(200).json({
//             success:true,
//             message:"Removed From Playlist!"
//              });
//         });

//         export const getAllUser = catchAsyncError(async(req,res,next)=>{;
//             const uesrs = await User.find({})
    
//             res.status(200).json({
//                 success:true,
//                 uesrs,
//                  });
//             });

        
        
        

        
       