import React, { useState } from "react";
import { Button, Col, FloatingLabel, Row, Form } from "react-bootstrap";
import "./ProjectForm.scss";

const ProjectForm = () => {
  const [loading, setLoading] = useState(false);
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
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel label="Projekttitel">
              <Form.Control type="text" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <FloatingLabel label="description">
              <Form.Control type="text" />
            </FloatingLabel>
          </Form.Group>
        </Row>

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

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAttachments">
          <Form.Label>Attachments</Form.Label>
          <Form.Control type="file" multiple onChange={handleFileInputChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProjectForm;
