import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import {
  getProjectsByStatus,
  updateProjectStatus,
} from "../../../api/project-service.";
import { toast } from "../../../helpers/functions/swal";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleStatusChange = async (projectId, checked) => {
    try {
      await updateProjectStatus(projectId, checked);
      const updatedProjects = projects.map((project) =>
        project.id === projectId
          ? { ...project, projectStatus: checked }
          : project
      );
      setProjects(updatedProjects);
    } catch (err) {
      toast("Fehler beim Aktualisieren des Projektstatus", "error");
    }
  };

  const columns = [
    {
      name: "Projekttitle",
      selector: (row) => row.projectTitle,
      sortable: true,
    },
    {
      name: "Erstellt von",
      selector: (row) => row.createdBy,
      sortable: true,
    },
    {
      name: "Fertigstellungsdatum",
      selector: (row) => row.estimatedImplementationDate,
      sortable: true,
    },
    {
      name: "Projektstatus",
      selector: (row) => (
        <Form.Check
          type="switch"
          id={row.id}
          label=""
          checked={row.projectStatus}
          onChange={(e) => handleStatusChange(row.id, e.target.checked)}
        />
      ),
    },
    {
      name: "Aktien",
      selector: (row) => (
        <Button
          as={Link}
          to={`/admin-share-edit/${row.id}`}
          style={{ width: "2rem", padding: "0.1rem", fontSize: "0.7rem" }}
        >
          {row.sharesTaken}
        </Button>
      ),
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjectsByStatus(true);
        setProjects(response.data);
      } catch (err) {
        toast("Fehler beim Laden der Nachrichten", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleRowClicked = (row) => {
    navigate(`/projects/${row.id}`);
  };

  return (
    <Container>
      <Row>
        <Col>
          <DataTable
            title="Projekte"
            columns={columns}
            data={projects}
            progressPending={loading}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30]}
            onRowClicked={handleRowClicked}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProjects;
