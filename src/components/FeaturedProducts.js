import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const products = [
  { name: 'Eternal Fusion Set', price: '71000', img: '/category/fusionset2.jpg', link: "/category" },
  { name: 'Sitara Bridal Set', price: '72000', img: '/category/bridalset5.jpg', link: "/category" },
  { name: 'Royal Kundan Set', price: '50000', img: '/category/kundanset-1.jpg', link: "/category" },
  { name: 'Celestia Polki Set', price: '7100', img: '/category/polkiset4.jpg', link: "/category" },
];

const FeaturedProducts = () => {
  return (
    <div className="my-5 text-center"
         style={{
            backgroundColor: '#FAF3E0',
            padding: '40px 0'
        }}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#530000ff' }}>Latest Products</h2>
      <Row className="mt-4 justify-content-center">
        {products.map((prod, idx) => (
          <Col key={idx} xs={10} sm={6} md={3} className="mb-4 d-flex justify-content-center">
            <Link to={prod.link} style={{ textDecoration: 'none', width: '100%' }}>
              <Card style={{ 
                borderRadius: '12px', 
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.29)', 
                maxWidth: '250px',
                justifyContent:"center",
                alignItems:"center",
                width: '100%'
              }}>
                <Card.Img 
                  variant="top" 
                  src={prod.img} 
                  style={{ 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderTopLeftRadius: '12px', 
                    borderTopRightRadius: '12px' 
                  }} 
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '1rem', fontFamily: 'Playfair Display, serif', color:"#530000ff" }}>
                    {prod.name}
                  </Card.Title>
                  <Card.Text style={{ color: '#530000ff', fontSize: '0.9rem' }}>
                    ₹{prod.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedProducts;
