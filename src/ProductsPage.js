
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const categoryProducts = location.state?.products || [];
  const [products, setProducts] = useState(categoryProducts);

  // Filters state
  const [filters, setFilters] = useState({
    maxPrice: Math.max(...categoryProducts.map(p => p.price), 100000),
    maxWeight: 100,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    const filtered = categoryProducts.filter((p) => {
      const weight = p.weight || 85;
      return p.price <= filters.maxPrice && weight <= filters.maxWeight;
    });
    setProducts(filtered);
  }, [filters, categoryProducts]);

  const handleViewDetails = (product) => {
    navigate("/category", { state: { product } });
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4" style={{ color: "#530000ff" }}>
        Products
      </h2>

      {/* Filters */}
      <Form className="mb-4 d-flex gap-3 flex-wrap">
        <Form.Group>
          <Form.Label>Max Price (₹)</Form.Label>
          <Form.Control
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Max Weight (g)</Form.Label>
          <Form.Control
            type="number"
            name="maxWeight"
            value={filters.maxWeight}
            onChange={handleFilterChange}
          />
        </Form.Group>
      </Form>

      {/* Product Cards */}
      <Row>
        {products.length === 0 && (
          <p>No products match the selected filters.</p>
        )}
        {products.map((product, idx) => (
          <Col md={4} sm={6} key={idx} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={product.img}
                style={{ height: "350px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <b>₹{product.price}</b> <br />
                  Weight: {product.weight || 85}g <br />
                  Metal: {product.metal || "Gold"} <br />
                  Stone: {product.stone || "Emerald"} <br />
                  Occasion: {product.occasion || "Wedding"}
                </Card.Text>
                <Button
                  style={{ backgroundColor: "#530000ff", border: "none" }}
                  onClick={() => handleViewDetails(product)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
