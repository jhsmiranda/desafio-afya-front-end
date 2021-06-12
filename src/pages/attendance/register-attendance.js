import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import { Select, notification, Radio } from "antd";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "antd/dist/antd.css";
import "../../styles/styleLogin";
import "../../styles/globalstyles.css";
import { Calendar, Time } from "./styles";

import DefaultPage from "../../components/defaultpage/defaultPage";

import {
  Clients,
  Profession,
  Specialists,
  schedules,
  availableTime,
} from "../../data";

function RegisterAttendance() {
  useEffect(() => {
    document.title = "Clínica Pomarola | Atendimento";
  }, []);

  //Modal

  const [modal, setModal] = useState(false);

  const toggle = (e) => {
    setModal(!modal)
  }

  const closeModal = () => {
    setModal(!modal)
  }

  //

  const [price, setPrice] = useState(0);

  const [specialistSelected, setSpecialistSelected] = useState();

  const [professionSelected, setProfessionSelected] = useState();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (day, modifiers) => {
    if (!specialistSelected) {
      return notification.warning({
        message: "Preencha todos os campos",
        description: "Selecione o Especialista antes de selecionar uma data",
      });
    }
    if (modifiers.available) {
      setSelectedDate(day);
      setModal(!modal)
    }

    //chamar api passando dia e especialista
  };

  const { Option } = Select;

  //MInhas constantes

  // const filterOption = (input, option) =>
  //   option.children
  //     .toLowerCase()
  //     .indexOf(input.toLowerCase()) >= 0

  // const filterSort = (optionA, optionB) =>
  //   optionA.children
  //     .toLowerCase()
  //     .localeCompare(optionB.children.toLowerCase())

  // const listClients = Clients
  //   .map(
  //     (client) => {
  //       return(
  //         client.name
  //       )
  //     }
  //   )
  //   .sort()
  //   .map(
  //     (client, index) => {
  //       return(
  //         <Option key={index+1} value={`client ${index+1}`}>{client}</Option>
  //       )
  //     }
  //   )

  // const listProfessions = Profession
  //   .map(
  //     (profession) => {
  //       return(
  //         profession.name
  //       )
  //     }
  //   )
  //   .sort()
  //   .map(
  //     (profession, index) => {
  //       return(
  //         <Option key={index+1} value={`profession ${index+1}`}>{profession}</Option>
  //       )
  //     }
  //   )  

  // const listSpecialists = Specialists
  //   .map(
  //     (specialist) => {
  //       return(
  //         specialist.name
  //       )
  //     }
  //   )
  //   .sort()
  //   .map(
  //     (specialist, index) => {
  //       return(
  //         <Option key={index+1} value={`profession ${index+1}`}>{specialist}</Option>
  //       )
  //     }
  //   )

  return (
    <DefaultPage atualPage="Atendimento">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
        <h1 className="h4">Cadastrar Atendimento</h1>
      </div>
      <form action="/cliente" method="POST" className="p-0">
        <div className="row g-3">
          <div className="col-xs-6 col-md-6 col-lg-6">
            <label htmlFor="client" className="form-label">
              Cliente
            </label>
            <Select
              className="form-select"
              id="client"
              aria-label="Default select example"
              showSearch
              placeholder="Pesquisar Cliente"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {Clients &&
                Clients.map((client) => (
                  <Option value={client.id}>{client.name}</Option>
                ))}
            </Select>

            <label
              htmlFor="profession"
              className="form-label"
              style={{ marginTop: "15px" }}
            >
              Especialidade
            </label>
            <Select
              className="form-select"
              id="profession"
              aria-label="Default select example"
              onChange={(e) => setProfessionSelected(e)}
              showSearch
              placeholder="Pesquisar Especialidade"
              optionFilterProp="children"
            >
              {Profession &&
                Profession.map((profession) => (
                  <Option value={profession.id}>{profession.name}</Option>
                ))}
            </Select>

            <label
              htmlFor="specialist"
              className="form-label"
              style={{ marginTop: "15px" }}
            >
              Especialista
            </label>
            <Select
              className="form-select"
              id="specialist"
              aria-label="Default select example"
              showSearch
              disabled={!professionSelected}
              placeholder="Pesquisar Especialista"
              optionFilterProp="children"
              onChange={(e) => setSpecialistSelected(e)}
            >
              {Specialists &&
                Specialists
                  .filter((profession) => profession.profession.id === professionSelected)
                  .map((specialist) => (
                    <Option value={specialist.id}>{specialist.name}</Option>
                  ))}
            </Select>

            {Specialists && (
                <div className="d-flex flex-column">
                  <label
                    htmlFor="specialist"
                    className="form-label"
                    style={{ marginTop: "15px" }}
                  >
                    Valor da Consulta
                  </label>

                  <div>
                      <input
                        className="form-control form-control-dark w-100 mb-3"
                        type="number"
                        placeholder="Insira o valor"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                      ></input>
                  </div>
                </div>
            )}
          </div>

          <div
            className="col-xs-6 col-md-6 col-lg-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Calendar>
              <DayPicker
                weekdaysShort={["D", "S", "T", "Q", "Q", "S", "S"]}
                weekdaysLong={["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]}
                fromMonth={new Date()}
                disabledDays={[
                  { daysOfWeek: [0, 6] },
                  {
                    before: new Date(),
                  },
                ]}
                modifiers={{
                  available: { daysOfWeek: [1, 2, 3, 4, 5] },
                }}
                selectedDays={selectedDate}
                onDayClick={handleDateChange}
                months={[
                  "Janeiro",
                  "Fevereiro",
                  "Março",
                  "Abril",
                  "Maio",
                  "Junho",
                  "Julho",
                  "Agosto",
                  "Setembro",
                  "Outubro",
                  "Novembro",
                  "Dezembro",
                ]}
              />
            </Calendar>
          </div>
          
          <Modal isOpen={modal} toggle={toggle} className="">
            <ModalHeader toggle={toggle}>Horários Disponíveis</ModalHeader>
            <ModalBody>
              <div className="row g-3">
                <div className="col-sm-12">
                  <Radio.Group
                    defaultValue="a"
                    size="large"
                    buttonStyle="solid"
                    style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
                  >
                    {availableTime.map((c) => (
                      <Time>
                        <Radio.Button
                          key={c}
                          value={c}
                          disabled={schedules.map((b) => b.hour).includes(c)}
                          style={{
                            margin: "5px",
                            borderRadius: "5px"
                          }}
                        >
                          {c}
                        </Radio.Button>
                      </Time>
                    ))}
                  </Radio.Group>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
                <Button type="button" color="primary" onClick={closeModal}>Editar Cliente</Button>
                <Button color="danger" onClick={closeModal}>Voltar</Button>
            </ModalFooter>
          </Modal>
        </div>
        <hr style={{ marginTop: 40, marginBottom: 30 }}></hr>
        <button
          type="submit"
          className="register-global btn btn-primary w-100"
        >
          Cadastrar Atendimento
        </button>
      </form>
    </DefaultPage>
  );
}

export default RegisterAttendance;
