import React, { useState, useCallback, useEffect } from "react";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import { TimePicker, InputNumber, Select } from "antd";

import "antd/dist/antd.css";
import "../../styles/styleLogin";
import "../../styles/globalstyles.css";
import { Calendar } from "./styles";

import DefaultPage from "../../components/defaultpage/defaultPage";

import { Clients, Profession, Specialists } from '../../data'

function RegisterAttendance() {

  useEffect(() => {
    document.title = "Clínica Pomarola | Atendimento";
  }, []);

  const format = "HH:mm";

  const [professionSelected, setProfessionSelected] = useState();

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

  const filterOption = (input, option) =>
    option.children
      .toLowerCase()
      .indexOf(input.toLowerCase()) >= 0

  const filterSort = (optionA, optionB) =>
    optionA.children
      .toLowerCase()
      .localeCompare(optionB.children.toLowerCase())

  const listClients = Clients
    .map(
      (client) => {
        return(
          client.name
        )
      }
    )
    .sort()
    .map(
      (client, index) => {
        return(
          <Option key={index+1} value={`client ${index+1}`}>{client}</Option>
        )
      }
    )

  const listProfessions = Profession
    .map(
      (profession) => {
        return(
          profession.name
        )
      }
    )
    .sort()
    .map(
      (profession, index) => {
        return(
          <Option key={index+1} value={`profession ${index+1}`}>{profession}</Option>
        )
      }
    )  

  const listSpecialists = Specialists
    .map(
      (specialist) => {
        return(
          specialist.name
        )
      }
    )
    .sort()
    .map(
      (specialist, index) => {
        return(
          <Option key={index+1} value={`profession ${index+1}`}>{specialist}</Option>
        )
      }
    )

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
              filterOption={filterOption}
              filterSort={filterSort}
              disabled
            >
              {listClients}
              {/* {mock && mock.map(client => (<Option value={client.id}>{client.name}</Option>))} */}
            </Select>            
          </div>
          <div className="col-sm-4">
            <label htmlFor="profession" className="form-label">
              Especialidade
            </label>
            <Select
              className="form-select"
              id="profession"
              aria-label="Default select example"
              onChange={e => setProfessionSelected(e)}
              showSearch                                         
              placeholder="Pesquisar Especialidade"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
            >
              {listProfessions}
             {/* {mockProfession && mockProfession.map(client => <Option value={client.id}>{client.name}</Option>)} */}
            </Select>

          </div>
          <div className="col-sm-4">
            <label htmlFor="specialist" className="form-label">
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
              filterOption={filterOption}
              filterSort={filterSort}
            >
              {listSpecialists}
              {/* {mockSpecialist &&
                mockSpecialist.filter((client) => 
                  client.professionId === professionSelected).map(option => (
                    <Option value={option.id}>{option.name}</Option>
                  ))}                */}

            </Select>
          </div>
          <div className="col-sm-6">
            <label htmlFor="name" className="form-label">Nome Completo</label>
            <input type="text" className="form-control" id="name" placeholder="Insira o nome completo" required></input>
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

export default RegisterAttendance;
