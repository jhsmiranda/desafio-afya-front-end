import React, { useState, useEffect } from "react";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import { Select, notification, Radio } from "antd";

import "antd/dist/antd.css";
import "../../styles/styleLogin";
import "../../styles/globalstyles.css";
import { Calendar, Time } from "./styles";

import DefaultPage from "../../components/defaultpage/defaultPage";

import {
  mock,
  mockSpecialist,
  mockSpecialty,
  schedules,
  availableTime,
} from "../../data";

function RegisterAttendance() {
  useEffect(() => {
    document.title = "Clínica Pomarola | Atendimento";
  }, []);

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

  // const mock = [
  //   {id:1, name:"Laura Lima do Val Carneiro"},
  //   {id:2, name:"Thiago Corrêa Diniz"},
  //   {id:3, name:"Sarah Maria de Lucena Silva"},
  //   {id:4, name:"Filipe Lauro Matos"},
  //   {id:5, name:"Guilherme Santana Tulio"},
  //   {id:6, name:"Yuri Martins da Silva"},
  //   {id:7, name:"Ricardo julio Carneiro"}
  // ];

  // const mockSpecialist = [
  //   {id:1, name:"Roberto carlos da Silva", professionId:3},
  //   {id:2, name:"Roberta carla da Silva", professionId:3},
  //   {id:3, name:"Francisco Santos Motta", professionId:1},
  //   {id:4, name:"Tulio Potter", professionId:2},
  //   {id:5, name:"Pedro matos da silva", professionId:4},
  //   {id:6, name:"Kaio Jorge Santos", professionId:5},
  //   {id:7, name:"Matheus Carlos Hagen", professionId:6},
  // ]

  // const mockProfession = [
  //   {id:1, name:"Ginecologia"},
  //   {id:2, name:"Pediatra"},
  //   {id:3, name:"Otorrino"},
  //   {id:4, name:"Ortopedista"},
  //   {id:5, name:"Urologista"},
  //   {id:6, name:"Dentista"}
  // ]

  return (
    <DefaultPage atualPage="Atendimento">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
        <h1 className="h4">Cadastrar Atendimento</h1>
      </div>
      <form action="/cliente" method="POST" className="p-2">
        <div className="row g-3">
          <div className="col-sm-4">
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
              {mock &&
                mock.map((client) => (
                  <Option value={client.id}>{client.name}</Option>
                ))}
            </Select>

            <label
              htmlFor="specialist"
              className="form-label"
              style={{ marginTop: "15px" }}
            >
              Especialidade
            </label>
            <Select
              className="form-select"
              id="profession"
              aria-label="Default select example"
              onChange={(e) => setSpecialtySelected(e)}
              showSearch
              placeholder="Pesquisar Especialidade"
              optionFilterProp="children"
            >
              {mockSpecialty &&
                mockSpecialty.map((client) => (
                  <Option value={client.id}>{client.name}</Option>
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
              {mockSpecialist &&
                mockSpecialist
                  .filter((client) => client.specialtyId === specialtySelected)
                  .map((option) => (
                    <Option value={option.id}>{option.name}</Option>
                  ))}
            </Select>

            {mockSpecialist && (
              <div>
                <div className="d-flex flex-column">
                  <label
                    htmlFor="specialist"
                    className="form-label"
                    style={{ marginTop: "15px" }}
                  >
                    Valor da Consulta
                  </label>

                  <div>
                    R$
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      style={{ marginLeft: "10px", width: "70px" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="col-sm-4"
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

          <div className="col-sm-4">
            <h5>Horários Disponíveis</h5>
            <div>
              <div>
                <Radio.Group
                  defaultValue="a"
                  size="large"
                  buttonStyle="solid"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {availableTime.map((c) => (
                    <Time>
                      <Radio.Button
                        key={c}
                        value={c}
                        disabled={schedules.map((b) => b.hour).includes(c)}
                        style={{
                          margin: "5px",
                          borderRadius: "5px",
                          width: "75px",
                        }}
                      >
                        {c}
                      </Radio.Button>
                    </Time>
                  ))}
                </Radio.Group>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: 40, marginBottom: 30 }}></hr>
          <button
            type="submit"
            className="register-global btn btn-primary w-100"
          >
            Cadastrar Atendimento
          </button>
        </div>
      </form>
    </DefaultPage>
  );
}

export default RegisterAttendance;
