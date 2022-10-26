import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./CardDetails.css";
const CardDetails = ({courses}) => {
  const {name,logo,Videos} =courses;
    return (
        <CardGroup className=' card'>
        <Card>
          <Card.Img style={{maxHeight:"200px"}} className='card-img' variant="top" src={logo}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
       
      </CardGroup>
    );
};

export default CardDetails;