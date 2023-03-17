import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Profile.scss";
import ProfileEdit from "./ProfileEdit";
import ProjectList from "./ProjectList";

function Profile() {
  const [showCreatedList, setshowCreatedList] = useState(false);
  const [showParticipatedList, setShowParticipatedList] = useState(false);
  const [showFollowedList, setShowFollowedList] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [projectsToBeShowed, setprojectsToBeShowed] = useState([]);

  const user = {
    name: "Klaus R.",
    job: "Software Developer",
    location: "Mannheim",
    email: "klaus_r@hotmail.com",
    phone: "",
    website: "www.google.com",
    projectsCreated: ["6", "2", "3"],
    projectsParticipated: ["5", "7", "8"],
    projectsFollowed: ["1", "4", "7"],
  };

  const handleClick = (projectType) => {
    setshowCreatedList(false);
    setShowParticipatedList(false);
    setShowFollowedList(false);
    setShowProfileEdit(false);
    if (projectType === "projectsCreated") {
      setprojectsToBeShowed(user.projectsCreated);
      setshowCreatedList(true);
    }
    if (projectType === "projectsParticipated") {
      setprojectsToBeShowed(user.projectsParticipated);
      setShowParticipatedList(true);
    }
    if (projectType === "projectsFollowed") {
      setprojectsToBeShowed(user.projectsFollowed);
      setShowFollowedList(true);
    }
    if (projectType === user) {
      setprojectsToBeShowed(user);
      setShowProfileEdit(true);
    }
  };

  return (
    <div className="profile-user">
      <div className="profile-container">
        <div className="profile-card">
          <h2>Kurzinfo</h2>
          <div className="short-info-fields">
            <div className="field">
              <span>Name:</span> {user.name}
            </div>
            <div className="field">
              <span>Beruf:</span> {user.job}
            </div>
            <div className="field">
              <span>Ort:</span> {user.location}
            </div>
          </div>
        </div>
        <div className="profile-card">
          <h2>Kontaktinformationen</h2>
          <div className="contact-info-fields">
            <div className="field">
              <span>E-Mail:</span> {user.email}
            </div>
            <div className="field">
              <span>Telefon:</span> {user.phone}
            </div>
            <div className="field">
              <span>Website:</span>{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://${user.website}`}
              >
                {user.website}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="three-buttons">
          <Button onClick={() => handleClick("projectsCreated")}>
            Erstellte Projekte
          </Button>
          <Button onClick={() => handleClick("projectsParticipated")}>
            Teilnehmende Projekte
          </Button>
          <Button onClick={() => handleClick("projectsFollowed")}>
            Verfolgte Projekte
          </Button>
        </div>
        <div className="edit-button">
          <Button onClick={() => handleClick(user)}> Profil bearbeiten</Button>
        </div>
      </div>
      {showCreatedList && <ProjectList {...projectsToBeShowed} />}
      {showParticipatedList && <ProjectList {...projectsToBeShowed} />}
      {showFollowedList && <ProjectList {...projectsToBeShowed} />}
      {showProfileEdit && <ProfileEdit {...projectsToBeShowed} />}
    </div>
  );
}

export default Profile;
