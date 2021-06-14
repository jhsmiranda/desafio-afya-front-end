import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "../../styles/globalstyles.css";

import DefaultPage from "../../components/defaultpage/defaultPage";
import { Historic } from "../../data";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Logo from "../../assets/images/logo16.png";

function MedicalHistoric() {
  useEffect(() => {
    document.title = "Clínica Pomarola | Histórico";
  }, []);

  const location = useLocation();

  console.log(location?.state.name);

  //Modal

  const [modal, setModal] = useState(false);
  const [indice, setIndice] = useState();
  const [description, setDescription] = useState();

  // Lista de Clientes
  // const [nameValue, setNameValue] = useState("");

  const toggle = (e) => {
    setIndice(e.target.id);
    e.preventDefault();
  };

  const closeModal = () => {
    setModal(!modal);
  };

  const openModal = (description) => {
    setDescription(description);
    setModal(true);
  };

  const listHistoric = Historic.map((client, index) => {
    return (
      <tr key={index}>
        <td>{client.data}</td>
        <td>{client.hour}</td>
        <td>
          {client.profession} / {client.specialist}
        </td>
        <td>
          <button
            id={index}
            onClick={() => openModal(client.description)}
            className="botao btn btn-sm btn-outline-secondary"
          >
            Ver Descrição
          </button>
        </td>
      </tr>
    );
  });

  return (
    <DefaultPage atualPage="Prontuário" indice={indice}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
        <h1 className="h4">Histórico de {location?.state.name}</h1>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="col-xs-2 col-md-2 col-lg-2">
                data de atendimento
              </th>
              <th className="col-xs-8 col-md-8 col-lg-5">hora</th>
              <th className="col-xs-8 col-md-8 col-lg-3">
                especialista/especialidade
              </th>
              <th className="col-xs-2 col-md-2 col-lg-2"></th>
            </tr>
          </thead>
          <tbody>{listHistoric}</tbody>
        </table>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>Descrição do Atendimento</ModalHeader>
        <ModalBody>
          <div className="row g-3">
            <div className="col-sm-12 reverter-logo-name">
              <div className="col-sm-8 info-name-complete">
                <p>{description}</p>
              </div>
              <div className="col-sm-4 info-logomarca">
                <div className="clinica-pomarola">
                  <span>Clínica P</span>
                  <img
                    src={Logo}
                    width="16px"
                    height="16px"
                    alt="logo-pormarola"
                    style={{ marginRight: 2, marginBottom: 0 }}
                  />
                  <span>marola</span>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={closeModal}>
            Voltar
          </Button>
        </ModalFooter>
      </Modal>
    </DefaultPage>
  );
}

export default MedicalHistoric;