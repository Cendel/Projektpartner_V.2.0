import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../api/user-service";
import { toast } from "../../../helpers/functions/swal";

const AdminProjects = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "E-Mail",
      selector: (row) => row.email,
    },

    {
      name: "",
      selector: (row) => (
        <Button
          //as={Link}
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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (err) {
        toast("Fehler beim Laden der Nachrichten", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleRowClicked = (row) => {
    navigate(`/projects/${row.id}`);
  };

  return (
    <Container>
      <Row>
        <Col>
          <DataTable
            title="Benutzer"
            columns={columns}
            data={users}
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
