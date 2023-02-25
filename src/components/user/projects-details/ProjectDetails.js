import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./projectDetails.scss";

const ProjectDetails = () => {
  return (
    <Container className="project-details-container">
      <Row>
        <Col xs={12} md={6}>
          <img
            src="https://via.placeholder.com/400x300.png?text=Project+Image"
            alt="Project"
            className="project-details-image"
          />
        </Col>
        <Col xs={12} md={6} className="project-details-text">
          <h1 className="project-details-title">Project Title</h1>
          <p className="project-details-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat.
          </p>
          <p className="project-details-created-by">Created by: John Doe</p>
          <p className="project-details-created-at">Created at: 12/10/2022</p>
          <p className="project-details-tags">
            Tags: <a href="#">tag1</a>, <a href="#">tag2</a>,{" "}
            <a href="#">tag3</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetails;
