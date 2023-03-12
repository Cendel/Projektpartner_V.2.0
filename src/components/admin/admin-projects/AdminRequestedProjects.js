import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getProjectsByStatus } from "../../../api/project-service.";
import { toast } from "../../../helpers/functions/swal";

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
    name: "Fertigstellungsdatum",
    selector: (row, i) => row.projectStatus,
    sortable: true,
  },
];
const AdminRequestedProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
