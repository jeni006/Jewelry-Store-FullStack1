// SpecialOffers.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const SpecialOffers = () => {
  const offers = [
    { text: "20% Off Bridal Sets", img: "/images/bridal_set.jpg" },
    { text: "15% Off Polki Sets", img: "/images/polki_set.jpg" }
  ];

  return (
    <div style={{ width: "100%", backgroundColor: "#FAF3E0", padding: "50px 0" }}>
      <Container>
        <h2 className="text-center mb-4" style={{fontFamily: 'Playfair Display, serif',color:"#530000ff" }}>Special Offers</h2>
        <Row className="mb-5">
          {offers.map((offer, idx) => (
            <Col md={6} key={idx} className="mb-3">
              <Card className="shadow-sm">
                <Card.Img src={offer.img} style={{ height: "250px", objectFit: "cover" }} />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                  <h3 className="text-white">{offer.text}</h3>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SpecialOffers;
