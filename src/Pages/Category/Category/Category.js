import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import"./Category.css"
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider.js/AuthProvider';

const Category = () => {
    const {handleCheckOut}= useContext(AuthContext);
    const course = useLoaderData();
    const {_id,name,logo,Videos,Description}=course;
    const handlePremium=(item) =>{
        handleCheckOut(item);
    }
   // console.log("edd",course);
    return (
        
     <div className="  card1  mx-auto mt-3 mb-3  ">
        <Card className='border border-2'>
        <Card.Img className="image1"  variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
         
          <Card.Text>
        <p ><span className='fw-bold'>Description:</span> {Description}</p>
          </Card.Text>
        </Card.Body>
        <button onClick={()=>handlePremium(name)} className='btn btn-primary'>Get premium Access</button>
      </Card>
     </div>   

      
         
    );
};

export default Category;