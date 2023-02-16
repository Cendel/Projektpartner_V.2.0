import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import Spacer from "../../../common/spacer/spacer";
import ContactInfo from "../contact-info/contact-info";
import "./contactForm.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { sendMessage } from "../../../../api/contact-service";
import { toast } from "../../../../helpers/functions/swal";

const ContactForm = () => {
  const [loading, setLoading] = useState(false); //Form un disabled ini ve spinner i bu variable üzerinden kontrol edecegiz.

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    body: "",
  };

  //2- validationSchema kismini "yup" ile yapiyorduk, o yüzden önce yukaridan yup'i import ediyoruz.
  //validation objemizi olusuturuyoruz ve validate etmek istedigimiz ne varsa, burada tanimliyoruz:
  const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    //validate etmek istedigimiz alanimizi yazdik (name), türünü yazdik(string()), doldurulmasi gerektigi bilgisini verdik (.required), son olarak ise göstermek istedigimiz hata mesajini girdik ("Enter your name")
    //ayni sekilde devam ediyoruz:
    email: Yup.string()
      .email("Enter a valid email")
      .required("Enter your email"),
    subject: Yup.string()
      .max(50, "The subject should be max 50 chars")
      .min(5, "The subject should be min 5 chars")
      .required("Enter a subject"),
    body: Yup.string()
      .max(200, "The message should max 200 chars")
      .min(20, "The message should be min 20 chars")
      .required("Enter a message"),
  });

  //submit durumununda ne yapilacagi. (values, formumuzdan api ye gönderilecek olan veriler)
  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await sendMessage(values); //sendMessage fonksiyonumuzun basina await ifademizi ekledik, await den dolayi üst fonksiyonumuza da async ifadesi ekliyoruz. Bu ifade gectiyse demek ki basarili olmus, o yüzden formu temizliyor ve hemen altina basarili oldugu mesaji:
      formik.resetForm(); //bu form temizleme formik e ait bir method
      //alert("Your message has been sent successfully.");
      //yukaridaki, html in default alert i yerine, görsel tercih nedeniyle sweetalert kütüphanesini kullanacagiz, o kütüphanenin kodlarini buraya yazip burayi kalabaliklastirmak yerine helpers klasörümüzün icerisinde bu kütüphane ile ilgili olusturdugumuz dosyamizdaki fonksiyonu burada cagiracagiz:
      toast("Your message has been sent successfully.", "success");
    } catch (err) {
      //eger await deki ifade gecmediyse buraya düsmüs demektir. o halde hata mesajimiz:
      alert(err.response.data.message);
    } finally {
      setLoading(false); //loading imizi, sonraki kullanimlar icin tekrar false a cektik.
    }
  };

  //Simdi bu ücünü birlestiriyoruz, Formik'in useFormik hook'u ile:
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  //Formik'i kullanmaya baslamadan önce, Form'un html5'den gelen default handler'ini, Form taginda noValidate yazarak devre disi birakiyoruz.
  // ve ardindan yine ayni yerde onSubmit tanimlamasi yapiyor, formik'in handleSubmit metodunu devreye sokuyoruz.
  // Formik
  return (
    <Container className="contact-form">
      <Row className="gy-5">
        <Col md={6}>
          <p>
            Looking for a small or medium economy car rental or something a
            little larger to fit all the family? We have a great range of new
            and comfortable rental cars to choose from. Browse our fleet range
            now and rent a car online today.
          </p>
          <Spacer height={30} />
          <ContactInfo />
        </Col>
        <Col md={6}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
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

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && !!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
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

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
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
              variant="primary"
              type="submit"
              disabled={!(formik.dirty && formik.isValid) || loading}
            >
              {loading && <Spinner animation="border" size="sm" />} Send Message
            </Button>
          </Form>
        </Col>
      </Row>{" "}
    </Container>
  );
};

export default ContactForm;
