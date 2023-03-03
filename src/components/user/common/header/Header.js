import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

import "./header.scss";
import { settings } from "../../../../helpers/settings";
import { Link, useLocation } from "react-router-dom";
import Menubar from "./Menubar";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Navbar expand={false} className=" navbar">
      <Container fluid>
        <Navbar.Brand href="/">
          <h5>{settings.siteName}</h5>
        </Navbar.Brand>
        <Menubar />
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
                    to="/contact"
                    className={pathname.startsWith("/contact") ? "active" : ""}
                  >
                    <h5>Kontakt</h5>
                  </Link>
                </li>
              </ul>

              <Nav.Link
                className="project-form-button-navbar"
                as={Link}
                to="/project-form"
                active={pathname === "/project-form"}
              >
                <Button>Project erstellen</Button>
              </Nav.Link>

              <div className="separator"></div>

              <NavDropdown title="Benutzername" className="userName">
                <NavDropdown.Item as={Link} to="/admin">
                  Profile
                </NavDropdown.Item>
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
