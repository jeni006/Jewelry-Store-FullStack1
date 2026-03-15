

import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

const WhyChooseUs = () => {
  const features = [
    { title: "Certified Jewelry", desc: "Authentic certified jewels for your big day.", bg: "#FAF3E0",color:"#530000ff" },
    { title: "Easy Booking", desc: "Book jewelry sets online hassle-free.", bg: "#FAF3E0",color:"#530000ff" },
    { title: "Event Delivery", desc: "On-time delivery for your special events.", bg: "#FAF3E0",color:"#530000ff" }
  ];

  return (
    <div style={{ backgroundColor: '#530000ff' ,padding:"8px"}}>
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: "#FAF3E0" ,fontFamily: 'Playfair Display, serif'}}>Why Choose Us</h2>
      <Row>
        {features.map((item, idx) => (
          <Col md={4} key={idx} className="mb-3">
            <Card className="text-center h-100 shadow-sm" style={{ backgroundColor: item.bg }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default WhyChooseUs;
