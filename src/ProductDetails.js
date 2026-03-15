import React, { useState, useContext } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "./components/CartContext";


const ProductDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = location.state?.product;
  const [mainImage] = useState(product?.img || "");

  if (!product) return <p>Product not found</p>;

  const handleCart = (type) => {
    addToCart(product, type);
    navigate("/cart");
  };

  const suggestedProducts = [
    {
      id: 1,
      name: "Noor-e-Dulhan Bridalset",
      price: 70000,
      img: "/category/bridalset3.jpg",
    },
    {
      id: 2,
      name: "Twinkle Heritage Diamond Set",
      price: 85000,
      img: "/category/diamond5.jpg",
    },
    {
      id: 3,
      name: "Royal Glow Kundan Set",
      price: 70000,
      img: "/category/kundanset1.jpg",
    },
  ];

  return (
    <Container className="my-5">
      <div className="mb-3 text-muted">&gt; &gt; {product.name}</div>

      <Row>
       
        <Col md={6} className="text-center">
          <Image
            src={mainImage}
            alt={product.name}
            fluid
            className="rounded shadow-sm mb-3"
            style={{ maxHeight: "450px" }}
          />
        </Col>

        <Col md={6}>
          <h2 style={{ color: "#530000ff" }}>{product.name}</h2>
          <p className="text-muted">Product Code: {product.code}</p>

          <h4 className="mt-3">
            ₹{product.price} <span className="text" style={{color:"#530000ff"}}>(Buy)</span>
          </h4>
          <h5 className="mt-2">
            ₹{product.rentPrice}/Day{" "}
            <span className="text" style={{color:"#530000ff"}}>(Rent)</span>
          </h5>

          <div className="d-flex gap-3 my-3 flex-wrap">
            <Button style={{backgroundColor:"#530000ff",border:"none"}} onClick={() => handleCart("buy")}>
              Buy
            </Button>
            <Button style={{backgroundColor:"#530000ff",border:"none"}}  onClick={() => handleCart("rent")}>
              Rent
            </Button>
          </div>
          <ul className="list-unstyled mt-3">
            <li>
              <b>Weight:</b> {product.weight || "85g"}
            </li>
            <li>
              <b>Metal:</b> {product.metal || "Gold"}
            </li>
            <li>
              <b>Stone:</b> {product.stone || "Emerald"}
            </li>
            <li>
              <b>Finish:</b> {product.finish || "Antique"}
            </li>
            <li>
              <b>Occasion:</b> {product.occasion || "Wedding"}
            </li>
          </ul>

          <p className="mt-3">
            {product.description ||
              "A premium emerald bridal necklace with antique finish, crafted for weddings."}
          </p>
        </Col>
      </Row>

      <div className="mt-5">
        <h4 style={{ color: "#530000ff" }}>You may also like</h4>
        <Row className="mt-3">
          {suggestedProducts.map((item) => (
            <Col md={4} key={item.id} className="mb-3">
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={item.img}
                  alt={item.name}
                  style={{ height: "380px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>₹{item.price}</Card.Text>
                  <Button
                  style={{backgroundColor:"#530000ff",border:"none"}}
                    size="sm"
                    onClick={() =>
                      navigate("/category", { state: { product: item } })
                    }
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ProductDetailsPage;