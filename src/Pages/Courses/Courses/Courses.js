import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CardDetails from '../../Shared/Card-Details/CardDetails';
import LeftSide from '../../Shared/LeftSide/LeftSide';
import "./Courses.css"

const Courses = () => {
    const Allcourses =useLoaderData();
    //console.log("anik",Allcourses);
    return (
        <Container>
            <Row>
                <Col lg="2">
          <LeftSide></LeftSide>
        </Col>
        <Col md="9">
        <div className='card-container '>
        {
            Allcourses.map(courses=><CardDetails 
            key ={courses.id}
            courses={courses}
            ></CardDetails>)
        }
     </div>
     </Col>
        
        </Row>
        </Container>
             
    );
};

export default Courses;