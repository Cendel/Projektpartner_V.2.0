import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";

const Menubar = () => {
  const { pathname } = useLocation(); //problem: hangi sayfada bulunuyorsak, o sayfanin buton aktif görünsün: Bunun icin önce react-router-dom dan gelen useLocation hook unu kullanarak useLocation dan bulundugumuzu path i aliyoruz, daha sonra ilgili nav.link lere kodumuzu yaziyoruz.

  return (
    <div className="menubar">
      <Navbar>
        <Container className="links">
          <Nav className="asaaa">
            <Nav.Link
              as={Link}
              to="/projects"
              active={pathname.startsWith("/projects")}
            >
              Projekte
            </Nav.Link>
            <Nav.Link as={Link} to="/about" active={pathname === "/about"}>
              Über uns
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" active={pathname === "/contact"}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Container>
        <Nav.Link
          className="project-form-button"
          as={Link}
          to="/project-form"
          active={pathname === "/project-form"}
        >
          <Button>Project erstellen</Button>
        </Nav.Link>
        <NavDropdown title="Benutzername" className="userName">
          <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Meine Projekte</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Abmelden</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
  );
};

export default Menubar;
