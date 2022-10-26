import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaBookOpen, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider.js/AuthProvider';



const Header = () => {
  const{user,logOut} = useContext(AuthContext);
  const handleLogOut =()=>{
    logOut()
    .then(result=>{
      const user = result.user;
       console.log(user);
    })
    .catch(error=>console.error(error))
  }
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
            <Nav.Link href="#deets">
              {
            user?.uid ?    
         <>
         <span>{user?.displayName}</span>
         <button onClick={handleLogOut} className='btn btn-warning'>Log Out</button>
         </>
         :
         <>
         <Link to="/login">Login</Link>
         <Link to="/register">Register</Link>
         </>
         }
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {
                user?.photoURL ?
                <Image
                 style={{height:"40px"}} 
                 roundedCircle 
                 src={user.photoURL}></Image>
                  :
                  <FaUser></FaUser>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;