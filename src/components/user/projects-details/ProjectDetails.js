import React, { useEffect } from "react";
import "./projectDetails.scss";
import image from "../../../assets/img/breads-1867459_1920.jpg";
import imageRounded from "../../../assets/img/rounded-bottom.svg";
import { Accordion, Button, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Spacer from "../../common/spacer/Spacer";
import DownloadSection from "./DownloadSection";

const ProjectDetails = () => {
  const files = [
    {
      name: "Leistungen",
      url: "https://file-examples.com/storage/fe00fb1b6463fa60ca184a7/2017/10/file-sample_150kB.pdf",
    },
    {
      name: "ProjectbildPng",
      url: "https://file-examples.com/storage/fe00fb1b6463fa60ca184a7/2017/10/file_example_PNG_500kB.png",
    },
    {
      name: "Projectbild",
      url: "https://file-examples.com/storage/fe00fb1b6463fa60ca184a7/2017/10/file_example_JPG_2500kB.jpg",
    },

    {
      name: "Projektdokument",
      url: "https://sample-videos.com/doc/Sample-doc-file-100kb.doc",
    },
  ];

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
      detailsContainerEl.style.opacity = `0.${window.innerHeight - scrollPos}`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="project-details-main-component">
      <div>
        <img src={image} alt="bakery" className="project-screen-image" />
      </div>
      <div className="project-details-container">
        <div>
          <img src={imageRounded} alt="" className="imageRounded" />
        </div>
      </div>
      <div className="main-title">
        <h1>Bröselige Köstlichkeiten</h1>
      </div>
      <Container className="project-details">
        <div className="title">
          <h5>Bröselige Köstlichkeiten</h5>
        </div>
        <div className="details-box">
          <div className="first-part">
            <div className="info-left">
              Wir sind ein Unternehmen, das vegane, glutenfreie Snacks ohne
              Industriezucker herstellt. Unsere Marke "no sweets" steht für
              köstliche und schuldgefreie Snackoptionen. Wir verwenden
              hochwertige Zutaten und produzieren unsere Snack Bites mit viel
              Liebe in Deutschland. Unsere Produkte ermöglichen es Ihnen, sich
              gesund und befriedigend zu ernähren, ohne dabei auf Geschmack
              verzichten zu müssen. Wir suchen derzeit nach neuen Investoren, um
              unser Geschäft auszubauen und unsere leckeren Snacks noch mehr
              Kunden zugänglich zu machen. Begleiten Sie uns auf unserem Weg zu
              einer gesünderen Snackkultur!
            </div>
            <div className="info-right">
              erstellt von
              <h5>
                <a href="www.google.com">Creavision GmBH</a>
              </h5>
            </div>
          </div>
          <div className="second-part">
            <div className="left">
              <ProgressBar
                className="progress"
                animated={false}
                now={4}
                max={7}
                label={"Teilnehmer/-innen"}
                variant={"success"}
              />
              <div className="numeric-info">
                <div>
                  <h5> 5. Oktober 2022</h5>
                  <span>Startdatum</span>
                </div>
                <div>
                  <h5> 7</h5> <span>Projektbeteiligte</span>
                </div>
                <div>
                  <h5> 2. Juni 2023</h5>
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
        <DownloadSection files={files} />
      </Container>
      <Spacer height={30} />
      <Container>
        <Accordion className="accordion-info">
          <Accordion.Item eventKey="0" className="item">
            <Accordion.Header className="ada">
              Worum geht es in dem Projekt?
            </Accordion.Header>
            <Accordion.Body>
              Das Projekt dreht sich um die Herstellung von veganen,
              glutenfreien Snacks ohne Industriezucker unter der Marke "no
              sweets". Die Snacks werden in Deutschland mit hochwertigen Zutaten
              hergestellt und bieten eine gesunde und schuldgefreie Snackoption
              für diejenigen, die sich gesund und befriedigend ernähren möchten,
              ohne dabei auf Geschmack zu verzichten.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Was sind die Ziele und wer ist die Zielgruppe?
            </Accordion.Header>
            <Accordion.Body>
              Das Ziel des Projekts ist es, gesunde Snackoptionen für eine
              breitere Zielgruppe zugänglich zu machen und das Bewusstsein für
              eine gesunde Snackkultur zu fördern. Die Zielgruppe sind Menschen,
              die sich bewusst ernähren und auf eine gesunde Ernährung achten.
              Dies kann Menschen umfassen, die eine glutenfreie, vegane oder
              zuckerfreie Ernährung bevorzugen oder aufgrund von Allergien oder
              Unverträglichkeiten darauf angewiesen sind.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Wer steht hinter dem Projekt?</Accordion.Header>
            <Accordion.Body>
              Das Unternehmen, das dieses Projekt durchführt, steht hinter der
              Herstellung und Vermarktung dieser Snacks. Das Unternehmen wurde
              nicht namentlich genannt, aber es wird betont, dass es sich um ein
              Unternehmen handelt, das seine Snacks mit viel Liebe und
              hochwertigen Zutaten in Deutschland herstellt. Das Unternehmen
              sucht derzeit nach neuen Investoren, um sein Geschäft auszubauen
              und seine leckeren Snacks einem breiteren Publikum zugänglich zu
              machen.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Spacer />
    </div>
  );
};

export default ProjectDetails;
