import React from "react";
import "./Profile.scss";

function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-card">
          <h2>Kurzinfo</h2>
          <div className="short-info-fields">
            <div className="field">
              <span>Name:</span> Mark D
            </div>
            <div className="field">
              <span>Beruf:</span> Leasingspezialist
            </div>
            <div className="field">
              <span>Ort:</span> Mannheim, Baden-Württemberg
            </div>
            <a className="projects-button">Projekte</a>
          </div>
        </div>
        <div className="profile-card">
          <h2>Kontaktinformationen</h2>
          <div className="contact-info-fields">
            <div className="field">
              <span>E-Mail:</span> markd@markd.de
            </div>
            <div className="field">
              <span>Telefon:</span> 0621 111-1111
            </div>
            <div className="field">
              <span>Website:</span> www.markd.de
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
