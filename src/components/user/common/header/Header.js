import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

import "./header.scss";
import { settings } from "../../../../helpers/settings";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Navbar expand={false} className="mb-3 navbar">
      <Container fluid>
        <Navbar.Brand href="#">{settings.siteName}</Navbar.Brand>
        <Navbar.Toggle className="toggle" />
        <Navbar.Offcanvas placement="end" className="offCanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{settings.siteName}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <ul>
                <li>
                  <Link to="/" className={pathname === "/" ? "active" : ""}>
                    Home
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/projects"
                    className={pathname.startsWith("/projects") ? "active" : ""}
                  >
                    Projekts
                  </Link>
                </li>
              </ul>

              <div className="separator"></div>

              <NavDropdown title="Benutzername" className="userName">
                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Meine Projekte
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Abmelden</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
