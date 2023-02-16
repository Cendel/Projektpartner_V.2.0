import React, { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./auth.scss";

const Auth = () => {
  const [register, setRegister] = useState(false);

  return (
    <Container className="board ">
      <Col xs={10} sm={8} md={6} lg={4}>
        {!register ? <LoginForm /> : <RegisterForm />}
        <h5 className="mt-5 command-line">
          {!register
            ? "Sie haben noch kein Konto? "
            : "Sie haben bereits ein Konto? "}

          <span className="command" onClick={() => setRegister(!register)}>
            {!register ? " Registrieren" : "Anmelden"}
          </span>
        </h5>
      </Col>
    </Container>
  );
};

export default Auth;
