import React from 'react';

import img1 from "../../../Assets/img1.jpg"
import "./Home.css";


const Home = () => {
    return (
      <div className='main'>
       <div className="img mt-2 ">
        <img src={img1}/>
        </div>
        <div className=' fw-bold text1'>
          <h2>Welcome to Learning Guru World!!!</h2>
          <button className='btn btn-warning'>Get Started</button>
        </div>
        </div>
    );
};

export default Home;