import React, { useEffect } from "react";
import "./projectDetails.scss";
import image from "../../../assets/img/breads-1867459_1920.jpg";
import imageRounded from "../../../assets/img/rounded-bottom.svg";
import { Button, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Spacer from "../../common/spacer/Spacer";

const ProjectDetails = () => {
  useEffect(() => {
    //
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
    <div>
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
      <Container fluid="lg" className="project-details">
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
                  <span>Startdatum</span>
                  <h4> 5. Oktober 2022</h4>
                </div>
                <div>
                  <span>Projektbeteiligte</span>
                  <h4> 7</h4>
                </div>
                <div>
                  <span>Fertigstellungsdatum</span>
                  <h4> 2. Juni 2023</h4>
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
      <Spacer height={50} />
      <Container className="project-media">
        <div className="title">
          <h4>Projektmedien</h4>
        </div>
        <div className="media"></div>
      </Container>
      <Spacer />
    </div>
  );
};

export default ProjectDetails;
