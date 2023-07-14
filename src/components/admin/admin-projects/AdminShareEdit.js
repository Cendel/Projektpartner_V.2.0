import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
  Spinner,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  getProject,
  updateParticipantList,
  updateProject,
} from "../../../api/project-service.";
import * as Yup from "yup";

import { toast } from "../../../helpers/functions/swal";
import { useFormik } from "formik";
import SectionHeader from "../../user/common/section-header/SectionHeader";

const AdminShareEdit = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const result = await getProject(projectId);
      setProject(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.userId,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.userName,
      sortable: true,
    },
    {
      name: "Aktien in diesem Projekt",
      selector: (row) => row.participantShares,
      sortable: true,
    },
    ,
    {
      name: "Wert der Aktien",
      selector: (row) => {
        return (
          (row.participantShares * project.shareValue).toLocaleString() + " €"
        );
      },
    },
    {
      name: "",
      selector: (row) => (
        <Button
          as={Link}
          to={`/admin-share-edit/${row.id}`}
          style={{
            color: "#ee6c4d",
            backgroundColor: "white",
            fontSize: "0.7rem",
            border: "none",
          }}
          className="deleteButton"
        >
          Löschen
        </Button>
      ),
    },
  ];

  const initialValues = {
    userId: "",
    participantShares: "",
    projectId: project.id,
  };

  const validationSchema = Yup.object({
    userId: Yup.string().required("Geben Sie die ID des Teilnehmers ein."),
    participantShares: Yup.number()
      .min(1)
      .max(
        project.maxSharesPerPerson,
        `maximale Anteile pro Person ist ${project.maxSharesPerPerson}.`
      )
      .required("Geben Sie Anzahl der Aktien ein."),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const ada = [...project, values];
      const response = await updateProject(projectId, ada);
      if (response.data) {
        toast("Ihr Projekt wurde erfolgreich aktualisiert.", "success");
        Navigate(`/projects/${projectId}`);
      } else {
        throw new Error("Response does not contain data property");
      }
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
    <Container>
      <Form noValidate onSubmit={formik.handleSubmit} className="mb-5">
        <SectionHeader title="Aktienkauf" />
        <Row>
          <Form.Group as={Col}>
            <FloatingLabel label="ID">
              <Form.Control
                type="number"
                {...formik.getFieldProps("userId")}
                isInvalid={isInvalid("userId")}
                isValid={isValid("userId")}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.userId}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
            <FloatingLabel label="Anzahl Aktien">
              <Form.Control
                type="text"
                {...formik.getFieldProps("participantShares")}
                isInvalid={isInvalid("participantShares")}
                isValid={isValid("participantShares")}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.participantShares}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Button
          style={{ marginTop: "1rem", width: "100%" }}
          variant="primary"
          type="submit"
          disabled={!(formik.dirty && formik.isValid) || loading}
        >
          {loading && <Spinner animation="border" size="sm" />}
          Aktienkauf bestätigen
        </Button>
      </Form>

      <Row>
        <SectionHeader title="Projektbeteiligte" />
        <Col>
          <DataTable
            columns={columns}
            data={project.participantList}
            progressPending={loading}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminShareEdit;
