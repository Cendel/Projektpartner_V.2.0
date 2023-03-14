import React from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { TiLocationOutline } from "react-icons/ti";
import "./projects.scss";

const ProjectCard = (props) => {
  const {
    projectPlace,
    estimatedImplementationDate,
    slogan,
    shortDesc,
    projectImage,
    createdBy,
    createdDate,
    sharesTaken,
    shareValue,
    projectValue,
    totalShares,
  } = props;
  const daysUntilImplementation = Math.round(
    (new Date(estimatedImplementationDate) - new Date()) / 86400000
  );

  const totalDays = Math.round(
    (new Date(estimatedImplementationDate) - new Date(createdDate)) / 86400000
  );

  return (
    <div className="project-card">
      <div className="image">
        <img src={projectImage} alt="" className="img-fluid" />
      </div>
      <div className="details">
        <h5>{slogan}</h5>

        <div className="desc">{shortDesc}</div>
        <div className="button-wrapper">
          <Button variant="primary">erstellt von {createdBy}</Button>
        </div>
        <div className="progress">
          <ProgressBar
            striped={false}
            variant="success"
            now={new Date(totalDays - daysUntilImplementation)}
            max={new Date(totalDays)}
            label={""}
            className="progress-bar-card"
          />
        </div>
        <div className="progress-info">
          <div className="location">
            <div>
              <TiLocationOutline />
            </div>
            <h5>{projectPlace}</h5>
          </div>
          <h5 className="under-progress">
            <span>noch</span> {daysUntilImplementation} Tage
          </h5>
        </div>

        <div className="progress">
          <ProgressBar
            className="progress-bar-card"
            animated={false}
            striped={true}
            now={sharesTaken}
            max={totalShares}
            label={""}
            variant={"success"}
          />
        </div>
        <div className="progress-info">
          <h5 className="under-progress" style={{ textAlign: "left" }}>
            {(sharesTaken * shareValue).toLocaleString()} €
          </h5>

          <h5 className="under-progress">{projectValue.toLocaleString()} €</h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
