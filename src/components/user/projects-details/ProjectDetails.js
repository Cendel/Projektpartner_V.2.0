import React, { useEffect } from "react";
import "./projectDetails.scss";
import image from "../../../assets/img/breads-1867459_1920.jpg";
import imageRounded from "../../../assets/img/rounded-bottom.svg";
import { Button, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

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
    <div className="project-details-container">
      <div>
        <img src={imageRounded} alt="" className="imageRounded" />
      </div>

      <div>
        <img src={image} alt="bakery" className="project-screen-image" />
      </div>
      <Container fluid="lg" className="project-details">
        <div className="title">
          <h5>Bäkerei</h5>
        </div>
        <div className="details-box">
          <div className="first-part">
            <div className="info-left">
              Wir machen Süßigkeiten - anders. no sweets steht für vegane,
              glutenfreie Snacks ohne Industriezucker. Keine Kompromisse - Das
              geht. Und schmeckt! Unsere Snack Bites werden mit viel Liebe in
              Deutschland aus hochwertigen Zutaten hergestellt und ermöglichen
              Dir ein unbeschwertes Naschen ohne Heißhungerattacken!
            </div>
            <div className="info-right">Creavision GmBH</div>
          </div>
          <div className="second-part">
            <div className="left">
              <ProgressBar
                animated={false}
                now={4}
                max={7}
                label={"Teilnehmer/-innen"} variant={"success"}
              />
              <div></div>
            </div>
            <div className="right">
              <Button>Unterstützen</Button>
              <Button>Abonieren</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
