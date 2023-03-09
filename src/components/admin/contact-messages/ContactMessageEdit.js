import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { deleteMessage, getMessage } from "../../../api/contact-service";
import { question, toast } from "../../../helpers/functions/swal";
import Loading from "../../common/loading/Loading";

const ContactMessageEdit = () => {
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const { messageId } = useParams();

  const loadData = async () => {
    try {
      const resp = await getMessage(messageId);
      setMessage(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    question(
      "Sind Sie sicher, dass Sie löschen möchten?",
      "Das können Sie nicht rückgängig machen!"
    ).then((result) => {
      if (result.isConfirmed) {
        setDeleting(true);
        try {
          deleteMessage(messageId);
          toast("Die Nachtricht wurde erfolgreich gelöscht.", "success", 1500);
          window.history.back();
        } catch (err) {
          toast("Das Löschen konnte nicht durchgeführt werden", "warning");
        } finally {
          setDeleting(false);
        }
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2>{message.subject}</h2>
          <p>{message.body}</p>
          <hr />
          <p>
            <em>
              {message.name} - {message.email}
            </em>
          </p>

          <div className="text-end">
            <ButtonGroup aria-label="Toolbox">
              <Button variant="secondary" onClick={() => window.history.back()}>
                Zurück
              </Button>
              <Button
                variant="danger"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting && <Spinner animation="border" size="sm" />} Entfernen
              </Button>
            </ButtonGroup>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactMessageEdit;