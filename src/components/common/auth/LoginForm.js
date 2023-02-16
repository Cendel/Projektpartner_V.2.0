import React from "react";
import { Button, Form } from "react-bootstrap";
import "./auth.scss";

const LoginForm = () => {
  return (
    <Form>
      <h3>Anmelden</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="E-Mail-Adresse" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Passwort" />
      </Form.Group>

      <Button>Anmelden</Button>
    </Form>
  );
};

export default LoginForm;
