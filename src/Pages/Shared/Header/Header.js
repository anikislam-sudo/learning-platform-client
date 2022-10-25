import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaBookOpen } from 'react-icons/fa';



const Header = () => {
    const [theme,setTheme] = useState("light-theme");
    const toggleTheme =() =>{
        if(theme === "dark-theme"){
            setTheme('light-theme');
        }
        else{
            setTheme('dark-theme');
        }
    };
    useEffect(()=>{
        document.body.className =theme;
    },[theme])
    return (
        <Navbar className='mb-1' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
       <FaBookOpen className='text-warning '></FaBookOpen> Learning Guru </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto p-2 ">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link href="/Courses/:id">Courses</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
             <button onClick={toggleTheme} className=" btn btn-sm btn-secondary border border-2 rounded ms-2" > dark/light</button>
            
          </Nav>
          <Nav className='ms-2 ps-3'>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;