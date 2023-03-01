import React from "react";
import { Button } from "react-bootstrap";
import "./projects.scss";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="image">
        <img
          src={require(`../../../assets/img/${props.ada}`)}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="details">
        <h5>Bröselige Köstlichkeiten</h5>

        <div className="desc">
          "No Sweets" stellt in Mannheim köstliche und gesunde vegane Snacks
          ohne Industriezucker her.
        </div>
        <div className="button-wrapper">
          <Button variant="primary">erstellt von Creavision GmBH</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
