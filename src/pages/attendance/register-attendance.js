import React, { useState, useCallback, useEffect } from "react";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import { TimePicker, InputNumber, Select } from "antd";

import "antd/dist/antd.css";
import "../../styles/styles";
import "../../styles/globalstyles.css";
import { Calendar } from "./styles";

import DefaultPage from "../../components/defaultpage/defaultPage";

import { Clients, Specialtys, Specialists } from '../../data'

function RegisterAttendance() {

  useEffect(() => {
    document.title = "Clínica Pomarola | Atendimento";
  }, []);

  const format = "HH:mm";

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

  const listSpecialtys = Specialtys
    .map(
      (specialty) => {
        return(
          specialty.profession
        )
      }
    )
    .sort()
    .map(
      (specialty, index) => {
        return(
          <Option key={index+1} value={`specialty ${index+1}`}>{specialty}</Option>
        )
      }
    )
  


  // document.getElementById('specialty').value = ''
  // const specialtyValue = document.getElementById('specialty').value

  // const teste = Specialists
  //   .filter(
  //     (specialist) => {
  //       return(
  //         specialist.profession === specialtyValue
  //       )
  //     }
  //   )

  // const listSpecialists = () => {
  //   if(document.getElementById('specialty').value !== ''){
  //     document.getElementById('specialty').removeAttribute('disabled')
  //   }
  // }

  // console.log(document.getElementById('specialty'))
  

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
          <Option key={index+1} value={`specialty` + `${index+1}`}>{specialist}</Option>
        )
      }
    )

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
            </Select>
          </div>
          <div className="col-sm-4">
            <label htmlFor="specialty" className="form-label">
              Especialidade
            </label>
            <Select
              className="form-select"
              id="specialty"
              aria-label="Default select example"
              showSearch
              placeholder="Pesquisar Especialidade"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
            >
              {listSpecialtys}
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
              placeholder="Pesquisar Especialista"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
            >
              {listSpecialists}
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
