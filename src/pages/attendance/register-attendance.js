import React, { useState, useCallback, useEffect } from "react";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import { TimePicker, InputNumber, Select } from "antd";

import "antd/dist/antd.css";
import "../../styles/styles";
import "../../styles/globalstyles.css";
import { Calendar } from "./styles";

import DefaultPage from "../../components/defaultpage/defaultPage";

function Schedule() {
  useEffect(() => {
    document.title = "Clínica Pomarola | Atendimento";
  }, []);

  const format = "HH:mm";

  const [specialtySelected, setSpecialtySelected] = useState();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day, modifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const onChange = (value) => {
    console.log("changed", value);
  };

  const { Option } = Select;

  const mock = [
    {id:1, name:"Laura Lima do Val Carneiro"},
    {id:2, name:"Thiago Corrêa Diniz"},
    {id:3, name:"Sarah Maria de Lucena Silva"},
    {id:4, name:"Filipe Lauro Matos"},
    {id:5, name:"Guilherme Santana Tulio"},
    {id:6, name:"Yuri Martins da Silva"},
    {id:7, name:"Ricardo julio Carneiro"}
  ];

  const mockSpecialist = [
    {id:1, name:"Roberto carlos da Silva", specialtyId:3},
    {id:2, name:"Roberta carla da Silva", specialtyId:3},
    {id:3, name:"Francisco Santos Motta", specialtyId:1},
    {id:4, name:"Tulio Potter", specialtyId:2},
    {id:5, name:"Pedro matos da silva", specialtyId:4},
    {id:6, name:"Kaio Jorge Santos", specialtyId:5},
    {id:7, name:"Matheus Carlos Hagen", specialtyId:6},
  ]

  const mockSpecialty = [
    {id:1, name:"Ginecologia"},
    {id:2, name:"Pediatra"},
    {id:3, name:"Otorrino"},
    {id:4, name:"Ortopedista"},
    {id:5, name:"Urologista"},
    {id:6, name:"Dentista"}
  ]

  return (
    <DefaultPage atualPage="Atendimento">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
        <h1 className="h4">Atendimento</h1>
      </div>

      <h5 className="mb-3">Lista de Clientes</h5>
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
              {mock && mock.map(client => (<Option value={client.id}>{client.name}</Option>))}
            </Select>            
          </div>
          <div className="col-sm-4">
            <label htmlFor="specialist" className="form-label">
              Especialidade
            </label>
            <Select 
              className="form-select"
              id="client"
              aria-label="Default select example"
              onChange={e => setSpecialtySelected(e)}
              showSearch                                         
              placeholder="Pesquisar Especialidade"
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
             {mockSpecialty && mockSpecialty.map(client => <Option value={client.id}>{client.name}</Option>)}
            </Select>
            {/* <select
              className="form-select"
              id="blood-type"
              aria-label="Default select example"
            >
              <option defaultValue>Selecione a Especialidade</option>
              <option value="1">Ginecologista</option>
              <option value="2">Oftalmologista</option>
              <option value="3">Clínico Geral</option>
              <option value="1">Pediátra</option>
              <option value="2">Psicólogo</option>
              <option value="3">Dermatologista</option>
              <option value="1">Urologista</option>
              <option value="2">Ortopedista</option>
            </select> */}
          </div>
          <div className="col-sm-4">
            <label htmlFor="specialist" className="form-label">
              Especialista
            </label>
            <Select 
              className="form-select"
              disabled={!specialtySelected}
              id="client"
              aria-label="Default select example"              
              showSearch                                         
              placeholder="Pesquisar Especialista"
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
              {mockSpecialist &&
                mockSpecialist.filter((client) => 
                  client.specialtyId === specialtySelected).map(option => (
                    <Option value={option.id}>{option.name}</Option>
                  ))}               

            </Select>
            {/* <select
              className="form-select"
              id="specialist"
              aria-label="Default select example"
            >
              <option defaultValue>Selecione o Especialista</option>
              <option value="Especialista1">Gabriela de Araújo Egídio</option>
              <option value="Especialista2">Gustavo Rodrigues Pereira</option>
              <option value="Especialista3">
                Gustavo Henrique Souza Dyonísio
              </option>
              <option value="Especialista4">
                Kimberly Karoline Ramos da Costa
              </option>
              <option value="Especialista5">José Weider Pinheiro Neto</option>
            </select> */}
          </div>
          <TimePicker
            minuteStep={15}
            format={format}
            size="large"
            disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23]}
            hideDisabledOptions={true}
          />
          <InputNumber
            formatter={(value) =>
              `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChange}
          />
          <Calendar>
            <DayPicker
              weekdaysShort={["D", "S", "T", "Q", "Q", "S", "S"]}
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

export default Schedule;
