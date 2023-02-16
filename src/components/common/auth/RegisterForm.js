import React from "react";
import { Button, Form } from "react-bootstrap";

const RegisterForm = () => {
  return (
    <Form>
      <h3>Registrieren</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="E-Mail-Adresse" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Passwort" />
      </Form.Group>
      <Button>Registrieren</Button>
    </Form>
  );
};

export default RegisterForm;
