import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import img2 from "../../Assets/img2.jfif";
import "./FAQ.css";
const FAQ = () => {
    return (
        <div className='w-50 mx-auto mt-2 mb-3 question'>
            <>
            <img src={img2} />
            </>
            <Accordion  className="mt-3"defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Whats your website name?</Accordion.Header>
        <Accordion.Body>
         Learning Guru.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>what is your purpose of this website?</Accordion.Header>
        <Accordion.Body>
         Learning guru website is created mainly who are beginner for learning  programming language.
          In this website has a lot programming language resource there and student can easily  understand
          and student get more enjoy for learning a code.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default FAQ;