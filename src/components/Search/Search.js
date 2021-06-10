import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import TicketData from '../../TicketData/TicketData.json'


const Search = () => {
    const { register, handleSubmit } = useForm();
    let {id} = useParams();
    const ticketsDetails = TicketData.find(singleTicket => singleTicket.id === id)
    const [defaultTicket, setDefaultTicket] = useState({
        ticketType: 'One Time Pass',
        cost: 100,
    })
    const[destinationPlace, setDestinationPlace] = useState({
        isSearch: false,
        pickFrom: '',
        pickTo: '',
        date: ''
    });
    const onSubmit = data => {
        if ( data.pickFrom && data.pickTo && data.date) {
            setDestinationPlace(data , data.isSearch = 'true');
        }
    }
    return (
        <>
            {
                destinationPlace.isSearch? <Card className="mt-5" style={{ background: "#EFEFEF", borderRadius: "10px" }}>
                <Card.Body>
                    <div>
                    <h4 className='text-center bold'>Journey Date: {destinationPlace.date}</h4>
                    <Row className="mx-3 mb-3 bg-white" style={{ borderRadius: "5px" }}>
                         <Col md="9" xs="8" className="d-flex align-items-center px-0">
                            <Card.Body className="px-2">
                                <Card.Title  style={{ marginRight: "50px" }}>{destinationPlace.pickFrom}</Card.Title>
                                <strong>To</strong>
                                <Card.Title>{destinationPlace.pickTo}</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row>
                    </div>
                    <div>
                        <h3 className="text-center">Ticket Price</h3>
                        
                           {
                               ticketsDetails ? 
                               <>
                               <Row className="mx-3 mb-3 bg-white" style={{ borderRadius: "5px" }}>
                        <Col md="3" xs="4" className="d-flex justify-content-center align-content-center py-3">
                            <Card.Img variant="left" src="https://i.ibb.co/FgvcB44/tickets-3.png" style={{ height: "50px" }} />
                        </Col>
                         <Col md="9" xs="8" className="d-flex align-items-center px-0">
                            <Card.Body className="px-0">
                                <Card.Title className="d-inline" style={{ marginRight: "50px" }}>{ticketsDetails.ticketType}</Card.Title>
                                <Card.Title className="d-inline">৳{ticketsDetails.cost}</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row>
                               <Row className="mx-3 mb-3 bg-white" style={{ borderRadius: "5px" }}>
                        <Col md="3" xs="4" className="d-flex justify-content-center align-content-center py-3">
                            <Card.Img variant="left" src="https://i.ibb.co/FgvcB44/tickets-3.png" style={{ height: "50px" }} />
                        </Col>
                         <Col md="9" xs="8" className="d-flex align-items-center px-0">
                            <Card.Body className="px-0">
                                <Card.Title className="d-inline" style={{ marginRight: "50px" }}>{ticketsDetails.ticketType}</Card.Title>
                                <Card.Title className="d-inline">৳{ticketsDetails.cost}</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row>
                               <Row className="mx-3 mb-3 bg-white" style={{ borderRadius: "5px" }}>
                        <Col md="3" xs="4" className="d-flex justify-content-center align-content-center py-3">
                            <Card.Img variant="left" src="https://i.ibb.co/FgvcB44/tickets-3.png" style={{ height: "50px" }} />
                        </Col>
                         <Col md="9" xs="8" className="d-flex align-items-center px-0">
                            <Card.Body className="px-0">
                                <Card.Title className="d-inline" style={{ marginRight: "50px" }}>{ticketsDetails.ticketType}</Card.Title>
                                <Card.Title className="d-inline">৳{ticketsDetails.cost}</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row>
                     </>
                               :
                               <>
                               <Row className="mx-3 mb-3 bg-white" style={{ borderRadius: "5px" }}>
                        <Col md="3" xs="4" className="d-flex justify-content-center align-content-center py-3">
                            <Card.Img variant="left" src="https://i.ibb.co/FgvcB44/tickets-3.png" style={{ height: "50px" }} />
                        </Col>
                         <Col md="9" xs="8" className="d-flex align-items-center px-0">
                            <Card.Body className="px-0">
                                <Card.Title className="d-inline" style={{ marginRight: "50px" }}>{defaultTicket.ticketType}</Card.Title>
                                <Card.Title className="d-inline">৳{defaultTicket.cost}</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row> 
                               <Row className="mx-3 mb-3 bg-white" style={{ borderRadius: "5px" }}>
                        <Col md="3" xs="4" className="d-flex justify-content-center align-content-center py-3">
                            <Card.Img variant="left" src="https://i.ibb.co/FgvcB44/tickets-3.png" style={{ height: "50px" }} />
                        </Col>
                         <Col md="9" xs="8" className="d-flex align-items-center px-0">
                            <Card.Body className="px-0">
                                <Card.Title className="d-inline" style={{ marginRight: "50px" }}>{defaultTicket.ticketType}</Card.Title>
                                <Card.Title className="d-inline">৳{defaultTicket.cost}</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row> 
                               <Row className="mx-3 mb-3 bg-white" style={{ borderRadius: "5px" }}>
                        <Col md="3" xs="4" className="d-flex justify-content-center align-content-center py-3">
                            <Card.Img variant="left" src="https://i.ibb.co/FgvcB44/tickets-3.png" style={{ height: "50px" }} />
                        </Col>
                         <Col md="9" xs="8" className="d-flex align-items-center px-0">
                            <Card.Body className="px-0">
                                <Card.Title className="d-inline" style={{ marginRight: "50px" }}>{defaultTicket.ticketType}</Card.Title>
                                <Card.Title className="d-inline">৳{defaultTicket.cost}</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row> 
                    </>
                           }
                        <button as={Link} to='/home' className='btn btn-outline-success'>Go Back</button>
                    </div>
                </Card.Body>
            </Card> :
            <Card className="mt-5" style={{ background: "#EFEFEF", borderRadius: "10px" }}>
            <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Pick From</Form.Label>
                        <Form.Control className="shadow-none" {...register("pickFrom")} type="text" placeholder="From" required autoFocus />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Pick To</Form.Label>
                        <Form.Control className="shadow-none" {...register("pickTo")} type="text" placeholder="To" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control className="shadow-none" {...register("date")} type="date" />
                    </Form.Group>
                    <Button variant="primary" {...register("isSearch")} className="shadow-none mt-2" type="submit" block>
                        Search
                    </Button>
                </Form>
            </Card.Body>
        </Card>
            }
        </>
    );
};

export default Search;