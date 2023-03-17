import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "../../../helpers/functions/swal";
import { updateUserById } from "../../../api/user-service";
import { useParams } from "react-router-dom";
import "./Profile.scss";

const ProfileEdit = (props) => {
  const [updating, setUpdating] = useState(false);
  const { userId } = useParams();

  const initialValues = {
    name: props.name,
    job: props.job,
    location: props.location,
    phone: props.phone,
    website: props.website,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Bitte geben Sie Ihren Namen ein."),
  });

  const onSubmit = async (values) => {
    if (!values.password) {
      delete values.password;
    }

    setUpdating(true);
    try {
      await updateUserById(userId, values);
      toast("Ihr Profil wurde erfolgreich aktualisiert.", "success");
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
    <div className="profile-edit">
      <Form noValidate onSubmit={formik.handleSubmit}>
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

        <Button
          type="submit"
          disabled={!(formik.dirty && formik.isValid) || updating}
        >
          {updating && <Spinner animation="border" size="sm" />} Aktualisieren
        </Button>
      </Form>
    </div>
  );
};

export default ProfileEdit;
