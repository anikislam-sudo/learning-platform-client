import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../../Shared/LeftSide/LeftSide';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="3">
          <LeftSide></LeftSide>
        </Col>
        
        </Row>
        </Container>
             
    );
};

export default Courses;