import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Highlights = () => {
  return (
    <div style={{ backgroundColor: '#530000ff', padding: "8px" }}>
      <Container className="my-5">

        <h2 className="text-center mb-4" style={{ color: "#cbc0a2ff", fontFamily: 'Playfair Display, serif' }}>Category Highlights</h2>
        <Row className="mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
          {[
            { title: "Diamond Sets", img: "/images/diamond.jpg", link: "/category" },
            { title: "Kundan Sets", img: "/Images/kundan.jpg", link: "/category" },
            { title: "Bridal Sets", img: "/images/bridal.jpg", link: "/category" }
          ].map((cat, idx) => (
            <Col md={4} key={idx} className="mb-3">
              <Card className="h-100 text-center shadow-sm">
                <Card.Img variant="top" src={cat.img} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{cat.title}</Card.Title>
                  <Link to={cat.link}>
                    <Button
                      style={{ backgroundColor: "#530000ff",color:"#FAF3E0", border: "1px solid #530000ff"   }}
                    >
                      Explore {cat.title}
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
};

export default Highlights;
