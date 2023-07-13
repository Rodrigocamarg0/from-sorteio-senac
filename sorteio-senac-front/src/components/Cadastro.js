import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const BtnCadastro = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
  
    const newData = {
      ...formData,
      created_at: formattedDate,
    };
    console.log(newData)
    fetch('https://sorteio-solidario-senacrs.onrender.com/api/usuario/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully:', data);
        handleClose();
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your form components go here */}
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="name" class="col-form-label">Nome:</label>
              <input type="text" class="form-control" id="nome" onChange={handleChange}></input>
            </div>
            <div class="mb-3">
              <label for="cpf" class="col-form-label">CPF:</label>
              <input type="text" class="form-control" id="cpf" onChange={handleChange}></input>
            </div>
            <div class="mb-3">
              <label for="celular" class="col-form-label">Celular:</label>
              <input type="text" class="form-control" id="celular" onChange={handleChange}></input>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
              <label class="form-check-label" for="flexCheckDefault">
                Eu li e concordo com os <a href="web/termo">termos de uso</a> do sorteio.
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="button" onClick={handleSubmit}>
              Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BtnCadastro;