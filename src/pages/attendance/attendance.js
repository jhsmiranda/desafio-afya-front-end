import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { PlusCircle } from 'react-feather'

import '../../styles/globalstyles.css'

import DefaultPage from '../../components/defaultpage/defaultPage'

import { Specialists, Clients, Attendance } from '../../data'

const inputOpitions = [
    {   
        id: 1,
        value: 'status'
    },
    {   
        id: 2,
        value: 'client'
    },
    {   
        id: 3,
        value: 'specialist'
    },
    {   
        id: 4,
        value: 'date_scheduling'
    },
    {   
        id: 5,
        value: 'date_attendance'
    }
]

function AttendanceConsult() {

    useEffect(() => {
        document.title = "Clínica Pomarola | Atendimento"
    }, []);

    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState(0)

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    const onChangeSelect = (e) => {
        setSelectValue(e.target.value)
    }

    const Placeholder = (selectValue) => {
        switch (selectValue) {
            case '1':
              return "Informe o status";
            case '2':
               return 'Informe o nome do cliente';
            case '3':
                return 'Informe o nome do Especialista';
            case '4':
                return 'Informe a data de agendamento';
            case '5':
                return 'Informe a data de atendimento'
            default:
                return 'Pesquisar...';
        }
    }

    console.log(
        'Este é o value do input', inputValue,
        'Este é o value do Select', selectValue
    )

        
    return (
        <DefaultPage atualPage = 'Atendimento'>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h4">Atendimento</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                <Link to="/cadastro-atendimento">
                    <button type="button" className="btn btn-sm btn-outline-secondary mb-2">
                        <PlusCircle size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                        Cadastrar Atendimento
                    </button>
                </Link>
                </div>
            </div>

            <div className="row g-3">
                <div className="col-sm-4">
                    <select className="form-select" value={selectValue} onChange={onChangeSelect}>
                        <option defaultValue>Buscar antendimento por...</option>
                        <option value="1">Status</option>
                        <option value="2">Paciente</option>
                        <option value="3">Especialista</option>
                        <option value="4">Data de Agendamento</option>
                        <option value="5">Data de Atendimento</option>
                    </select>
                </div>
                <div className="col-sm-8">
                    <input 
                        className="form-control form-control-dark w-100 mb-3" 
                        type="text" 
                        placeholder={Placeholder({selectValue})}
                        value={inputValue}
                        onChange={onChangeInput}
                        aria-label="Search"
                    ></input>
                </div>
            </div>

            <div className="table-responsive mt-5">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th className="col-xs-3 col-md-3 col-lg-3">Paciente</th>
                            <th className="col-xs-3 col-md-3 col-lg-3">Especialista</th>
                            <th className="col-xs-2 col-md-2 col-lg-2">Data de Agendamento</th>
                            <th className="col-xs-2 col-md-2 col-lg-2">Data de Atendimento</th>
                            <th className="col-xs-2 col-md-2 col-lg-1">Status</th>
                            <th className="col-xs-2 col-md-2 col-lg-1">INFO</th>
                        </tr>
                    </thead>
                    <tbody>{}</tbody>
                </table>
            </div>
            
        </DefaultPage>
    );
}

export default AttendanceConsult;
