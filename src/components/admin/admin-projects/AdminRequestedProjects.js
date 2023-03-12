import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import {
  getProjectsByStatus,
  updateProjectStatus,
} from "../../../api/project-service.";
import { toast } from "../../../helpers/functions/swal";

const AdminRequestedProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleStatusChange = async (projectId, checked) => {
    try {
      await updateProjectStatus(projectId, checked);
      // Update the project status in the local state
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
      name: "Projecttitle",
      selector: (row, i) => row.projectTitle,
      sortable: true,
    },
    {
      name: "Erstellt von",
      selector: (row, i) => row.createdBy,
      sortable: true,
    },
    {
      name: "Erstellungsdatum",
      selector: (row, i) => row.createdDate,
      sortable: true,
    },
    {
      name: "Projektstatus",
      selector: (row, i) => (
        <Form.Check
          type="switch"
          id={row.id}
          label=""
          checked={row.projectStatus}
          onChange={(e) => handleStatusChange(row.id, e.target.checked)}
        />
      ),
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjectsByStatus(false);
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
    <Container className="contact-messages">
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

export default AdminRequestedProjects;
