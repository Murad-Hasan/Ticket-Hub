import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import SearchResult from '../../components/Search/Search'
const Destination = () => {

    return (
        <Container>
            <Row>
                <Col xs={12} md={4}>
                <SearchResult/>
                </Col>
                <Col xs={12} md={8}>
                    <GoogleMap />
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;