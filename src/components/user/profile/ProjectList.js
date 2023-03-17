import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import { getProject } from "../../../api/project-service.";
import { toast } from "../../../helpers/functions/swal";

const ProjectList = (propsList) => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const updatedProjects = [];
        for (const i in propsList) {
          const response = await getProject(propsList[i]);
          updatedProjects.push(response.data);
        }
        setProjects(updatedProjects);
      } catch (err) {
        toast("Fehler beim Laden der Projekten.", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [propsList]);

  const handleRowClicked = (row) => {
    navigate(`/projects/${row.id}`);
  };

  return (
    <Container>
      <Row>
        <Col>
          <DataTable
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

export default ProjectList;
