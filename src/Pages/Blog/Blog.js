import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import img3 from "../../Assets/img3.png";
import "./Blog.css";
const Blog = () => {
    return (
        <div className='w-50 mx-auto mt-3 blog'>
           <img src={img3} /> 
           
        <Accordion className='mt-3' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>what is cors?</Accordion.Header>
        <Accordion.Body>
        Cross-origin resource(cors) sharing  is a browser security feature
        that restricts cross-origin HTTP requests that are initiated from scripts 
        running in the browser. If your REST API's resources receive non-simple 
        cross-origin HTTP requests, you need to enable CORS support.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        Because Firebase makes develop high-quality apps, grow your user base, and earn more money.
        Each feature works independently, and they work even better together.

        Firebase Authentication provides backend services, easy-to-use SDKs,
        and ready-made UI libraries to authenticate users to your app. 
        It supports authentication using passwords, phone numbers,
        popular federated identity providers like Google, Facebook and Twitter, and more.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The private route component is similar to the public route,
        the only change is that redirect URL and authenticate condition.
        If the user is not authenticated he will be redirected to the login page 
        and the user can only access the authenticated routes If he is authenticated (Logged in).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
        Node. js is an open-source, cross-platform JavaScript runtime environment and library for 
        running web applications outside the client's browser.

        It is a used as backend service where javascript works on the server-side of the application. 
        This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine
        which converts javascript code into machine code,
        it is highly scalable, lightweight, fast, and data-intensive.


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    );
};

export default Blog;