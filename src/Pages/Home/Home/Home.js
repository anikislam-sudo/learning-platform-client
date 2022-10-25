import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../../../Assets/pic1.jpg";
import pic2 from "../../../Assets/pic2.jpg";
import pic3 from "../../../Assets/pic3.jpg";
import "./Home.css";
const Home = () => {
    return (
        <Carousel >
        <Carousel.Item>
          <img 
            className="d-block w-100 opacity-78"
            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption className='mb-5 text-light'>
            <h1 className='pb-5  fw-bold fs-2'>Welcome to Learning Guru World!!!</h1>
            <h3 className='pb-5 fw-bold fs-3'>Keep going.<br></br>Everything you need will come to you at the <br></br>perfect time.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-78"
            src={pic2}
            alt="Second slide"
          />
  
          <Carousel.Caption className='mb-5 text-light'>
            <h1 className='pb-5 fw-bold fs-2'>Welcome to Learning Guru World!!!</h1>
            <h3 className='pb-5 fw-bold fs-3'>Keep going.<br></br>Everything you need will come to you at the <br></br>perfect time.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-78"
            src={pic3}
            alt="Third slide"
          />
  
          <Carousel.Caption className='mb-5 text-light'>
            <h1 className='pb-5 fw-bold fs-2'>Welcome to Learning Guru World!!!</h1>
            <h3 className='pb-5 fw-bold fs-3'>Keep going.<br></br>Everything you need will come to you at the <br></br>perfect time.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Home;