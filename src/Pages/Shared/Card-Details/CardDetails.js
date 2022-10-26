import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./CardDetails.css";
import { faStar,faStarHalf,faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CardDetails = ({courses,course}) => {
  const {name,logo,Videos} =courses;
    return (
        <CardGroup className=' card'>
        <Card>
          <Card.Img style={{maxHeight:"200px"}} className='card-img' variant="top" src={logo}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <h6> <FontAwesomeIcon className="ml-2 font-bold pl-2" icon={faVideo} />:{Videos}</h6>
              raing:4.5
              <FontAwesomeIcon className="text-warning"icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
               <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStarHalf} />
           
            
             <h6>price:$2000</h6>
             
              
          
            </Card.Text>
          </Card.Body>
          <button className='btn btn-primary'>Buy</button>
        </Card>
       
      </CardGroup>
    );
};

export default CardDetails;