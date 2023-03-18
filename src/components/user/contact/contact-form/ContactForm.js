import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import Spacer from "../../../common/spacer/Spacer";
import "./contactForm.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { sendMessage } from "../../../../api/contact-service";
import { toast } from "../../../../helpers/functions/swal";
import ContactInfo from "../contact-info/ContactInfo";
import { getCurrentDate } from "../../../../helpers/functions/date-time";
import logo from "../../../../assets/img/logo/logo_contact.png";
import { settings } from "../../../../helpers/settings";
import SectionHeader from "../../common/section-header/SectionHeader";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    createdAt: getCurrentDate(),
    name: "",
    email: "",
    subject: "",
    body: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Geben Sie Ihren Namen ein."),

    subject: Yup.string()
      .max(50, "Der Betreff sollte maximal 50 Zeichen lang sein.")
      .min(5, "Der Betreff sollte mindestens 5 Zeichen lang sein.")
      .required("Geben Sie einen Betreff ein."),
    body: Yup.string()
      .max(200, "Die Nachricht sollte maximal 200 Zeichen lang sein.")
      .min(20, "Die Nachricht sollte mindestens 20 Zeichen lang sein.")
      .required("Geben Sie eine Nachricht ein."),
  });

  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);

    try {
      await sendMessage(values);
      toast("Ihre Nachricht wurde erfolgreich gesendet.", "success");
      resetForm();
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

  return (
    <Container className="contact-contact-form">
      <div style={{ padding: "0rem 1rem 0rem 1rem" }}>
        <SectionHeader title="Kontaktieren Sie uns" />
      </div>
      <Row className="gy-5">
        <Col md={6}>
          <p>
            Wir glauben an die Kraft von Kreativität, Zusammenarbeit und
            Innovation. Wenn Sie Fragen haben, Anregungen geben möchten oder
            einfach mit uns in Kontakt treten möchten, freuen wir uns auf Ihre
            Nachricht!
          </p>
          <img src={logo} alt={settings.siteName} className="logo_contact" />
          <div className="contact-contact-info">
            <ContactInfo />
          </div>
        </Col>
        <Col md={6}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3 form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("name")}
                isInvalid={formik.touched.name && !!formik.errors.name}
                isValid={formik.touched.name && !formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 form-group">
              <Form.Label>Betreff</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("subject")}
                isInvalid={formik.touched.subject && !!formik.errors.subject}
                isValid={formik.touched.subject && !formik.errors.subject}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.subject}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 form-group">
              <Form.Label>Nachricht</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                {...formik.getFieldProps("body")}
                isInvalid={formik.touched.body && !!formik.errors.body}
                isValid={formik.touched.body && !formik.errors.body}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.body}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              className="send-button"
              variant="primary"
              type="submit"
              disabled={!(formik.dirty && formik.isValid) || loading}
            >
              {loading && <Spinner animation="border" size="sm" />} Nachricht
              senden
            </Button>
          </Form>
        </Col>
      </Row>
      <Spacer height={30} />
    </Container>
  );
};

export default ContactForm;
