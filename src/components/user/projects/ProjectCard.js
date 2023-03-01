import React from "react";
import { Button, ProgressBar } from "react-bootstrap";
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
        <h5>"no sweets - Köstliches, schuldfreies Snacken"</h5>

        <div className="desc">
          "No Sweets" stellt in Mannheim köstliche und gesunde vegane Snacks
          ohne Industriezucker her.
        </div>
        <div className="button-wrapper">
          <Button variant="primary">erstellt von Creavision GmBH</Button>
        </div>
        <div className="progress">
          <ProgressBar
            striped
            variant="success"
            now={4}
            max={7}
            label={""}
            className="progress-bar-card"
          />
        </div>
        <h5 className="under-rogress">
          <span>noch</span> 34 Tage
        </h5>
      </div>
    </div>
  );
};

export default ProjectCard;
