import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Spacer from "../../common/spacer/Spacer";
import ProjectCard from "./ProjectCard";
import "./projects.scss";

const Projects = () => {
  const image = "breads-1867459_1920.jpg";
  const image1 = "try1.jpg";
  const image2 = "try2.jpg";
  const image3 = "try3.jpg";
  const image4 = "try4.jpg";
  const image5 = "try5.jpg";

  return (
    <Container>
      <Spacer />
      <div className="project-group">
        <Row className="g-5 groupRow">
          <h2>Empfohlene Projekte</h2>
          <Col md={6} lg={4}>
            <ProjectCard ada={image} />
          </Col>
          <Col md={6} lg={4}>
            <ProjectCard ada={image1} />
          </Col>
          <Col md={6} lg={4}>
            <ProjectCard ada={image2} />
          </Col>
          <Col>
            <ProjectCard ada={image3} />
          </Col>
          <Col md={6} lg={4}>
            <ProjectCard ada={image4} />
          </Col>
          <Col md={6} lg={4}>
            <ProjectCard ada={image5} />
          </Col>
        </Row>
      </div>
      <Spacer />
    </Container>
  );
};

export default Projects;
