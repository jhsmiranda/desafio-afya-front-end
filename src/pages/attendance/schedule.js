import React, { useState, useCallback } from "react";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import NavBarGlobal from "../../components/navbar/navbar";
import SideBarGlobal from "../../components/sidebar/sidebar";
import { TimePicker, InputNumber } from "antd";

import "antd/dist/antd.css";
import "../../styles/styles";
import { Calendar } from "./styles";

function Schedule() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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

  return (
    <div>
      <NavBarGlobal toggle={toggle} />
      <div>
        <SideBarGlobal isOpen={isOpen} />
        <main className="col-md-9 ms-sm-auto col-lg-10">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
            <h1 className="h4">Cadastrar Atendimento</h1>
            <div className="btn-toolbar mb-2 mb-md-0"></div>
          </div>
          <div className="col-sm-3">
            <label htmlFor="client" className="form-label">
              Cliente
            </label>
            <select
              className="form-select"
              id="client"
              aria-label="Default select example"
            >
              <option defaultValue>Selecione o Cliente</option>
              <option value="client1">Laura Lima do Val Carneiro</option>
              <option value="client2">Thiago Corrêa Diniz</option>
              <option value="client3">Sarah Maria de Lucena Silva</option>
              <option value="client4">Stephanie Oliver</option>
              <option value="client5">Camila Attico Chirinhan</option>
              <option value="client6">Bruna Barbosa Nunes da Silva</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="specialist" className="form-label">
              Especialidade
            </label>
            <select
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
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="specialist" className="form-label">
              Especialista
            </label>
            <select
              className="form-select"
              id="specialist"
              aria-label="Default select example"
            >
              <option defaultValue>Selecione o Especialista</option>
              <option value="Especialista1">Gabriela de Araújo Egídio</option>
              <option value="Especialista2">Gustavo Rodrigues Pereira</option>
              <option value="Especialista3">Gustavo Henrique Souza Dyonísio</option>
              <option value="Especialista4">Kimberly Karoline Ramos da Costa</option>
              <option value="Especialista5">José Weider Pinheiro Neto</option>
            </select>
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
          <button type="submit" className="register-global btn btn-primary w-100">Cadastrar Atendimento</button>
        </main>
      </div>
    </div>
  );
}

export default Schedule;
