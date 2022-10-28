import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import"./Category.css"


const Category = () => {
    
    const course = useLoaderData();
    const {_id,name,logo,Description}=course;
    
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
        <button className='btn btn-primary'><Link className='text-white' to={`checkout/${_id}`}>Get premium Access</Link></button>
      </Card>
     </div>   

      
         
    );
};

export default Category;