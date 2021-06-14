import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { PlusCircle, Search } from 'react-feather'

import '../../styles/globalstyles.css'

import DefaultPage from '../../components/defaultpage/defaultPage'

import { Attendances } from '../../data'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Logo from '../../assets/images/logo16.png'

const medicalRecordHistory = {
    date: '',
    hour: '',
    description: '',
    specialist: {
        id: '',
        name: ''
    },
    patient: {
        id: '',
        name: ''
    },
};

function AttendanceConsult() {

    useEffect(() => {
        document.title = "Clínica Pomarola | Atendimento"
    }, []);

    const [inputValue, setInputValue] = useState('')
    const [textValue, setTextValue] = useState('')
    const [selectValue, setSelectValue] = useState(0)
    const [selectStatus, setSelectStatus] = useState(0)
    const [modal, setModal] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    const [indice, setIndice] = useState();

    const [specialistData, setSpecialistData] = useState(medicalRecordHistory);

    useEffect(() => {
        console.log('specialistData ===', specialistData)
    }, [specialistData]);

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    const onChangeSelect = (e) => {
        setSelectValue(e.target.value)
    }
    const onChangeSelectStatus = (e) => {
        setSelectStatus(e.target.value)
    }
    const onChangeText = (e) => {
        setTextValue(e.target.value)
        const hour = filterItems(inputValue)[indice]?.date_hour
        const date = filterItems(inputValue)[indice]?.date_attendance
        const idSpecialist = filterItems(inputValue)[indice]?.specialist.id
        const nameSpecialist = filterItems(inputValue)[indice]?.specialist.name
        const idPatient = filterItems(inputValue)[indice]?.patient.id
        const namePatient = filterItems(inputValue)[indice]?.patient.name
        const data = {
            ['description']: textValue,
            ['date']: date,
            ['hour']: hour,
            ['specialist']: {
                ['id']: idSpecialist,
                ['name']: nameSpecialist
            },
            ['patient']: {
                ['id']: idPatient,
                ['name']: namePatient
            },
        };
        setSpecialistData({
            ...specialistData,
            ...data
        });
    }

    const Placeholder = () => {
        switch (selectValue) {
            case 'status':
              return "Informe o status (Agendado, Confirmado ou Cancelado)";
            case 'patient':
               return 'Informe o nome do Paciente';
            case 'specialist':
                return 'Informe o nome do Especialista';
            case 'date_scheduling':
                return 'Informe a data de agendamento';
            case 'date_attendance':
                return 'Informe a data de atendimento'
            default:
                return 'Escolha uma opção de busca...';
        }
    }

    const toggle = (e) => {
        setModal(!modal)
        setIndice(e.target.id)
        e.preventDefault()
    }

    const closeModal = () => {
        setModal(!modal)
        setSelectStatus((inputValue)[indice]?.status)
    }

    const toggleRegister = (e) => {
        setModal(!modalRegister)
    }

    const saveSelect = () => {
        if (selectStatus === 'Realizado') {
            setModalRegister(!modalRegister)
        }
    }

    const saveRegister = (e) => {
        setModal(!modal)
        setModalRegister(!modalRegister)
    }

    const closeModalRegister = () => {
        setModalRegister(!modalRegister)
    }

    const filterItems = function (query) {
        return Attendances.filter(function (attendance) {
            switch (selectValue) {
                case 'status':
                    return (attendance.status.toLowerCase().indexOf(query.toLowerCase()) > -1);
                case 'patient':
                    return (attendance.patient.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
                case 'specialist':
                    return (attendance.specialist.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
                case 'date_scheduling':
                    return (attendance.date_scheduling.toLowerCase().indexOf(query.toLowerCase()) > -1);
                default:
                    return (attendance.date_attendance.toLowerCase().indexOf(query.toLowerCase()) > -1);
            }
        });
    };

    const inputEmpty = Attendances.map(
        (attendance, index) => {
            return (
                <tr key={index}>
                    <td>{attendance.patient.name}</td>
                    <td>{attendance.specialist.name}</td>
                    <td>{attendance.date_scheduling}</td>
                    <td>{attendance.date_attendance}</td>
                    <td>{attendance.status}</td>
                    <td><button 
                            id={index}
                            onClick={toggle}
                            className="botao btn btn-sm btn-outline-secondary"
                        >Detalhes</button>
                    </td>
                </tr>
            )
        }
    )

    const inputFilter = filterItems(inputValue).map(
        (attendance, index) => {
            return (
                <tr key={index}>
                    <td>{attendance.patient.name}</td>
                    <td>{attendance.specialist.name}</td>
                    <td>{attendance.date_scheduling}</td>
                    <td>{attendance.date_attendance}</td>
                    <td>{attendance.status}</td>
                    <td><button
                            id={index}
                            onClick={toggle}
                            className="botao btn btn-sm btn-outline-secondary"
                        >Detalhes</button>
                    </td>
                </tr>
            )
        }
    )

    const listAttendance = () => {

        if (filterItems(inputValue).length === 0) {
            return (
                <tr key={1}>
                    <td>Não encontrado.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        } else {

            if (selectValue === 0 || selectValue === 'Buscar antendimento por...') {
                return (inputEmpty);
            } else {
                return (inputFilter)
            }
        }
    }
       
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
                        <option value="status">Status</option>
                        <option value="patient">Paciente</option>
                        <option value="specialist">Especialista</option>
                        <option value="date_scheduling">Data de Agendamento</option>
                        <option value="date_attendance">Data de Atendimento</option>
                    </select>
                </div>
                <div className="col-sm-6">
                    <input 
                        className="form-control form-control-dark w-100 mb-3" 
                        type="text" 
                        placeholder={Placeholder()}
                        value={inputValue}
                        onChange={onChangeInput}
                        aria-label="Search"
                        disabled={selectValue === 0 || selectValue === 'Buscar antendimento por...'}
                    ></input>
                </div>
                <div className="col-sm-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary mb-2" style={{ width: "100%", height: "70%" }}>
                        <Search size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                        Pesquisar
                    </button>
                </div>
            </div>

            <div className="table-responsive mt-5">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th className="col-xs-3 col-md-3 col-lg-3">Paciente</th>
                            <th className="col-xs-3 col-md-3 col-lg-3">Especialista</th>
                            <th className="col-xs-2 col-md-2 col-lg-1.5">Agendamento</th>
                            <th className="col-xs-2 col-md-2 col-lg-1.5">Atendimento</th>
                            <th className="col-xs-2 col-md-2 col-lg-1.5">Status</th>
                            <th className="col-xs-2 col-md-2 col-lg-1.5">INFO</th>
                        </tr>
                    </thead>
                    <tbody>{listAttendance()}</tbody>
                </table>
            </div>
            
            <Modal isOpen={modal} toggle={toggle} className="modal-specialist">
                <ModalHeader toggle={toggle}>Informações do Atendimento</ModalHeader>
                <ModalBody>
                    <div className="row g-3">
                        <div className="col-sm-12 reverter-logo-name">
                            <div className="col-sm-8 info-name-complete">
                                <strong>Paciente</strong>
                                <p>{filterItems(inputValue)[indice]?.patient.name}</p>
                            </div>
                            <div className="col-sm-4 info-logomarca">
                                <div className="clinica-pomarola">
                                    <span>Clínica P</span>
                                    <img
                                        src={Logo} width="16px" height="16px" alt="logo-pormarola"
                                        style={{ marginRight: 2, marginBottom: 0 }}
                                    />
                                    <span>marola</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <strong>Especialista</strong>
                            <p>{filterItems(inputValue)[indice]?.specialist.name}</p>
                        </div>
                        <div className="col-sm-4 d-flex flex-column">
                            <strong>Status / Editar Status</strong>
                            <select value={selectStatus} onChange={onChangeSelectStatus} className="select-modal-attendance">
                                <option defaultValue>{filterItems(inputValue)[indice]?.status}</option>
                                <option value="Agendado" disabled={filterItems(inputValue)[indice]?.status === "Agendado"}>Agendado</option>
                                <option value="Cancelado" disabled={filterItems(inputValue)[indice]?.status === "Cancelado"}>Cancelado</option>
                                <option value="Realizado" disabled={filterItems(inputValue)[indice]?.status === "Realizado"}>Realizado</option>
                            </select>
                        </div>
                        <div className="col-sm-6">
                            <strong>Data de Agendamento</strong>
                            <p>{filterItems(inputValue)[indice]?.date_scheduling}</p>
                        </div>
                        <div className="col-sm-6">
                            <strong>Data de Atendimento</strong>
                            <p>{filterItems(inputValue)[indice]?.date_attendance}</p>
                        </div>
                        <div className="col-sm-6">
                            <strong>Horário</strong>
                            <p>{filterItems(inputValue)[indice]?.date_hour}</p>
                        </div>
                        <div className="col-sm-6">
                            <strong>Valor</strong>
                            <p>R$ {filterItems(inputValue)[indice]?.value}</p>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        type="button"
                        color="primary"
                        disabled={selectStatus === filterItems(inputValue)[indice]?.status || selectStatus ===  0 || selectStatus ===  undefined}
                        onClick={saveSelect}
                    >Salvar Alterações</Button>
                    <Button color="danger" onClick={closeModal}>Voltar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalRegister} toggle={toggleRegister} className="modal-register-attendance">
                <ModalHeader toggle={toggleRegister}>Registro do Atendimento</ModalHeader>
                <ModalBody>
                    <div className="row g-3">
                        <div className="col-sm-12">
                            <strong>Insira as informações do atendimento</strong>
                            <textarea value={textValue} onChange={onChangeText} style={{width: "100%", height:"200px"}}></textarea>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        type="button"
                        color="primary"
                        onClick={saveRegister}
                    >Salvar Registro</Button>
                    <Button color="danger" onClick={closeModalRegister}>Voltar</Button>
                </ModalFooter>
            </Modal>
            
        </DefaultPage>
    );
}

export default AttendanceConsult;
