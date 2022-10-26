import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { ButtonGroup } from 'react-bootstrap';
const Login = () => {
    return (
        <div className='w-50 mx-auto mt-3'>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className='mt-2'>Not have an accout <Link to="/register">Signup here</Link></p>
      </Form>
      <ButtonGroup vertical>
      <Button  className='mb-2' variant="outline-primary" ><FaGoogle></FaGoogle> Login with google</Button>
      <Button variant="outline-dark"><FaGithub></FaGithub> Login with github</Button>
        </ButtonGroup>
      </div>
    );
};

export default Login;