import React from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.scss";
import { settings } from "../../../../helpers/settings";
import logomm from "../../../../assets/img/logo/logomm.png";
import {
  MdOutlineHome,
  MdInfoOutline,
  MdOutlineHeadphones,
  MdOutlinePrivacyTip,
} from "react-icons/md";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import { Link, useLocation } from "react-router-dom";
import ContactInfo from "../../contact/contact-info/ContactInfo";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className="appFooter">
      <Row className="g-5 footerRow">
        <Col lg={6} xl={5}>
          <Link to="/">
            <img
              src={logomm}
              alt={settings.siteName}
              className="img-fluid logo"
            />
          </Link>
          <p>
            Wir glauben an die Kraft von Kreativität, Zusammenarbeit und
            Innovation.
          </p>
        </Col>
        <Col lg={6} xl={3}>
          <h2>Unsere Partner</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Col>
        <Col lg={6} xl={2}>
          <h2>Links</h2>
          <ul>
            <li>
              <Link to="/" className={pathname === "/" ? "active" : ""}>
                <MdOutlineHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={pathname.startsWith("/projects") ? "active" : ""}
              >
                <AiOutlineFundProjectionScreen /> Projekte
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                <MdInfoOutline /> Über uns
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={pathname === "/contact" ? "active" : ""}
              >
                <MdOutlineHeadphones /> Kontakt
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className={pathname === "/privacy-policy" ? "active" : ""}
              >
                <MdOutlinePrivacyTip /> Datenschutz
              </Link>
            </li>
          </ul>
        </Col>
        <Col lg={6} xl={2} className="adama">
          <h2>Kontakt</h2>
          <ContactInfo />
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
