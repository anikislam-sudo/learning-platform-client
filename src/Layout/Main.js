import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSide from '../Pages/Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col className='bg-light mt-2' lg="2">
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg="10">
                       <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
           
        </div>
    );
};

export default Main;