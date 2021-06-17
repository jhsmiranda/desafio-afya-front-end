import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import "../../styles/globalstyles.css";

import DefaultPage from "../../components/defaultpage/defaultPage";
import { mask } from "../../config/helpers";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Logo from "../../assets/images/logo16.png";

function MedicalRecord() {
  let history = useHistory();

  const token = localStorage.getItem('Authorization')
  if (!token) {
      history.push('/');
  }

  useEffect(() => {
    document.title = "Clínica Pomarola | Prontuário";
  }, []);

  const [MedicalRecords, setMedicalRecords] = useState([]);

    useEffect(() => {
        axios.get('https://clinica-pomarola-api.herokuapp.com/medical-records', { headers: { Authorization:localStorage.getItem('Authorization') } })
            .then((res) => {
              setMedicalRecords(res.data); 
              console.log(res.data)
            }).catch((err) => {
              console.log(err);
            })
    }, []);

  function handleClick(name, id) {
    history.push({
      pathname: `/historico-prontuario/${id}`,
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

    for (let medicalRecord of MedicalRecords) {
      if (lastClients.length < 10) {
        lastClients.push(medicalRecord);
      }
    }

    if (nameValue === "") {
      return lastClients.map((medicalRecord, index) => {
        return (
          <tr key={index}>
            {/* <td>{mask(medicalRecord.cpf, "###.###.###-##")}</td> */}
            <td>{medicalRecord?.client?.name}</td>
            <td>{medicalRecord?.openingDate}</td>
            <td>
              <button
                id={index}
                onClick={() => handleClick(medicalRecord.client.name, medicalRecord.id )}
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
        return MedicalRecords.filter(function (medicalRecord) {
          return medicalRecord?.client?.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
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
        return filterItems(nameValue).map((medicalRecord, index) => {
          return (
            <tr key={index}>
              {/* <td>{medicalRecord.cpf}</td> */}
              <td>{medicalRecord?.client?.name}</td>
              <td>12/06/2021</td>
              <td>
                <button
                  id={index}
                  onClick={() => handleClick(medicalRecord?.client?.name)}
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
              {/* <th className="col-xs-2 col-md-2 col-lg-2">CPF</th> */}
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
