import React from "react";
import {
  Container,
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
            <Offcanvas.Title className="title">
              <h3>{settings.siteName}</h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <ul>
                <li>
                  <Link to="/" className={pathname === "/" ? "active" : ""}>
                    <h5>Home</h5>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/projects"
                    className={pathname.startsWith("/projects") ? "active" : ""}
                  >
                    <h5>Projekte</h5>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/about"
                    className={pathname.startsWith("/about") ? "active" : ""}
                  >
                    <h5>Über uns</h5>
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
