import express from "express"
import { register,login,DonarReviews,displayReviews, postCategory, Adminupdates, updateDocument} from "../controllers/userController.js";
// import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

//To Register new user
const router = express.Router();

router.route("/register").post(register);

//Login
router.route("/login").post(login);//post is used to send data to server(write/edit/alter action).

// review
router.route("/addreview").post(DonarReviews);

//display reviews
router.route("/review").get(displayReviews);

//post category by Ngo
router.route("/postcategory").post(postCategory);

//get category by admin
router.route("/get").get(Adminupdates);

//adding category by admin after verfication to homepage
router.route("/update").post(updateDocument);

//Logout
// router.route("/logout").get(logout);

//Get my profile
// router.route("/me").get(isAuthenticated,getMyProfile);//get is used to return to database without altering anything.It is also called read only request.

//change password
// router.route("/changepassword").put(isAuthenticated,changePassword);//put is used if we want to make any changes update to database.

//update profile
// router.route("/updateprofile").put(isAuthenticated,updateProfile);

//updateProfilePicture
// router.route("/updateprofilepicture").put(isAuthenticated,updateprofilepicture);

//ForgetPassword
// router.route("/forgetpassword").post(ForgetPassword);
//ResetPassword
// router.route("/resetpassword/:token").put(resetPassword);
//AddtoPlaylist
// router.route("/addtoplaylist").post(isAuthenticated,AddtoPlaylist);
//RemoveFromPlaylist
// router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist);

//Admin routes
// router.route("/admin/user").get(isAuthenticated,authorizeAdmin,getAllUser)

export default router;