import React, { useState, useEffect } from "react";

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import { Select, notification } from "antd";

import "antd/dist/antd.css";
import "../../styles/styles";
import "../../styles/globalstyles.css";
import { Calendar, Appointment } from "./styles";
import { FiClock } from "react-icons/fi";

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

  const [specialtySelected, setSpecialtySelected] = useState();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (day, modifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
    if (!specialistSelected) {
      return notification.warning({
        message: "Preencha todos os campos",
        description: "Selecione o Especialista antes de selecionar uma data",
      });
    }
    //chamar api passando dia e especialista
  };

  const { Option } = Select;

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

            <label htmlFor="specialist" className="form-label">
              Especialidade
            </label>
            <Select
              className="form-select"
              id="specialty"
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

            <label htmlFor="specialist" className="form-label">
              Especialista
            </label>
            <Select
              className="form-select"
              id="specialist"
              aria-label="Default select example"
              showSearch
              disabled={!specialtySelected}
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
                <div>
                  <label htmlFor="specialist" className="form-label">
                    Horário de Atendimento
                  </label>

                  <div>
                    <Select placeholder="Horário">
                      {availableTime
                        .filter(
                          (a) => !schedules.map((b) => b.hour).includes(a)
                        )
                        .map((c) => (
                          <Option key={c} value={c}>
                            {c}
                          </Option>
                        ))}
                    </Select>
                  </div>
                </div>

                <div className="d-flex flex-column">

                  <label htmlFor="specialist" className="form-label">
                    Valor da Consulta
                  </label>

                  <div>
                    R$
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    {/* <InputNumber
                      value={price}
                      formatter={(value) =>
                        `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                      parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                      onChange={setPrice}
                    /> */}
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
            <h5>Horários Agendados</h5>
            {schedules &&
              schedules.map((schedule) => (
                <Appointment>
                  <div>
                    <span>
                      <FiClock />
                      {schedule.hour}
                    </span>
                    <strong>{schedule.client}</strong>
                  </div>
                </Appointment>
              ))}
          </div>

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
