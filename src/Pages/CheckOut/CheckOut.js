import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../Context/AuthProvider.js/AuthProvider';

const CheckOut = () => {
  const {enroll} = useContext(AuthContext);
    return (
      <div>
       <h1>{enroll}</h1>
      </div>
      
    );
};

export default CheckOut;