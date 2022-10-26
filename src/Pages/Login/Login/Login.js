import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { ButtonGroup } from 'react-bootstrap';
import { useContext } from 'react';

import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../Context/AuthProvider.js/AuthProvider';
const Login = () => {
    const [error,setError] = useState('');
    const {signIn,providerLogin} = useContext(AuthContext);
    const navigate= useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    
   const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
           form.reset();
           setError('');
            navigate('/')
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }

    const handleSignInGoogle =()=>{
        providerLogin(googleProvider)
  
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const handleSignInGithub = ()=>{
        providerLogin(gitProvider)
  
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
    }
    
    return (
        <div className='w-50 mx-auto mt-3'>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className='mt-2'>Not have an accout <Link to="/register">Signup here</Link></p>
        <Form.Text className="text-danger">
                {error}
            </Form.Text>
      </Form>
      <ButtonGroup vertical>
      <Button onClick={handleSignInGoogle}  className='mb-2' variant="outline-primary" ><FaGoogle></FaGoogle> Login with google</Button>
       <p className='mx-auto'>or</p>
      <Button onClick={handleSignInGithub} variant="outline-dark"><FaGithub></FaGithub> Login with github</Button>
        </ButtonGroup>
      </div>
    );
};

export default Login;