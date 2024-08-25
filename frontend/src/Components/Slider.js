import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Slider.css";

const Slider = () => {
    return (
        <Carousel fade>
       

      
            <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tprf.org/wp-content/uploads/2022/11/awakening-dignity-appeal-Ranchi-girls-f5f5f5-scaled.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://files.globalgiving.org/pfil/14596/ph_14596_50148.jpg?m=1375083406000"
              alt="Second slide"
            />
          </Carousel.Item>
      
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/12/soundofhope.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.globalgiving.org/pfil/21618/pict_original.jpg?w=460&h=306&auto=compress,enhance&fit=crop&crop=faces,center&format=auto&dpr=2"
              alt="Fourth slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://nenow.in/wp-content/uploads/2019/07/Community-fridge.jpg"
              alt="Fifth slide"
            />
          </Carousel.Item>
      </Carousel>
    )
}

export default Slider
