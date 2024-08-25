import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import AboutUs from './Components/AboutUs.js';
import Home from "./Components/Home.js"
import Error from "./Components/Error.js"
import Main from './Components/Main.js';
import HowItWorksCardDonar from './Components/HowItWorksCardDonar';
// import HowItWorksMenu from './Components/HowItWorksMenu';
import HowItWorksCardNgos from './Components/HowItWorksCardNgos';
import Login from './Components/Login.js';
import RegistrationDonor from "./Components/RegistrationDonor.js";
import RegistrationNGO from "./Components/RegistrationNGO.js";
import ContactUs from './Components/ContactUs';
import HowItWorks from "./Components/HowItWorks.js"
import Sidebar from './Components/NgoProfile.js/Sidebar';
import DisplayReviews from './Components/DisplayReviews';
import Post from './Components/NgoProfile.js/Post';
import EditProfile from "./Components/NgoProfile.js/EditProfile"
import AdminGet from "./Components/AdminProfile/AdminGet.js"
import AdminSidebar from './Components/AdminProfile/AdminSidebar';
import Urgent from './Components/Urgent';
// import Hscroll from './Components/Hscroll';
import Animals from "./Components/Animals.js"
import Hunger from "./Components/Hunger.js"
import Education from "./Components/Education.js"
import FoodFridge from "./Components/FoodFridge.js"
import Hscroll from './Components/Hscroll';
import HowItWorksMenu from './Components/HowItWorksMenu';
import Addcategories from './Components/AdminProfile/Addcategories';





// import HowItWorks from './Components/HowItWorks';
//import { Route } from 'react-router-dom';
function App() {
  return (

       <BrowserRouter>
<Routes>
      <Route  path="/" element={<Main/>}>
        {/* <Route path="/" element={<Home/>}/>  */}
      <Route  path="/about" element={<AboutUs/>}/>
      <Route  path="/Login" element={<Login/>}/>
      <Route  path="/contact" element={<AdminSidebar/>}/>
      <Route path="/update"element={<AdminGet/>}/>
      <Route path="/AdminsPost"element={<DisplayReviews/>}/>
      <Route path="/RegistrationDonor"element={<RegistrationDonor/>}/>
      <Route path="/RegistrationNGO"element={<RegistrationNGO/>}/>
      <Route path="/howitworks"element={<Sidebar/>}/>
       <Route path="/post"element={<Post/>}/>
      <Route path="/NgoProfile"element={<EditProfile/>}/>
      <Route path="/review"element={<DisplayReviews/>}/>
  <Route path="*" element={<Error/>}/>
 

</Route>
{/* <Route path="/AdminDashboard"element={<AdminSidebar/>}>
  <Route  path="update" element={<AdminGet/>}/>
  <Route  path="AdminsPost" element={<Addcategories/>}/>
      </Route> */}
      <Route path="/" element={<Home/>}>
        <Route element={<HowItWorksCardDonar/>}/>
       
      <Route path="careShare"element ={<HowItWorksCardDonar/>}/>    
      <Route path="ForNGOs"  element={<HowItWorksCardNgos/>}/>
       </Route>

       <Route path="/" element={<Home/>}>
        <Route index element={<Urgent/>}/>
       
      <Route path="urgent"element ={<Urgent/>}/>    
      <Route path="animals"  element={<Animals/>}/>
      <Route path="hunger"  element={<Hunger/>}/>
      <Route path="education"  element={<Education/>}/>
      <Route path="Foodfridge"  element={<FoodFridge/>}/>
     
      
       </Route> 
      {/* </Route>

     
       
      
      
      {/* <Route path="urgent" element={<Urgent/>}/> */}
     
    
      

      {/* </Route> */}
       
  {/* <Route index element={<HowItWorksMenu/>}/> */}
       </Routes>
</BrowserRouter>

  );
}

export default App;
