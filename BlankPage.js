import React, { useState } from "react";
import "./blankPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import FormGroup from 'react-bootstrap/Form';

import {
  Table,
  Container,
} from "reactstrap";

const BlankPage = () => {
  const [show, setShow] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");
  const [data, setData] = useState([
    { id: 1, previusData: "dato viejo", NewData: "dato nuevo" },
    { id: 2, previusData: "dato viejo", NewData: "dato nuevo" },
    { id: 3, previusData: "dato viejo", NewData: "dato nuevo" },
    { id: 4, previusData: "dato viejo", NewData: "dato nuevo" },
    { id: 5, previusData: "dato viejo", NewData: "dato nuevo"},
    { id: 6, previusData: "dato viejo", NewData: "dato nuevo" },
  ]);

  // Estado para almacenar la tarea seleccionada al presionar "Reject"
  const [selectedTask, setSelectedTask] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedTask(null);
  };

  const handleShow = () => setShow(true);

  const handleApproveWithConfirmation = () => {
    const result = window.confirm("¿Estás seguro de aprobar esta solicitud?");
    
    if (result) {
      handleApprove(); // Llama a la función handleApprove si el usuario hace clic en "Aceptar"
    } else {
      alert("Aprobación cancelada");
    }
  };

  const handleApprove = () => {
    alert("Has aprobado esta solicitud");
    // Aquí puedes poner la lógica adicional que quieres ejecutar al aprobar la solicitud
  };

  const handleReject = (taskId) => {
    setSelectedTask(taskId);
    handleShow();
  };

  return (
    <>
      <Container>
        <br />
        <h1 className="texto">Todo Task List Confirm</h1>
        <br />
        <br />
        <Table className="table">
          <thead className="texto">
            <tr>
              <th>ID</th>
              <th>Previous Change</th>
              <th>New Change</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="texto">
            {data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.previusData}</td>
                <td>{dato.NewData}</td>
                <td>
                  <Button variant="success" onClick={() => handleApproveWithConfirmation(dato.id)}>
                    Accept
                  </Button>{" "}
                  <Button variant="danger" onClick={() => handleReject(dato.id)}>
                    Reject
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Reject Task ${selectedTask}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            <label>Reason for Rejection</label>
            <input
              className="form-control"
              name="reject"
              type="text"
            />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => alert("Has rechazado esta tarea")}>
            Reject Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BlankPage;
