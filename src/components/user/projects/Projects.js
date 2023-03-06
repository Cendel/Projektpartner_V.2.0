import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Spacer from "../../common/spacer/Spacer";
import ProjectCard from "./ProjectCard";
import "./projects.scss";
import { Link } from "react-router-dom";
import { getAllProjects } from "../../../api/project-service.";
import Loading from "../../common/loading/Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const result = await getAllProjects();
      setProjects(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Spacer height={40} />
      <div className="project-group">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Row className="g-5 groupRow">
              {projects.map((project) => (
                <Col
                  key={project.id}
                  md={6}
                  lg={4}
                  as={Link}
                  to={`/projects/${project.id}`}
                  className="groupCol"
                >
                  <ProjectCard {...project} />
                </Col>
              ))}
            </Row>
          </>
        )}
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
