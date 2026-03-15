import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#530000ff' }} className="shadow-sm" variant="dark">
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', color: '#cbc0a2ff' }}
                >
                    Zivara
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" style={{ color: '#cbc0a2ff' }}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/category" style={{ color: '#cbc0a2ff' }}>Category</Nav.Link>
                        <Nav.Link as={Link} to="/product-page" style={{ color: '#cbc0a2ff' }}>Product Details</Nav.Link>
                        <Nav.Link as={Link} to="/cart" style={{ color: '#cbc0a2ff' }}>Cart</Nav.Link>
                        <Nav.Link as={Link} to="/booking" style={{ color: '#cbc0a2ff' }}>Booking</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to="/login" style={{ color: '#cbc0a2ff' }}>Login</Nav.Link>
                        <Nav.Link as={Link} to="/register" style={{ color: '#cbc0a2ff' }}>Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
