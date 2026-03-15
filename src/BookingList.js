import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BookingListPage = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleDelete = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <Container style={{ marginTop: "30px", marginBottom: "50px" }}>
      <h1 className="text-center mb-4">All Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-center">No bookings yet.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Mode</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date / Delivery</th>
              <th>Location / Address</th>
              <th>Payment / Pickup</th>
              <th>Shipping</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{booking.productName}</td>
                <td>{booking.mode}</td>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.date || "-"}</td>
                <td>{booking.eventLocation || booking.deliveryAddress}</td>
                <td>{booking.mode === "buy" ? booking.paymentMethod : booking.pickup}</td>
                <td>{booking.mode === "buy" ? booking.shipping : "-"}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <div className="text-center mt-3">
        <Button variant="primary" onClick={() => navigate("/bookings")}>
          Back to Booking Form
        </Button>
      </div>
    </Container>
  );
};

export default BookingListPage;
