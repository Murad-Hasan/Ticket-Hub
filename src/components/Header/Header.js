import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg='dark'  variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/' className="py-0" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    E-Ticket-Hub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" />
                    <Nav>
                        <Nav.Link as={Link} to='/' style={{ fontWeight: "500" }}>Home</Nav.Link>
                        <Nav.Link as={Link} to='/destination' style={{ fontWeight: "500" }}>Destination</Nav.Link>
                        {
                            loggedInUser.name ? <Nav.Link style={{ fontWeight: "500", color:'#FFF' }}>{loggedInUser.name}</Nav.Link> : <Nav.Link as={Link} to='/login' style={{ fontWeight: "500" }}>LogIn</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;