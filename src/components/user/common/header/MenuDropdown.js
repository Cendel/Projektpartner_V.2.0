import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuDropdown = () => {
  return (
    <NavDropdown title="Benutzername" className="userName">
      <NavDropdown.Item as={Link} to="/profile/1">
        Profil
      </NavDropdown.Item>
      <NavDropdown.Item href="#action4">Meine Projekte</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item as={Link} to="/admin-projects">
        Dashboard
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">Abmelden</NavDropdown.Item>
    </NavDropdown>
  );
};

export default MenuDropdown;
