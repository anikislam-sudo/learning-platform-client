import React, { useState } from 'react';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/Courses-Categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))

    },[])
    return (
        <div className='mt-2'>
            <h4>All Courses:{categories.length}</h4>
            {
                categories.map(category =><ListGroup  key={category.id}>
                    <ListGroup.Item className='bg-warning mb-2'><Link to={`/category/${category.id}`} className='text-dark fs-4 text-decoration-none'>{category.name}</Link></ListGroup.Item>
                    
                  </ListGroup> )
            }
        </div>
    );
};

export default LeftSide;