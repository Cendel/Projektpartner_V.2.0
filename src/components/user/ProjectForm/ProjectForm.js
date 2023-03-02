import React, { useState } from "react";
import { Button, Col, FloatingLabel, Row, Form } from "react-bootstrap";
import "./ProjectForm.scss";

const ProjectForm = () => {
  //const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
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
        <Row className="mb-3">
          <Form.Group as={Col} >
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
        <Row className="mb-3">
          <Form.Group as={Col} sm={2}>
            <FloatingLabel label="geschätztes startdatum">
              <Form.Control type="date" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} sm={10}>
            <FloatingLabel label="Slogan">
              <Form.Control type="text" />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <FloatingLabel label="Worum geht es in dem Projekt?">
            <Form.Control as="textarea" rows={10} minLength={30} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel label="Was sind die Ziele und wer ist die Zielgruppe?">
            <Form.Control as="textarea" rows={10} minLength={30} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel label="Wer steht hinter dem Projekt?">
            <Form.Control as="textarea" rows={10} minLength={30} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel label="Geben Sie eine kurze Beschreibung ein, die maximal 100 Zeichen lang ist">
            <Form.Control as="textarea" rows={10} maxLength={100} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel label="Geben Sie eine detaillierte Beschreibung ein, die mindestens 200 Zeichen lang ist">
            <Form.Control as="textarea" rows={5} minLength={200} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {/* Add file input field */}
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Attachment</Form.Label>
          <Form.Control
            type="file"
            accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
            onChange={handleFileInputChange}
            multiple
          />
        </Form.Group>

        {/* Add display for uploaded files */}
        {selectedFiles.length > 0 && (
          <Form.Group className="mb-3">
            <Form.Label>Attachments</Form.Label>
            {selectedFiles.map((file, index) => (
              <div key={index}>{file.name}</div>
            ))}
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProjectForm;
