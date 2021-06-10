import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TicketData from '../../TicketData/TicketData.json'
import Ticket from '../Ticket/Ticket';
const Tickets = () => {
    const [tickets, SetTickets] = useState([])
    useEffect(()=> SetTickets(TicketData), [])
    return (
        <>
            <Container className="pt-5 d-flex align-items-center justify-content-center" style={{minHeight:"60vh"}}>
                <Row>
                {
                        tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} />)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Tickets;