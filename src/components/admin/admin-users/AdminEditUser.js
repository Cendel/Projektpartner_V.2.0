import React, { useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import PasswordInput from "../../common/password-input/PasswordInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "../../../helpers/functions/swal";

import { updateUserById } from "../../../api/user-service";

const AdminEditUser = (props) => {
  const [updating, setUpdating] = useState(false);

  const initialValues = {
    name: props.name,
    email: props.email,
    password: "",
    role: props.role,
    job: props.job,
    location: props.location,
    phone: props.phone,
    website: props.website,
    about: props.about,
    projectsCreated: props.projectsCreated,
    projectsParticipated: props.projectsParticipated,
    projectsFollowed: props.projectsFollowed,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Bitte geben den Namen ein."),
    email: Yup.string()
      .email("Bitte geben Sie eine gültige E-Mail-Adresse ein.")
      .required("Bitte geben Sie eine E-mail-Adresse ein."),
    password: Yup.string()
      .min(8, "Bitte geben Sie mindestens 8 Zeichen ein.")
      .matches(/[a-z]+/, "Ein Kleinbuchstabe")
      .matches(/[A-Z]+/, "Ein Großbuchstabe")
      .matches(/[@$!%*#?&.]+/, "Ein besonderes Zeichen")
      .matches(/\d+/, "Eine Nummer"),
    role: Yup.string().required("Bitte wählen Sie eine Rolle aus."),
  });

  const onSubmit = async (values) => {
    if (!values.password) {
      delete values.password;
    }

    setUpdating(true);
    try {
      await updateUserById(props.id, values);
      toast("Das Profil wurde erfolgreich aktualisiert.", "success");
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setUpdating(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <Form
      noValidate
      onSubmit={formik.handleSubmit}
      style={{ marginTop: "2rem" }}
    >
      <fieldset disabled={formik.values.builtIn}>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("name")}
              isValid={formik.touched.name && !formik.errors.name}
              isInvalid={formik.touched.name && !!formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              type="email"
              {...formik.getFieldProps("email")}
              isValid={formik.touched.email && !formik.errors.email}
              isInvalid={formik.touched.email && !!formik.errors.email}
              disabled
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Password</Form.Label>
            <PasswordInput
              {...formik.getFieldProps("password")}
              isValid={formik.touched.password && !formik.errors.password}
              isInvalid={formik.touched.password && !!formik.errors.password}
              error={formik.errors.password}
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("role")}
              isValid={formik.touched.role && !formik.errors.role}
              isInvalid={formik.touched.role && !!formik.errors.role}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.role}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Beruf</Form.Label>
            <Form.Control type="text" {...formik.getFieldProps("job")} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Ort</Form.Label>
            <Form.Control type="text" {...formik.getFieldProps("location")} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Telefon</Form.Label>
            <Form.Control type="text" {...formik.getFieldProps("phone")} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" {...formik.getFieldProps("website")} />
          </Form.Group>
        </Row>

        <Form.Group as={Col} className="mb-3">
          <Form.Label>Über mich</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            {...formik.getFieldProps("about")}
          />
        </Form.Group>
      </fieldset>
      {formik.values.builtIn && (
        <Alert variant="warning">
          Built-in accounts cannot be deleted or updated
        </Alert>
      )}
      <div className="text-end">
        {!formik.values.builtIn && (
          <>
            <Button
              variant="primary"
              type="submit"
              disabled={!(formik.dirty && formik.isValid) || updating}
            >
              {updating && <Spinner animation="border" size="sm" />} Update
            </Button>
          </>
        )}
      </div>
    </Form>
  );
};

export default AdminEditUser;
