import "../styles/Home.css";
// import PreNavbar from  './PreNavbar'
import { Outlet} from "react-router-dom";
// import data from '../data/data.json';
import PreNavbar from "./PreNavbar";
import Footer from "./Footer";
// import PreNavbar from "./PreNavbar";


//import { Route } from 'react-router-dom';
function Main() {
  return (
<div>
      <PreNavbar/>
      <Outlet></Outlet>
      <Footer/>

</div>

  );
}

export default Main;
