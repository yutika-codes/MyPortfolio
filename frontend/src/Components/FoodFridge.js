import "../styles/Card.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function FoodFridge() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className="App">
 
  <Carousel responsive={responsive}>
   <div className='card'>
    <img className='product--image' 
    src='https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg' alt='i not found'></img>
    <h2>sports sneakers</h2>
    <p className='price'>$20</p>
    <p> some description  about product</p>
    <p>
    <button>share</button>
      <button>donate now</button>
    </p>
   </div>
   
      
   <div className='card'>
    
    <img className='product--image' 
    src='https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg' alt='i not found'></img>
    <h2>sports sneakers</h2>
    <p className='price'>$20</p>
    <p> some description  about product</p>
    <p>
    <button>share</button>
      <button>donate now</button>
    </p>
   </div>
   <div className='card'>
    <img className='product--image' 
    src='https://th.bing.com/th/id/OIP.ThEd5toPUhA31pHt5uc-JgHaLk?w=186&h=290&c=7&r=0&o=5&dpr=1.8&pid=1.7' alt='i not found'></img>
    <h2>join for the adoption of cute puppies </h2>
    <p className='price'>empty</p>
    <p> some description  about product</p>
    <p>
    <button>share</button>
      <button>donate now</button>
    </p>
   </div>
   <div className='card'>
    <img className='product--image' 
    src='https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg' alt='i not found'></img>
    <h2>sports sneakers</h2>
    <p className='price'>$20</p>
    <p> some description  about product</p>
    <p>
    <button>share</button>
      <button>donate now</button>
    </p>
   </div>
   </Carousel>
    </div>
  );
}

export default FoodFridge;