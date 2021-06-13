import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { PlusCircle } from 'react-feather'

import '../../styles/globalstyles.css'

import DefaultPage from '../../components/defaultpage/defaultPage'
import { Specialists } from '../../data'
import { mask } from '../../config/helpers'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Logo from '../../assets/images/logo16.png'

const initialProfession = {
    id: '',
    name: '',
}

function Specialist() {

    useEffect(() => {
        document.title = "Clínica Pomarola | Especialista"
    }, []);

    //Modal Cadastrar Profissão

    const [professionData, setProfessionData] = useState(initialProfession);
    const [modalProfession, setModalProfession] = useState(false);

    const toggleProfession = () => {
        setModalProfession(!modalProfession)
    }

    const closeModalProfession = () => {
        setModalProfession(!modalProfession)
    }

    const onChange = (input, value, addressInput = null) => {
        if (input === 'profession-name') {
            setProfessionData({ ...professionData, [addressInput]: value});
        }
    }

    const saveProfession = () => {
        setModalProfession(!modalProfession)
        console.log(professionData)
    }

    useEffect(() => {
        console.log('professionData', professionData)
    }, [professionData]);

    //Modal Detalhes do Especialista

    const [modal, setModal] = useState(false);
    const [indice, setIndice] = useState();

    // Lista de Especialistas
    const [nameValue, setNameValue] = useState('')

    const listSpecialists = () => {

        const toggle = (e) => {
            setModal(!modal)
            setIndice(e.target.id) 
            e.preventDefault()
        }

        const closeModal = () => {
            setModal(!modal)
        }

        const lastSpecialists = []

        for (let specialist of Specialists) {
            if (lastSpecialists.length < 10) {
                lastSpecialists.push(specialist)
            }
        }

        if (nameValue === '') {
            return (lastSpecialists.map(
                (specialist, index) => {
                    return (
                        <tr key={index}>
                            <td>{specialist.register}</td>
                            <td>{specialist.name}</td>
                            <td>{specialist.profession.name}</td>
                            <td><button id={index} onClick={toggle} className="botao btn btn-sm btn-outline-secondary">Detalhes</button></td>
                            <Modal isOpen={modal} toggle={toggle} className="modal-specialist">
                                <ModalHeader toggle={toggle}>Informações do Especialista</ModalHeader>
                                <ModalBody>
                                    <div className="row g-3">
                                        <div className="col-sm-12 reverter-logo-name">
                                            <div className="col-sm-8 info-name-complete">
                                                <strong>Nome Completo</strong>
                                                <p>{lastSpecialists[indice || 0].name}</p>
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
                                            <strong>E-mail</strong>
                                            <p>{lastSpecialists[indice || 0].mail}</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <strong>Registro</strong>
                                            <p>
                                                {`
                                                    ${lastSpecialists[indice || 0].register}
                                                `}
                                            </p>
                                        </div>
                                        <div className="col-sm-4">
                                            <strong>Especialidade</strong>
                                            <p>{lastSpecialists[indice || 0].profession.name}</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <strong>Telefone</strong>
                                            <p>
                                                {mask(lastSpecialists[indice || 0].phone, '(##) ####-####')}
                                            </p>
                                        </div>
                                        <div className="col-sm-4">
                                            <strong>Celular</strong>
                                            <p>
                                                {mask(lastSpecialists[indice || 0].cellphone, '(##) #####-####')}
                                            </p>
                                        </div>
                                        <div className="col-sm-12">
                                            <strong>Endereço</strong>
                                            <p>
                                                {`
                                                    ${lastSpecialists[indice || 0].address.street}
                                                    , nº ${lastSpecialists[indice || 0].address.number}.
                                                    ${lastSpecialists[indice || 0].address.complement === '' ? '' : `${lastSpecialists[indice || 0].address.complement}.`}
                                                    ${lastSpecialists[indice || 0].address.neighborhood}.
                                                    ${lastSpecialists[indice || 0].address.locality}
                                                    - ${lastSpecialists[indice || 0].address.state}.
                                                    CEP: ${lastSpecialists[indice || 0].address.cep}
                                                `}
                                            </p>
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Link to={`/editar-especialista/${lastSpecialists[(indice === undefined || '' ? 0 : indice)].id}`}>
                                        <Button type="button" color="primary">Editar Especialista</Button>
                                    </Link>
                                    <Button color="danger" onClick={closeModal}>Voltar</Button>
                                </ModalFooter>
                            </Modal>
                        </tr>
                    )
                }
            ))
        } else {

            const filterItems = function (query) {
                return Specialists.filter(function (specialist) {
                    return specialist.name.toLowerCase().indexOf(query.toLowerCase()) > -1 || specialist.profession.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
            };

            if (filterItems(nameValue).length === 0) {
                return (
                    <tr key={1}>
                        <td>Não encontrado.</td>
                        <td>Cadastre a Profissão ou Especialista</td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            } else {
                return filterItems(nameValue).map(
                    (specialist, index) => {
                        return (
                            <tr key={index}>
                                <td>{specialist.register}</td>
                                <td>{specialist.name}</td>
                                <td>{specialist.profession.name}</td>
                                <td><button id={index} onClick={toggle} className="btn btn-sm btn-outline-secondary">Detalhes</button></td>
                                <Modal isOpen={modal} toggle={toggle} className="">
                                    <ModalHeader toggle={toggle}>Informações do Especialista</ModalHeader>
                                    <ModalBody>
                                        <div className="row g-3">
                                            <div className="col-sm-12 reverter-logo-name">
                                                <div className="col-sm-8 info-name-complete">
                                                    <strong>Nome Completo</strong>
                                                    <p>{filterItems(nameValue)[indice || 0].name}</p>
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
                                                <strong>E-mail</strong>
                                                <p>{filterItems(nameValue)[indice || 0].mail}</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <strong>Registro</strong>
                                                <p>
                                                    {`
                                                        ${lastSpecialists[indice || 0].register}
                                                    `}
                                                </p>
                                            </div>
                                            <div className="col-sm-4">
                                                <strong>Especialidade</strong>
                                                <p>{filterItems(nameValue)[indice || 0].profession.name}</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <strong>Telefone</strong>
                                                <p>
                                                    {mask(lastSpecialists[indice || 0].phone, '(##) ####-####')}
                                                </p>
                                            </div>
                                            <div className="col-sm-4">
                                                <strong>Celular</strong>
                                                <p>
                                                    {mask(lastSpecialists[indice || 0].cellphone, '(##) #####-####')}
                                                </p>
                                            </div>
                                            <div className="col-sm-12">
                                                <strong>Endereço</strong>
                                                <p>
                                                    {`
                                                    ${filterItems(nameValue)[indice || 0].address.street}
                                                    , nº ${filterItems(nameValue)[indice || 0].address.number}.
                                                    ${filterItems(nameValue)[indice || 0].address.complement === '' ? '' : `${filterItems(nameValue)[indice || 0].address.complement}.`}
                                                    ${filterItems(nameValue)[indice || 0].address.neighborhood}.
                                                    ${filterItems(nameValue)[indice || 0].address.locality}
                                                    - ${filterItems(nameValue)[indice || 0].address.state}.
                                                    CEP: ${filterItems(nameValue)[indice || 0].address.cep}
                                                `}
                                                </p>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Link to={`/editar-especialista/${filterItems(nameValue)[(indice === undefined || '' ? 0 : indice)].id}`}>
                                            <Button type="button" color="primary">Editar Especialista</Button>
                                        </Link>
                                        <Button color="danger" onClick={closeModal}>Voltar</Button>
                                    </ModalFooter>
                                </Modal>
                            </tr>
                        )
                    }
                )
            }
        }
    }

    return (
        <DefaultPage atualPage='Especialista' indice={indice}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h4">Especialista</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <button type="button" onClick={toggleProfession} className="btn btn-sm btn-outline-secondary mb-2 me-4">
                        <PlusCircle size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                        Cadastrar Profissão
                    </button>
                    <Link to="/cadastro-especialista">
                        <button type="button" className="btn btn-sm btn-outline-secondary mb-2">
                            <PlusCircle size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                            Cadastrar Especialista
                        </button>
                    </Link>
                </div>
            </div>

            <Modal isOpen={modalProfession} toggle={toggleProfession} className="modal-profession">
                <ModalHeader toggle={toggleProfession}>Cadastro de Profissão</ModalHeader>
                <ModalBody>
                    <div className="row g-3">
                        <div className="col-sm-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Insira a profissão"
                                value={professionData.name}
                                onChange={(e) => onChange('profession-name', e.target.value, 'name')}
                                required
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" color="primary" onClick={saveProfession}>Cadastrar Profissão</Button>
                    <Button color="danger" onClick={closeModalProfession}>Voltar</Button>
                </ModalFooter>
            </Modal>

            <input
                id="searchSpecialist"
                className="form-control form-control-dark w-100 mb-3"
                type="text"
                placeholder="Pesquisar Especialista"
                value={nameValue}
                aria-label="Search"
                onChange={e => setNameValue(e.target.value)}
            >
            </input>

            <h5 className="mb-3">Lista de Especialistas</h5>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th className="col-xs-2 col-md-2 col-lg-2">Registro</th>
                            <th className="col-xs-4 col-md-4 col-lg-4">Nome Completo</th>
                            <th className="col-xs-4 col-md-4 col-lg-4">Especialidade</th>
                            <th className="col-xs-2 col-md-2 col-lg-2">INFO</th>
                        </tr>
                    </thead>
                    <tbody>{listSpecialists()}</tbody>
                </table>
            </div>
        </DefaultPage>
    );
}

export default Specialist;