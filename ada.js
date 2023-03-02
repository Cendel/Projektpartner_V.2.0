import React, { useState } from "react";
import { Button, Col, FloatingLabel, Row, Form } from "react-bootstrap";
import "./ProjectForm.scss";

const ProjectForm = () => {
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFiles([file, ...selectedFiles.slice(1)]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use the selectedFiles variable to access the file data. For example:
    console.log(selectedFiles);
    // Add your form submission logic here: Handle form submission, including the selected files
  };

  const initialValues = {
    attachments: [], // array to hold uploaded files
  };

  return (
    <div className="project-form">
      <Form onSubmit={handleSubmit}>
                  
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

        {/* Add image input field */}
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Image Attachment</Form.Label>
          <Form.Control
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleImageInputChange}
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

      </Form>
    </div>
  );
};

export default ProjectForm;
