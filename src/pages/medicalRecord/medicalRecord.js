import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { PlusCircle } from "react-feather";

import "../../styles/globalstyles.css";

import DefaultPage from "../../components/defaultpage/defaultPage";
import { Clients } from "../../data";
import { mask } from "../../config/helpers";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Logo from "../../assets/images/logo16.png";

function MedicalRecord() {
  useEffect(() => {
    document.title = "Clínica Pomarola | Prontuário";
  }, []);

  const history = useHistory();

  function handleClick(name) {
    history.push({
      pathname: "/historico",
      state: {
        name: name,
      },
    });
  }
  //Modal

  const [modal, setModal] = useState(false);
  const [indice, setIndice] = useState();

  // Lista de Clientes
  const [nameValue, setNameValue] = useState("");

  const listClients = () => {
    const toggle = (e) => {
      setModal(!modal);
      setIndice(e.target.id);
      e.preventDefault();
    };

    const closeModal = () => {
      setModal(!modal);
    };

    const lastClients = [];

    for (let client of Clients) {
      if (lastClients.length < 10) {
        lastClients.push(client);
      }
    }

    if (nameValue === "") {
      return lastClients.map((client, index) => {
        return (
          <tr key={index}>
            <td>{mask(client.cpf, "###.###.###-##")}</td>
            <td>{client.name}</td>
            <td>12/06/2021</td>
            <td>
              <button
                id={index}
                onClick={() => handleClick(client.name)}
                className="botao btn btn-sm btn-outline-secondary"
              >
                Detalhes
              </button>
            </td>
            {/* <Modal isOpen={modal} toggle={toggle} className="">
                                <ModalHeader toggle={toggle}>Informações do Cliente</ModalHeader>
                                <ModalBody>
                                    <div className="row g-3">
                                        <div className="col-sm-12 reverter-logo-name">
                                            <div className="col-sm-8 info-name-complete">
                                                <strong>Nome Completo</strong>
                                                <p>{lastClients[indice || 0].name}</p>
                                            </div>
                                            <div className="col-sm-4 info-logomarca">
                                                <div className="clinica-pomarola">
                                                    <span>Clínica P</span>
                                                    <img
                                                        src={Logo} width="16px" height="16px" alt="logo-pormarola"
                                                        style={{ marginRight: 2, marginBottom: 0 }}
                                                    />
                                                    <span>marola</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <strong>E-mail</strong>
                                            <p>{lastClients[indice || 0].mail}</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <strong>CPF</strong>
                                            <p>{mask(lastClients[indice || 0].cpf, '###.###.###-##')}</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <strong>Tipo Sanguíneo</strong>
                                            <p>{lastClients[indice || 0].bloodtype}</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <strong>Telefone</strong>
                                            <p>
                                                {mask(lastClients[indice || 0].phone, '(##) ####-####')}
                                            </p>
                                        </div>
                                        <div className="col-sm-4">
                                            <strong>Celular</strong>
                                            <p>
                                                {mask(lastClients[indice || 0].cellphone, '(##) #####-####')}
                                            </p>
                                        </div>
                                        <div className="col-sm-12">
                                            <strong>Endereço</strong>
                                            <p>
                                                {`
                                                    ${lastClients[indice || 0].address.street}
                                                    , nº ${lastClients[indice || 0].address.number}.
                                                    ${lastClients[indice || 0].address.complement === '' ? '' : `${lastClients[indice || 0].address.complement}.`}
                                                    ${lastClients[indice || 0].address.neighborhood}.
                                                    ${lastClients[indice || 0].address.locality}
                                                    - ${lastClients[indice || 0].address.state}.
                                                    CEP: ${lastClients[indice || 0].address.cep}
                                                `}
                                            </p>
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Link to={`/editar-cliente/${lastClients[(indice === undefined || '' ? 0 : indice)].id}`}>
                                        <Button type="button" color="primary">Editar Cliente</Button>
                                    </Link>
                                    <Button color="danger" onClick={closeModal}>Voltar</Button>
                                </ModalFooter>
                            </Modal> */}
          </tr>
        );
      });
    } else {
      const filterItems = function (query) {
        return Clients.filter(function (client) {
          return client.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
      };

      if (filterItems(nameValue).length === 0) {
        return (
          <tr key={1}>
            <td></td>
            <td>Usuário não encontrado</td>
            <td></td>
            <td></td>
          </tr>
        );
      } else {
        return filterItems(nameValue).map((client, index) => {
          return (
            <tr key={index}>
              <td>{client.cpf}</td>
              <td>{client.name}</td>
              <td>12/06/2021</td>
              <td>
                <button
                  id={index}
                  onClick={toggle}
                  className="btn btn-sm btn-outline-secondary"
                >
                  Detalhes
                </button>
              </td>
              <Modal isOpen={modal} toggle={toggle} className="">
                <ModalHeader toggle={toggle}>
                  Informações do Cliente
                </ModalHeader>
                <ModalBody>
                  <div className="row g-3">
                    <div className="col-sm-12 reverter-logo-name">
                      <div className="col-sm-8 info-name-complete">
                        <strong>Nome Completo</strong>
                        <p>{filterItems(nameValue)[indice || 0].name}</p>
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
                    <div className="col-sm-8">
                      <strong>E-mail</strong>
                      <p>{filterItems(nameValue)[indice || 0].mail}</p>
                    </div>
                    <div>
                      <strong>CPF</strong>
                      <p>
                        {mask(lastClients[indice || 0].cpf, "###.###.###-##")}
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <strong>Tipo Sanguíneo</strong>
                      <p>{lastClients[indice || 0].bloodtype}</p>
                    </div>
                    <div className="col-sm-4">
                      <strong>Telefone</strong>
                      <p>
                        {mask(lastClients[indice || 0].phone, "(##) ####-####")}
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <strong>Celular</strong>
                      <p>
                        {mask(
                          lastClients[indice || 0].cellphone,
                          "(##) #####-####"
                        )}
                      </p>
                    </div>
                    <div className="col-sm-12">
                      <strong>Endereço</strong>
                      <p>
                        {`
                                                    ${
                                                      filterItems(nameValue)[
                                                        indice || 0
                                                      ].address.street
                                                    }
                                                    , nº ${
                                                      filterItems(nameValue)[
                                                        indice || 0
                                                      ].address.number
                                                    }.
                                                    ${
                                                      filterItems(nameValue)[
                                                        indice || 0
                                                      ].address.complement ===
                                                      ""
                                                        ? ""
                                                        : `${
                                                            filterItems(
                                                              nameValue
                                                            )[indice || 0]
                                                              .address
                                                              .complement
                                                          }.`
                                                    }
                                                    ${
                                                      filterItems(nameValue)[
                                                        indice || 0
                                                      ].address.neighborhood
                                                    }.
                                                    ${
                                                      filterItems(nameValue)[
                                                        indice || 0
                                                      ].address.locality
                                                    }
                                                    - ${
                                                      filterItems(nameValue)[
                                                        indice || 0
                                                      ].address.state
                                                    }.
                                                    CEP: ${
                                                      filterItems(nameValue)[
                                                        indice || 0
                                                      ].address.cep
                                                    }
                                                `}
                      </p>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Link
                    to={`/editar-cliente/${
                      filterItems(nameValue)[
                        indice === undefined || "" ? 0 : indice
                      ].id
                    }`}
                  >
                    <Button type="button" color="primary">
                      Editar Cliente
                    </Button>
                  </Link>
                  <Button color="danger" onClick={closeModal}>
                    Voltar
                  </Button>
                </ModalFooter>
              </Modal>
            </tr>
          );
        });
      }
    }
  };

  return (
    <DefaultPage atualPage="Prontuário" indice={indice}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
        <h1 className="h4">Prontuário</h1>
      </div>

      <input
        id="searchClient"
        className="form-control form-control-dark w-100 mb-3"
        type="text"
        placeholder="Pesquisar Cliente"
        value={nameValue}
        aria-label="Search"
        onChange={(e) => setNameValue(e.target.value)}
      ></input>

      <h5 className="mb-3">Lista de Clientes</h5>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="col-xs-2 col-md-2 col-lg-2">Id</th>
              <th className="col-xs-8 col-md-8 col-lg-5">Nome Completo</th>
              <th className="col-xs-8 col-md-8 col-lg-3">Data de Criação</th>
              <th className="col-xs-2 col-md-2 col-lg-2">INFO</th>
            </tr>
          </thead>
          <tbody>{listClients()}</tbody>
        </table>
      </div>
    </DefaultPage>
  );
}

export default MedicalRecord;
