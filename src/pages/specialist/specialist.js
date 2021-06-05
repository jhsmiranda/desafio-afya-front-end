import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Activity, User, Clipboard, Calendar, PlusCircle, LogOut } from 'react-feather'
import { Collapse, Nav, Navbar, NavbarToggler } from 'reactstrap';

import Logo from '../../components/images/logo16.png'

import '../../styles/globalstyles.css'

function Dashboard() {

    useEffect(() => {
        document.title = "Clínica Pomarola | Especialista"
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    const specialists =[
        {name:"Laura Lima do Val Carneiro", profession: "Clínico Geral"},
        {name:"Thiago Corrêa Diniz", profession: "Oftalmologista"},
        {name:"Sarah Maria de Lucena Silva", profession: "Ginecologista"},
        {name:"Stephanie Oliver", profession: "Psicólogo"},
        {name:"Camila Attico Chirinhan", profession: "Urologista"},
        {name:"Bruna Barbosa Nunes da Silva", profession: "Pediatria"},
        {name:"Gabriela de Araújo Egídio", profession: "Clínico Geral"},
        {name:"Gustavo Rodrigues Pereira", profession: "Clínico Geral"},
        {name:"Gustavo Henrique Souza Dyonísio", profession: "Endocrinologista"},
        {name:"Kimberly Karoline Ramos da Costa", profession: "Ortopedista"},
        {name:"José Weider Pinheiro Neto", profession: "Ginecologista"}
    ];

    const listSpecialists = specialists.map(
        (spcialist, index) => {
            let id = 1000 + index

            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{spcialist.name}</td>
                    <td>{spcialist.profession}</td>
                    <td><button className="btn btn-sm btn-outline-secondary">Abrir</button></td>
                </tr>
            )
        }
    )
    
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
                            <h1 className="h4">Especialista</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            <Link to="/cadastro-especialista">
                                <button type="button" className="btn btn-sm btn-outline-secondary mb-2">
                                    <PlusCircle size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                    Cadastrar Especialista
                                </button>
                            </Link>
                            </div>
                        </div>

                        <input className="form-control form-control-dark w-100 mb-3" type="text" placeholder="Pesquisar Especialista" aria-label="Search"></input>

                        <h5 className="mb-3">Lista de Especialistas</h5>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th className="col-xs-2 col-md-2 col-lg-2">ID</th>
                                        <th className="col-xs-6 col-md-5 col-lg-5">Nome Completo</th>
                                        <th className="col-xs-2 col-md-3 col-lg-3">Especialidade</th>
                                        <th className="col-xs-2 col-md-2 col-lg-2">INFO</th>
                                    </tr>
                                </thead>
                                <tbody>{listSpecialists}</tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;