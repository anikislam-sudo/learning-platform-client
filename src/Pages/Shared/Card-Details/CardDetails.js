import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./CardDetails.css";
import { faStar,faStarHalf,faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const CardDetails = ({courses}) => {
  const {name,logo,Videos,_id} =courses;

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
             
             <Link  className=' text-decoration-none'>Read More...</Link>
          
            </Card.Text>
          </Card.Body>
          
        </Card>
       
      </CardGroup>
    );
};

export default CardDetails;