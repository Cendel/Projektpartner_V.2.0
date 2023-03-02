import React, { useState } from "react";
import { Button, Col, FloatingLabel, Row, Form } from "react-bootstrap";
import Ada from "./ada";

import "./ProjectForm.scss";

const ProjectForm = () => {
  //const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const newFiles = event.target.files;
    const newSelectedFiles = [...selectedFiles, ...newFiles];
    setSelectedFiles(newSelectedFiles);
  };

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const newSelectedFiles = [file, ...selectedFiles];
      setSelectedFiles(newSelectedFiles);
    }
  };

  const handleRemoveFile = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use the selectedFiles variable to access the file data. For example:
    console.log(selectedFiles);
    // Add your form submission logic here: Handle form submission, including the selected files
  };

  const initialValues = {
    projectTitle: "",
    projectPlace: "",
    estimatedImplementationDate: "",
    slogan: "",
    shortDesc: "",
    longDesc: "",
    about: "",
    goal: "",
    support: "",

    attachments: [], // array to hold uploaded files
  };

  return (
    <div className="project-form">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3 first-row">
          <Form.Group as={Col}>
            <FloatingLabel label="Projekttitel">
              <Form.Control type="text" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
            <FloatingLabel label="Projektort">
              <Form.Control type="text" />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-3  second-row">
          <Form.Group as={Col}>
            <FloatingLabel label="geschätztes Realisierungsdatum">
              <Form.Control type="date" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
            <FloatingLabel label="Slogan">
              <Form.Control type="text" />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3  worum">
          <FloatingLabel label="Worum geht es in dem Projekt?">
            <Form.Control as="textarea" rows={10} minLength={30} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3  ziele">
          <FloatingLabel label="Was sind die Ziele und wer ist die Zielgruppe?">
            <Form.Control as="textarea" rows={10} minLength={30} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3  wer">
          <FloatingLabel label="Wer steht hinter dem Projekt?">
            <Form.Control as="textarea" rows={10} minLength={30} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 kurz">
          <FloatingLabel label="Geben Sie eine kurze Beschreibung ein, die maximal 100 Zeichen lang ist">
            <Form.Control as="textarea" rows={10} maxLength={100} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3 lang">
          <FloatingLabel label="Geben Sie eine detaillierte Beschreibung ein, die mindestens 200 Zeichen lang ist">
            <Form.Control as="textarea" rows={5} minLength={200} />
          </FloatingLabel>
        </Form.Group>

        {/* Add image file input field */}
        <Form.Group className="mb-3 projectImage" controlId="formImage">
          <Form.Label>
            ein Bild auswählen, das Ihr Projekt am besten beschreibt
          </Form.Label>
          <Form.Control
            className="imageatt"
            type="file"
            accept="image/*"
            onChange={handleImageInputChange}
          />
        </Form.Group>
        {/* Add file input field */}
        <Form.Group className="mb-3 attachments" controlId="formFile">
          <Form.Label>
            Bitte fügen Sie hier beliebige Dateianhänge hinzu, die für Ihr
            Projekt relevant sind. Akzeptierte Dateiformate: .jpg, .jpeg, .png,
            .doc, .docx, .pdf.
          </Form.Label>
          <Form.Control
            type="file"
            accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
            onChange={handleFileInputChange}
            multiple
          />
        </Form.Group>

        {/* Add display for uploaded files */}
        {selectedFiles.length > 0 && (
          <Form.Group className="mb-3 display">
            <Form.Label>Anhänge</Form.Label>
            {selectedFiles.map((file, index) => (
              <div key={index}>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveFile(index)}
                >
                  entfernen
                </Button>
                <span>{file.name}</span>
              </div>
            ))}
          </Form.Group>
        )}
        <Button
          disabled=""
          variant="primary"
          type="submit"
          className="submit-button"
        >
          PROJEKT ERSTELLEN
        </Button>
      </Form>
    </div>
  );
};

export default ProjectForm;
