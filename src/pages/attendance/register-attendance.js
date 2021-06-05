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
              optionFilterProp="childrenprop"
              filterOption={(input, option) =>
                option.childrenprop.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.childrenprop
                  .toLowerCase()
                  .localeCompare(optionB.childrenprop.toLowerCase())
              }
            >
              <Option value="client1">Laura Lima do Val Carneiro</Option>
              <Option value="client2">Thiago Corrêa Diniz</Option>
              <Option value="client3">Sarah Maria de Lucena Silva</Option>
              <Option value="client4">Stephanie Oliver</Option>
              <Option value="client5">Camila Attico Chirinhan</Option>
              <Option value="client6">Bruna Barbosa Nunes da Silva</Option>
              <Option value="client7">Sarah Maria de Lucena Silva</Option>
              <Option value="client8">Stephanie Oliver</Option>
              <Option value="client9">Camila Attico Chirinhan</Option>
              <Option value="client10">Bruna Barbosa Nunes da Silva</Option>
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
              <Option value="client1">Laura Lima do Val Carneiro</Option>
              <Option value="client2">Thiago Corrêa Diniz</Option>
              <Option value="client3">Sarah Maria de Lucena Silva</Option>
              <Option value="client4">Stephanie Oliver</Option>
              <Option value="client5">Camila Attico Chirinhan</Option>
              <Option value="client6">Bruna Barbosa Nunes da Silva</Option>
              <Option value="client7">Sarah Maria de Lucena Silva</Option>
              <Option value="client8">Stephanie Oliver</Option>
              <Option value="client9">Camila Attico Chirinhan</Option>
              <Option value="client10">Bruna Barbosa Nunes da Silva</Option>
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
              <Option value="client1">Laura Lima do Val Carneiro</Option>
              <Option value="client2">Thiago Corrêa Diniz</Option>
              <Option value="client3">Sarah Maria de Lucena Silva</Option>
              <Option value="client4">Stephanie Oliver</Option>
              <Option value="client5">Camila Attico Chirinhan</Option>
              <Option value="client6">Bruna Barbosa Nunes da Silva</Option>
              <Option value="client7">Sarah Maria de Lucena Silva</Option>
              <Option value="client8">Stephanie Oliver</Option>
              <Option value="client9">Camila Attico Chirinhan</Option>
              <Option value="client10">Bruna Barbosa Nunes da Silva</Option>
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
