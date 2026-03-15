import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#3D3D3D', color: '#FFFFFF', padding: '40px 0' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Zivara jewelry for weddings, events, and special occasions.</p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@zivara.com</p>
            <p>Phone: +1 234 567 890</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <FaFacebook size={25} className="me-2" />
            <FaInstagram size={25} className="me-2" />
            <FaTwitter size={25} />
          </Col>
        </Row>
        <hr style={{ backgroundColor: '#B76E79' }} />
        <p className="text-center mt-3">&copy; 2025 Zivara. All Rights Reserved.</p>
      </Container>
    </div>
  );
};

export default Footer;
