import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Activity, User, Clipboard, Calendar, LogOut, PlusSquare } from 'react-feather'
import { Collapse, Nav, Navbar, NavbarToggler } from 'reactstrap';

import Logo from '../../components/images/logo16.png'

import '../../styles/globalstyles.css'

import SearchCep from '../../scripts/searchCep'

function Dashboard() {

    useEffect(() => {
        document.title = "Clínica Pomarola | Especialista"
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div className="body">

            <Navbar expand="md" className="navbar-global navbar-dark">
                <div className="navbar-brand-global">
                    <span>Clínica P</span>
                    <img
                        src={Logo} width="16px" height="16px" alt="logo-pormarola"
                        style={{ marginRight: 2, marginBottom: 0 }}
                    />
                    <span>marola</span>
                </div>

                <NavbarToggler onClick={toggle} className="navbar-toggle-global"/>
            </Navbar>

            <div className="container-fluid">
                <div className="row">
                    <Navbar expand="md" className="sidebar-global">
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="sidebar-content-global position-sticky pt-3 d-flex flex-column p-2">

                                <hr className="divisor-top-sidebar"></hr>

                                <ul className="nav-pills sidebar-nav-global">
                                    <li>
                                        <Link to="/cliente" className="sidebar-list-global sidebar-inactive-global">
                                            <User size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                            Cliente
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/especialista" className="sidebar-list-global sidebar-active-global" aria-current="page">
                                            <Activity size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                            Especialista
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/atendimento" className="sidebar-list-global sidebar-inactive-global">
                                            <Calendar size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                            Atendimento
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/prontuario" className="sidebar-list-global sidebar-inactive-global">
                                            <Clipboard size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                            Prontuário
                                        </Link>
                                    </li>
                                    <li className="list-bottom-sidebar">
                                        <hr className="divisor-bottom-sidebar mb-2"></hr>
                                        <Link to="/" className="sidebar-list-global sidebar-inactive-global">
                                            <LogOut size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                            Sair
                                        </Link>
                                    </li>
                                </ul>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <main className="col-md-9 ms-sm-auto col-lg-10">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                            <h1 className="h4" style={{ marginTop:2, paddingBottom: 3 }}>Cadastro de Especialista</h1>
                        </div>

                        <form action="/cliente" method="POST" className="p-2">
                            <div className="row g-3">  
                                <div className="col-sm-6">
                                    <label htmlFor="name" className="form-label">Nome Completo</label>
                                    <input type="text" className="form-control" id="name" placeholder="Insira o nome completo" required></input>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="email" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="email" placeholder="Insira e-mail" required></input>
                                </div>

                                <div className="col-sm-3">
                                    <div className="select-specialist">
                                        <label htmlFor="blood-type" className="form-label">Profissão</label>
                                        <button className="button-add-specialist">
                                            <PlusSquare size={20} />
                                        </button>
                                    </div>
                                    <select className="form-select" id="blood-type" aria-label="Default select example">
                                        <option defaultValue>Selecione a Profissão</option>
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
                                    <label htmlFor="register" className="form-label">Registro</label>
                                    <input type="text" className="form-control" id="register" placeholder="Insira o registro" required></input>
                                </div>

                                <div className="col-sm-3">
                                    <label htmlFor="cellphone" className="form-label">Celular</label>
                                    <input type="tel" className="form-control" id="cellphone" placeholder="Insira o celular" required></input>
                                </div>

                                <div className="col-sm-3">
                                    <label htmlFor="phone" className="form-label">Telefone<span className="text-muted"> (Opcional)</span></label>
                                    <input type="tel" className="form-control" id="phone" placeholder="Insira o telefone"></input>
                                </div>

                                <div className="col-sm-2">
                                    <label htmlFor="cep" className="form-label">CEP</label>
                                    <input type="text" className="form-control" id="cep" placeholder="Insira o cep" onBlur={SearchCep} required></input>
                                </div>

                                <div className="col-sm-8">
                                    <label htmlFor="address" className="form-label">Logradouro</label>
                                    <input type="text" className="form-control" id="address" disabled required></input>
                                </div>

                                <div className="col-sm-2">
                                    <label htmlFor="number" className="form-label">Número</label>
                                    <input type="text" className="form-control" id="number" placeholder="Insira o número" required></input>
                                </div>

                                <div className="col-sm-3">
                                    <label htmlFor="complement" className="form-label">Complemento</label>
                                    <input type="text" className="form-control" id="complement" placeholder="Se houver"></input>
                                </div>

                                <div className="col-sm-4">
                                    <label htmlFor="district" className="form-label">Bairro</label>
                                    <input type="text" className="form-control" id="district" disabled required></input>
                                </div>

                                <div className="col-sm-4">
                                    <label htmlFor="city" className="form-label">Localidade</label>
                                    <input type="text" className="form-control" id="city" disabled></input>
                                </div>

                                <div className="col-sm-1">
                                    <label htmlFor="state" className="form-label">UF</label>
                                    <input type="text" className="form-control" id="state" disabled></input>
                                </div>

                                <hr style={{ marginTop: 50 }}></hr>

                                <button type="submit" className="register-global btn btn-primary w-100">Cadastrar Especialista</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;