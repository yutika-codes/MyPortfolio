import "../styles/Home.css";
import PreNavbar from  './PreNavbar'
import {  Outlet, Route} from "react-router-dom"
import Slider from './Slider';
// import data from '../data/data.json';
// import Offers from "./Offers";
import  {Heading} from './Heading';
// import StarProduct from './Components/StarProduct';
// import HotAccessoriesMenu from './HotAccessoriesMenu';
// import HotAccessories from './HotAccessories';
import ProductReviews from './DonarReviews';
// import Videos from "./Videos.js"
// import Banner from "./Banner.js"
// import Footer from "./Footer.js"
// import NavOptios from "./NavOptios.js"
import HowItWorksMenu from './HowItWorksMenu';
// import HowItWorks from './HowItWorks';
// import HowItWorks from "./HowItWorksCard.js"
// import HowItWorksCardNgos from "./HowItWorksCardNgos.js";
// import HowItWorksCardDonar from "./HowItWorksCardDonar.js";
import Footer from "./Footer";
import Quotes from "./Quotes";
import Hscroll from "./Hscroll";
import Urgent from "./Urgent";
// import Categories from "./Categories";

function Home() {
  return (
<div>
<PreNavbar/>
<Slider/>
<Quotes/>
<Heading text="HOW IT WORKS ?" />
<HowItWorksMenu/>

{/* <Outlet></Outlet> */}
<Heading text="CATEGORIES" />
<Hscroll/>

{/* <Outlet></Outlet> */}
<Heading text="TESTIMONIALS" />
       {/* <Heading text="HOT ACCESSORIES" />
<HotAccessoriesMenu /> */}
{/* <Categories/> */}
{/* <Routes>
<Route exact path="/music"element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />}/>

<Route exact path="/smartDevice" element={ <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />}>
      
       </Route>

       <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}>
       
       </Route>

       <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}>
       
       </Route>

       <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}>
       
       </Route>
       </Routes>
       <Heading text="PRODUCT REVIEWS"/>

      //  <ProductReviews productReviews={data.productReviews}/>

       <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>

       <Banner  banner={data.banner}/> */}
        <ProductReviews/>
       <Footer/>
</div>

  );
}

export default Home;
