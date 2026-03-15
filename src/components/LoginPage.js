import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = { email, password };

    axios.post("http://localhost:8080/api/auth/login", loginData)
      .then(res => {
        alert(`Logged in as ${res.data.name}`);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch(err => {
        console.error(err);
        alert("Login failed. Check email/password.");
      });
  };

  return (
    <Container className="my-5" style={{ maxWidth: "400px" }}>
      <h2 style={{ color: '#530000ff' }}>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button type="submit" style={{backgroundColor:"#530000ff", border:"none"}}>Login</Button>
        <p className="mt-3">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </Container>
  );
};

export default LoginPage;
