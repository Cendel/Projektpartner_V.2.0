import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import logo from "../../../assets/img/logo/logo.png";
import {
  RiHome3Line,
  RiUser3Line,
  RiCarLine,
  RiFileList3Line,
  RiLogoutCircleRLine,
  RiDashboardLine,
  RiMessage3Line,
} from "react-icons/ri";
//import { useAppDispatch } from "../../../store/hooks";
//import { question } from "../../../helpers/functions/swal";
//import { logout } from "../../../store/slices/auth-slice";
//import { encryptedLocalStorage } from "../../../helpers/functions/encrypt-storage";
import "./sidebar.scss";

const Sidebar = () => {
  //const dispatch = useAppDispatch();
  //const navigate = useNavigate();

  /*const handleLogout = () => {
    question("Logout", "Are you sure to logout?").then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        encryptedLocalStorage.removeItem("token");
        navigate("/");
      }
    });
  };*/

  return (
    <Navbar bg="primary" expand="lg" className="admin-navbar" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">
              <RiDashboardLine /> Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              <RiUser3Line /> Benutzer
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/project-edit">
              <RiCarLine /> Projekte
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              <RiFileList3Line /> Reservations
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/contact-messages">
              <RiMessage3Line /> Contact Messages
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <RiHome3Line /> Web Site
            </Nav.Link>
            <Nav.Link onClick="">
              <RiLogoutCircleRLine /> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
