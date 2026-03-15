import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useLocation ,useNavigate} from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product ||{};
const [mode] = useState(product?.type || "buy");
const [name, setName] = useState(product?.name || "");
const [email, setEmail] = useState(product?.email || "");
const [date, setDate] = useState(product?.date || "");
const [eventLocation, setEventLocation] = useState(product?.eventLocation || "");
const [pickup, setPickup] = useState(product?.pickup || "Pickup by us");
const [deliveryAddress, setDeliveryAddress] = useState(product?.deliveryAddress || "");
const [paymentMethod, setPaymentMethod] = useState(product?.paymentMethod || "Credit/Debit Card");
const [shipping, setShipping] = useState(product?.shipping || "Standard");
const [success, setSuccess] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      productName: product.name,
      mode,
      name,
      email,
      date,
      eventLocation,
      pickup,
      deliveryAddress,
      paymentMethod,
      shipping,
    };

    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    storedBookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(storedBookings));
    navigate("/booking")

    setSuccess(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        backgroundcolor: "#FAF3E0",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        style={{
          maxWidth: "650px",
          backgroundImage: "url('/Bookingimg2.jpg')",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          color: "#faf2f2ff",
        }}
      >
        <header className="mb-4 text-center">
          <h1 className="display-5">Jewellery Booking</h1>
        </header>

        <div className="progress mb-4">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "40%", backgroundColor: "#530000ff" }}
          ></div>
        </div>

        <h2 className="mb-3 text-center">
          {mode === "buy" ? "Buy" : "Rent"} Form - {product.name}
        </h2>

        {success && (
          <Alert variant="success" className="text-center">
            {mode === "buy"
              ? " Purchase Successful!"
              : `Booking Successful for ${date}!`}
          </Alert>
        )}

        {!success && (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
                style={{
                  color: "#530000ff",
                  boxShadow: "0 4px 10px #530000ff",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                style={{
                  color: "#530000ff",
                  boxShadow: "0 4px 10px #530000ff",
                }}
              />
            </Form.Group>

            {mode === "rent" && (
              <div className="p-3 mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    style={{
                      color: "#530000ff",
                      boxShadow: "0 4px 10px #530000ff",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Event Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City / Venue"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    required
                    style={{
                      color: "#530000ff",
                      boxShadow: "0 4px 10px #530000ff",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Return / Pickup</Form.Label>
                  <Form.Select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    style={{
                      color: "#530000ff",
                      boxShadow: "0 4px 10px #530000ff",
                    }}
                  >
                    <option>Pickup by us</option>
                    <option>Drop off by you</option>
                  </Form.Select>
                </Form.Group>
              </div>
            )}

            {mode === "buy" && (
              <div className="p-3 mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>Delivery Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    required
                    style={{
                      color: "#530000ff",
                      boxShadow: "0 4px 10px #530000ff",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    style={{
                      color: "#530000ff",
                      boxShadow: "0 4px 10px #530000ff",
                    }}
                  >
                    <option>Credit/Debit Card</option>
                    <option>UPI</option>
                    <option>Cash On Delivery</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Shipping Options</Form.Label>
                  <Form.Select
                    value={shipping}
                    onChange={(e) => setShipping(e.target.value)}
                    style={{
                      color: "#530000ff",
                      boxShadow: "0 4px 10px #530000ff",
                    }}
                  >
                    <option>Standard</option>
                    <option>Express</option>
                  </Form.Select>
                </Form.Group>
              </div>
            )}

            <Button
              variant="danger"
              type="submit"
              className="w-100 py-2"
              style={{ fontWeight: "bold" }}
            >
              {mode === "buy" ? "Buy Now" : "Book Now"}
            </Button>
          </Form>
        )}
      </Container>
    </div>
  );
};

export default BookingPage;
