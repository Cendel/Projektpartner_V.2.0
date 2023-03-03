import React, { useState } from "react";
import {
  Button,
  Col,
  FloatingLabel,
  Row,
  Form,
  Spinner,
} from "react-bootstrap";
import "./ProjectForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "../../../helpers/functions/swal";
import { sendProject } from "../../../api/project-service.";

const ProjectForm = () => {
  const [loading, setLoading] = useState(false);
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

  const initialValues = {
    projectTitle: "",
    projectPlace: "",
    estimatedImplementationDate: "",
    slogan: "",
    about: "",
    goal: "",
    support: "",
    shortDesc: "",
    longDesc: "",

    attachments: [], // array to hold uploaded files
  };

  const validationSchema = Yup.object({
    projectTitle: Yup.string().required(
      "Geben Sie den Namen des Projekts ein."
    ),
    projectPlace: Yup.string().required("Geben Sie den Ort des Projekts ein."),
    estimatedImplementationDate: Yup.string().required(
      "Geben Sie das voraussichtliche Implementierungsdatum ein."
    ),
    slogan: Yup.string().required(
      "Geben Sie einen Slogan für Ihr Projekt ein."
    ),
    about: Yup.string().required(
      "Geben Sie ein, worum es in Ihrem Projekt geht."
    ),
    goal: Yup.string().required(
      "Erzählen Sie von Ihren Projektzielen und Zielgruppen."
    ),
    support: Yup.string().required(
      "Geben Sie ein, wer hinter Ihrem Projekt steht."
    ),
    shortDesc: Yup.string()
      .max(200, "Die kurze Beschreibung soll maximal 200 Zeichen lang sein.")
      .required(
        "Geben Sie eine kurze Beschreibung ein, die maximal 200 Zeichen lang ist."
      ),
    longDesc: Yup.string()
      .min(
        200,
        "Die detaillierte Beschreibung soll mindestens 200 Zeichen lang sein."
      )
      .required(
        "Geben Sie eine detaillierte Beschreibung ein, die mindestens 200 Zeichen lang ist."
      ),
    projectImage: Yup.mixed().required(
      "Laden Sie ein Bild für Ihr Projekt hoch."
    ),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await sendProject(values);
      formik.resetForm();
      toast("Ihr Projekt wurde erfolgreich erstellt.", "success");
    } catch (err) {
      alert(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const isInvalid = (field) => {
    return formik.touched[field] && formik.errors[field];
  };

  const isValid = (field) => {
    return formik.touched[field] && !formik.errors[field];
  };

  return (
    <>
      <div className="project-form">
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Row className="mb-3 first-row">
            <Form.Group as={Col}>
              <FloatingLabel label="Projekttitel">
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("projectTitle")}
                  isInvalid={isInvalid("projectTitle")}
                  isValid={isValid("projectTitle")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.projectTitle}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col}>
              <FloatingLabel label="Projektort">
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("projectPlace")}
                  isInvalid={isInvalid("projectPlace")}
                  isValid={isValid("projectPlace")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.projectPlace}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Row className="mb-3  second-row">
            <Form.Group as={Col}>
              <FloatingLabel label="geschätztes Realisierungsdatum">
                <Form.Control
                  type="date"
                  {...formik.getFieldProps("estimatedImplementationDate")}
                  isInvalid={isInvalid("estimatedImplementationDate")}
                  isValid={isValid("estimatedImplementationDate")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.estimatedImplementationDate}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col}>
              <FloatingLabel label="Slogan">
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("slogan")}
                  isInvalid={isInvalid("slogan")}
                  isValid={isValid("slogan")}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.slogan}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3  worum">
            <FloatingLabel label="Worum geht es in dem Projekt?">
              <Form.Control
                type="text"
                {...formik.getFieldProps("about")}
                isInvalid={isInvalid("about")}
                isValid={isValid("about")}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.about}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3  ziele">
            <FloatingLabel label="Was sind die Ziele und wer ist die Zielgruppe?">
              <Form.Control
                type="text"
                {...formik.getFieldProps("goal")}
                isInvalid={isInvalid("goal")}
                isValid={isValid("goal")}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.goal}
              </Form.Control.Feedback>{" "}
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3  wer">
            <FloatingLabel label="Wer steht hinter dem Projekt?">
              <Form.Control
                type="text"
                {...formik.getFieldProps("support")}
                isInvalid={isInvalid("support")}
                isValid={isValid("support")}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.support}
              </Form.Control.Feedback>{" "}
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3 kurz">
            <FloatingLabel label="Geben Sie eine kurze Beschreibung ein, die maximal 200 Zeichen lang ist.">
              <Form.Control
                type="text"
                {...formik.getFieldProps("shortDesc")}
                isInvalid={isInvalid("shortDesc")}
                isValid={isValid("shortDesc")}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.shortDesc}
              </Form.Control.Feedback>{" "}
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3 lang">
            <FloatingLabel label="Geben Sie eine detaillierte Beschreibung ein, die mindestens 200 Zeichen lang ist.">
              <Form.Control
                type="text"
                {...formik.getFieldProps("longDesc")}
                isInvalid={isInvalid("longDesc")}
                isValid={isValid("longDesc")}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.longDesc}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          {/* image file input field */}
          <Form.Group className="mb-3 projectImage" controlId="formImage">
            <Form.Label>
              Laden Sie ein Bild hoch, das Ihr Projekt am besten beschreibt.
              <Form.Control
                className="imageatt"
                type="file"
                accept="image/*"
                onChange={handleImageInputChange}
                {...formik.getFieldProps("projectImage")}
                isInvalid={isInvalid("projectImage")}
                isValid={isValid("projectImage")}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.projectImage}
              </Form.Control.Feedback>{" "}
            </Form.Label>
          </Form.Group>
          {/* file input field */}
          <Form.Group className="mb-3 attachments" controlId="formFile">
            <Form.Label>
              Bitte fügen Sie hier beliebige Dateianhänge hinzu, die für Ihr
              Projekt relevant sind. Akzeptierte Dateiformate: .jpg, .jpeg,
              .png, .doc, .docx, .pdf.
            </Form.Label>
            <Form.Control
              type="file"
              accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
              onChange={handleFileInputChange}
              multiple
            />
          </Form.Group>

          {/* display for uploaded files */}
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
            variant="primary"
            type="submit"
            className="submit-button"
            disabled={!(formik.dirty && formik.isValid) || loading}
          >
            {loading && <Spinner animation="border" size="sm" />}
            PROJEKT ERSTELLEN
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ProjectForm;
