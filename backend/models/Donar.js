import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";

//registration for donar
const DonarRegistrationSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        required:[true,"Please enter your Firstname"],
    },

    Lastname:{
        type:String,
        required:[true,"Please enter your Lastname"],
    },

    //Email
    email:{
        type: String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:validator.isEmail,
    },
//Password
password:{
    type: String,
    required:[true,"Please enter your email"],
    // minLength:[6,"Password must be atleast 6 cahracter"],
    // select:false,
},

cpassword:{
    type: String,
    required:[true,"Please enter your email"],
    // minLength:[6,"Password must be atleast 6 cahracter"],
    // select:false,
},


phone:{
    type :Number,
    required:true,
},
pincode:{
    type:Number,
    required:true,
},
address:{
        type:String,
        required: true,
},
Role:{
    type: String,
    enum: ["admin","donar","NGO"],
    // deafult:"user"
},
tokens:[
    {
         token:{
            type:String,
            required: true,
         }
    }
]


});













//hashing of password

DonarRegistrationSchema.pre("save",async function(next){
    //while updating profile like profile picture that we don't want the password to be hashed again
    // if the password is not changed in that case return next and if the password is changed then hash the password.
    if(this.isModified("password")){
     this.password = await bcrypt.hash(this.password,10);
     this.cpassword =  await bcrypt.hash(this.cpassword,10);
}
     next();
});

//generatin Token
DonarRegistrationSchema.methods.generateAuthToken = async function (){
    try{
    let token = jwt.sign({ _id: this._id },process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({token:token});
   await this.save();
   return token;
}catch (err){
    console.log(err);
}
}

// DonarRegistrationSchema.methods.getJWTToken =function (){
//    return jwt.sign({ _id: this._id },process.env.JWT_SECRET,{
//          expiresIn:"15d",
//      });
//      };
// DonarRegistrationSchema.methods.comparePassword = async function (password){
//     //  console.log(this.password);
//     return await bcrypt.compare(password,this.password);//1 param for the password entered by user and second param for hashed password from database.
//  }


// // console.log(crypto.randomBytes(20).toString("hex"));
// schema.methods.getResetToken = function (){

// const resetToken = crypto.randomBytes(20).toString("hex");

// this.resetPasswordToken  = crypto
// .createHash("sha256")
// .update(resetToken)
// .digest("hex");

// this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

// return resetToken;
// };
export const Donar = mongoose.model("DonarRegistration",DonarRegistrationSchema);










