import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = { name, email, password };

    axios.post("http://localhost:8080/api/auth/register", userData)
      .then(res => {
        alert(`User registered: ${res.data.name}`);
        navigate("/login");
      })
      .catch(err => {
        console.error(err);
        alert("Registration failed. Try again.");
      });
  };

  return (
    <Container className="my-5" style={{ maxWidth: "400px" }}>
      <h2 style={{ color: '#530000ff' }}>Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button type="submit" style={{backgroundColor:"#530000ff",border:"none"}}>Register</Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
