import React, { useContext } from "react";
import { Container, Row, Col, Table, Button, Card } from "react-bootstrap";
import { CartContext } from "./components/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + (item.type === "buy" ? item.price : item.rentPrice) * item.quantity,
    0
  );

  const handleCheckout = (item) => {
    navigate("/bookings", { state: { product: item } });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf3e0", 
        fontFamily: "'Playfair Display', serif", 
        padding: "2rem",
        color: "#4b3832", 
      }}
    >
      <Container>
        <h2
          className="cart-title text-center mb-4"
          style={{ fontWeight: "700", color: "#530000ff" }}
        >
          My Cart
        </h2>

        {cartItems.length === 0 && (
          <p className="text-center text-muted">Your cart is empty.</p>
        )}

        {cartItems.length > 0 && (
          <>
          
            <Row>
              <Col md={12}>
                <Table responsive bordered hover className="bg-white rounded shadow-sm">
                  <thead style={{ background: "#530000ff", color: "#fff" }}>
                    <tr>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={item.img}
                            alt={item.name}
                            width={60}
                            className="rounded shadow-sm"
                          />
                        </td>
                        <td style={{ fontWeight: "500" }}>{item.name}</td>
                        <td style={{ color: "#530000ff", fontWeight: "600" }}>
                          ₹{item.type === "buy" ? item.price : item.rentPrice}
                        </td>
                        <td>
                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                            }
                          >
                            −
                          </Button>{" "}
                          <span style={{ fontWeight: "500" }}>{item.quantity}</span>{" "}
                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </td>
                        <td style={{ fontWeight: "600", color: "#530000ff" }}>
                          ₹
                          {(item.type === "buy" ? item.price : item.rentPrice) *
                            item.quantity}
                        </td>
                        <td>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            🗑
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>

          
            <Row className="mt-4">
              <Col md={12}>
                <Card
                  className="shadow-sm border-0"
                  style={{
                    background: "#530000ff", 
                    color: "#FAF3E0",
                  }}
                >
                  <Card.Body>
                    <h5 style={{ color: "#FAF3E0", fontWeight: "bold" }}>
                      Order Summary
                    </h5>
                    <hr />
                    <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                      Total: <span style={{ color: "#FAF3E0" }}>₹{subtotal}</span>
                    </p>
                    {cartItems.map((item) => (
                      <Button
                        key={item.id}
                        className="w-100 mb-2"
                        style={{
                          background: "linear-gradient(to right,#FAF3E0 , #fdd565ff)",
                          border: "none",
                          color: "#530000ff",
                          fontWeight: "600",
                        }}
                        onClick={() => handleCheckout(item)}
                      >
                        Proceed to {item.type === "buy" ? "Buy" : "Rent"}
                      </Button>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default CartPage;