import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

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
      pathname: "/historico-prontuario",
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
            <td>Prontuário do paciente não encontrado</td>
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
                  onClick={() => handleClick(client.name)}
                  className="btn btn-sm btn-outline-secondary"
                >
                  Detalhes
                </button>
              </td>
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
        placeholder="Pesquisar prontuário pelo nome do paciente"
        value={nameValue}
        aria-label="Search"
        onChange={(e) => setNameValue(e.target.value)}
      ></input>

      <h5 className="mb-3">Lista de Prontuários</h5>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="col-xs-2 col-md-2 col-lg-2">CPF</th>
              <th className="col-xs-8 col-md-8 col-lg-5">Paciente</th>
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
