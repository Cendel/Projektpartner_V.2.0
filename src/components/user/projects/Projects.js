import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Spacer from "../../common/spacer/Spacer";
import ProjectCard from "./ProjectCard";
import "./projects.scss";
import { Link } from "react-router-dom";
import { getAllProjects } from "../../../api/project-service.";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getAllProjects();
      setProjects(result.data);
    };
    fetchProjects();
  }, []);

  return (
    <Container>
      <Spacer height={10} />
      <div className="project-group">
        <Row className="g-5 groupRow">
          <h2 className="projects-title">Projekte</h2>
          {projects.map((project) => (
            <Col
              key={project.id}
              md={6}
              lg={4}
              as={Link}
              to={`/projects/${project.id}`} // use the project id to generate the link
              className="groupCol"
            >
              <ProjectCard {...project} />
            </Col>
          ))}
          <h2 className="projects-title">Projekte</h2>
        </Row>
      </div>
      <div className="more-button-div g-5">
        <Button as={Link} to="/projects" className="more-button">
          mehr anzeigen
        </Button>
      </div>

      <Spacer />
    </Container>
  );
};

export default Projects;
