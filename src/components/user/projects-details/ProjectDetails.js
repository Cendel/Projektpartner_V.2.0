import React, { useState, useEffect } from "react";
import "./projectDetails.scss";
import image from "../../../assets/img/breads-1867459_1920.jpg";
import imageRounded from "../../../assets/img/rounded-bottom.svg";
import { Container } from "react-bootstrap";

const ProjectDetails = () => {
  useEffect(() => {
    //
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const detailsEl = document.querySelector(".project-details");
      console.log("scroll: " + scrollPos);
      console.log(window.innerHeight);
      console.log(window.innerHeight - scrollPos);

      if (window.innerHeight >= scrollPos) {
        detailsEl.style.marginTop = `${window.innerHeight - scrollPos}px`;
      } else {
        detailsEl.style.marginTop = "0px";
      }
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
        <img src={image} alt="My Image" className="project-screen-image" />
      </div>
      <Container fluid="lg" className="project-details">
        <div className="first-part">
          <div className="title">
            <h5>sdfsadf</h5>
            <h5></h5>
          </div>
          <div className="info"></div>
        </div>
        <div className="second-part"></div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
