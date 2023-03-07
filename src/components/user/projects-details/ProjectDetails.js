import React, { useEffect, useState } from "react";
import "./projectDetails.scss";
import imageRounded from "../../../assets/img/rounded-bottom.svg";
import { Accordion, Button, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Spacer from "../../common/spacer/Spacer";
import DownloadSection from "./DownloadSection";
import { TiLocationOutline } from "react-icons/ti";
import { deleteProject, getProject } from "../../../api/project-service.";
import { question, toast } from "../../../helpers/functions/swal";
import { Link, useParams } from "react-router-dom";
import Loading from "../../common/loading/Loading";
import { convertCurrentDateToUserFormat } from "../../../helpers/functions/date-time";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const result = await getProject(projectId);
      setProject(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  //handles scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const detailsEl = document.querySelector(".project-details");
      const detailsContainerEl = document.querySelector(
        ".project-screen-image"
      );

      if (window.innerHeight >= scrollPos) {
        detailsEl.style.marginTop = `${window.innerHeight - scrollPos}px`;
      } else {
        detailsEl.style.marginTop = "0px";
      }
      detailsContainerEl.style.opacity = `0.${
        scrollPos < 450 ? 999 - scrollPos : 549
      }`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const removeProject = async () => {
    question(
      "Sind Sie sicher, dass Sie löschen möchten?",
      "Das können Sie nicht rückgängig machen!"
    ).then((result) => {
      if (result.isConfirmed) {
        try {
          deleteProject(projectId);
          toast(
            "Das Projekt wurde erfolgreich gelöscht.",
            "success",
            10000,
            true
          );
          window.history.back();
        } catch (err) {
          toast("Das Löschen konnte nicht durchgeführt werden", "warning");
        } finally {
        }
      }
    });
  };

  const daysUntilImplementation = Math.round(
    (new Date(project.estimatedImplementationDate) - new Date()) / 86400000
  );

  const totalDays = Math.round(
    (new Date(project.estimatedImplementationDate) -
      new Date(project.createdDate)) /
      86400000
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="project-details-main-component">
          <div>
            <img
              src={project.projectImage}
              alt="bakery"
              className="project-screen-image"
            />
          </div>
          <div className="project-details-container">
            <div>
              <img src={imageRounded} alt="" className="imageRounded" />
            </div>
          </div>
          <div className="main-title">
            <h1>{project.projectTitle}</h1>
            <h4>{project.shortDesc}</h4>
          </div>
          <Container className="project-details">
            <div className="title">
              <h5>{project.projectTitle}</h5>
            </div>
            <div className="details-box">
              <div className="first-part">
                <div className="info-left">{project.longDesc}</div>
                <div className="info-right">
                  <div className="createdBy">
                    <span> erstellt von</span>
                    <h5>
                      <a
                        href="https://creavision.de/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.createdBy}
                      </a>
                    </h5>
                  </div>
                  <div className="location">
                    <div>
                      <TiLocationOutline />
                    </div>
                    <h5>{project.projectPlace}</h5>
                  </div>
                </div>
              </div>
              <div className="second-part">
                <div className="left">
                  <ProgressBar
                    className="progress"
                    animated={false}
                    now={new Date(totalDays - daysUntilImplementation)}
                    max={new Date(totalDays)}
                    label={""}
                    variant={"success"}
                  />
                  <div className="numeric-info">
                    <div>
                      <h5>
                        {convertCurrentDateToUserFormat(project.createdDate)}
                      </h5>
                      <span>Startdatum</span>
                    </div>
                    <div>
                      <h5> 7</h5> <span>Projektbeteiligte</span>
                    </div>
                    <div>
                      <h5>
                        {" "}
                        {convertCurrentDateToUserFormat(
                          project.estimatedImplementationDate
                        )}
                      </h5>
                      <span>Fertigstellungsdatum</span>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <Button>Unterstützen</Button>
                  <Button>Abonieren</Button>
                </div>
              </div>
            </div>
          </Container>
          <Spacer height={30} />
          <Container>
            <DownloadSection files="{files}" />
          </Container>
          <Spacer height={30} />
          <Container>
            <Accordion className="accordion-info" alwaysOpen>
              <Accordion.Item eventKey="0" className="item">
                <Accordion.Header className="ada">
                  <h5>Worum geht es in dem Projekt?</h5>
                </Accordion.Header>
                <Accordion.Body>{project.about}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h5>Was sind die Ziele und wer ist die Zielgruppe?</h5>
                </Accordion.Header>
                <Accordion.Body>{project.goal}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h5>Wer steht hinter dem Projekt?</h5>
                </Accordion.Header>
                <Accordion.Body>{project.support}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="project-details-edit-buttons">
              <Button onClick={removeProject}>PROJEKT LÖSCHEN</Button>

              <Button
                className="edit-button"
                as={Link}
                to={`/project-edit/${projectId}`}
                mode="edit"
              >
                PROJEKT AKTUALISIEREN
              </Button>
            </div>
          </Container>
          <Spacer />
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
