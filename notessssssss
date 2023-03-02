import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, Container, FormGroup, FormLabel } from "react-bootstrap";
import "./ProjectForm.scss";

const ProjectForm = () => {
  const initialValues = {
    projectPhoto: "",
    projectCreatedBy: "",
    projectCreationDate: "",
    targetParticipantNumber: "",
    actualParticipantNumber: "",
    projectTitle: "",
    projectTheme: "",
    projectPlace: "",
    projectDescription: "",
    attachmentFile: null,
    implementationDate: "",
  };

  const validationSchema = Yup.object({
    projectCreatedBy: Yup.string().required("Required"),
    projectCreationDate: Yup.string().required("Required"),
    targetParticipantNumber: Yup.number()
      .integer()
      .min(1, "Please enter a valid number")
      .required("Required"),
    actualParticipantNumber: Yup.number()
      .integer()
      .min(0, "Please enter a valid number")
      .required("Required"),
    projectTitle: Yup.string().required("Required"),
    projectTheme: Yup.string().required("Required"),
    projectPlace: Yup.string().required("Required"),
    projectDescription: Yup.string().required("Required"),
    attachmentFile: Yup.mixed().required("Required"),
    implementationDate: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // You can submit the form data to your backend API here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className=" project-form-container-container">
      <div className="project-form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, isSubmitting }) => (
            <Form className="project-form">
              <FormGroup>
                <FormLabel htmlFor="projectPhoto">Project Photo</FormLabel>
                <Field type="file" name="projectPhoto" id="projectPhoto" />
                {touched.projectPhoto && errors.projectPhoto && (
                  <div className="error">{errors.projectPhoto}</div>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="projectCreatedBy">Created By</FormLabel>
                <Field
                  type="text"
                  name="projectCreatedBy"
                  id="projectCreatedBy"
                />
                {touched.projectCreatedBy && errors.projectCreatedBy && (
                  <div className="error">{errors.projectCreatedBy}</div>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="projectCreationDate">
                  Creation Date
                </FormLabel>
                <Field
                  type="text"
                  name="projectCreationDate"
                  id="projectCreationDate"
                />
                {touched.projectCreationDate && errors.projectCreationDate && (
                  <div className="error">{errors.projectCreationDate}</div>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="targetParticipantNumber">
                  Target Participant Number
                </FormLabel>
                <Field
                  type="number"
                  name="targetParticipantNumber"
                  id="targetParticipantNumber"
                />
                {touched.targetParticipantNumber &&
                  errors.targetParticipantNumber && (
                    <div className="error">
                      {errors.targetParticipantNumber}
                    </div>
                  )}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="actualParticipantNumber">
                  Actual Participant Number
                </FormLabel>
                <Field
                  type="number"
                  name="actualParticipantNumber"
                  id="actualParticipantNumber"
                />
                {touched.actualParticipantNumber &&
                  errors.actualParticipantNumber && (
                    <div className="error">
                      {errors.actualParticipantNumber}
                    </div>
                  )}
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="projectTitle">Project Title</FormLabel>
                <Field type="text" name="projectTitle" id="projectTitle" />
                {touched.projectTitle && errors.projectTitle && (
                  <div className="error">{errors.projectTitle}</div>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="projectTheme">Project Theme</FormLabel>
                <Field type="text" name="projectTheme" id="projectTheme" />
                {touched.projectTheme && errors.projectTheme && (
                  <div className="error">{errors.projectTheme}</div>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="projectPlace">Project Place</FormLabel>
                <Field type="text" name="projectPlace" id="projectPlace" />
                {touched.projectPlace && errors.projectPlace && (
                  <div className="error">{errors.projectPlace}</div>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="projectDescription">
                  Project Description
                </FormLabel>
                <Field
                  as="textarea"
                  name="projectDescription"
                  id="projectDescription"
                />
                {touched.projectDescription && errors.projectDescription && (
                  <div className="error">{errors.projectDescription}</div>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="attachmentFile">Attachment</FormLabel>
                <Field type="file" name="attachmentFile" id="attachmentFile" />
                {touched.attachmentFile && errors.attachmentFile && (
                  <div className="error">{errors.attachmentFile}</div>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="implementationDate">
                  Implementation Date
                </FormLabel>
                <Field
                  type="text"
                  name="implementationDate"
                  id="implementationDate"
                />
                {touched.implementationDate && errors.implementationDate && (
                  <div className="error">{errors.implementationDate}</div>
                )}
              </FormGroup>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProjectForm;
