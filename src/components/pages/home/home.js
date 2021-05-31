import React, { useEffect, useState } from 'react'

import { Layout, User, Home, Calendar } from 'react-feather'
import { Collapse, Nav, Navbar, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

import Logo from '../../images/logo16.png'

import '../../styles/globalstyles.css'

function Dashboard() {

    useEffect(() => {
        document.title = "Houseflix | Dashboard"
    }, []);

    const [isOpen, setIsOpen] = useState(true);
    
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div className="body">

            <Navbar expand="md" className="navbar-global navbar-dark">
                <a href="/home" className="navbar-brand-global">
                    <img
                        src={Logo} width="21px" height="20px" alt="House Flix Logo"
                        style={{ marginRight: 15, marginBottom: 4 }}
                    />
                    <span style={{ fontSize: 22, lineHeight: 0 }}>Clínica Pomarola</span>
                </a>

                <NavbarToggler onClick={toggle} className="navbar-toggle-global"/>

                <input className="form-search-global" type="text" placeholder="Pesquisar" aria-label="Search"></input>
                <div className="navbar-nav px-5"></div>
            </Navbar>

            <div className="container-fluid">
                <div className="row">
                    <Navbar expand="md" className="sidebar-global">
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="sidebar-content-global position-sticky pt-3 d-flex flex-column p-2">

                                <hr className="divisor-top-sidebar"></hr>

                                <ul className="nav-pills sidebar-nav-global">
                                    <li>
                                        <a className="sidebar-list-global sidebar-active-global" href="dashboard.html" aria-current="page" >
                                            <Layout size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                            Cliente
                                        </a>
                                    </li>
                                    <li>
                                        <a className="sidebar-list-global sidebar-inactive-global" href="dashboard.html" >
                                            <User size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                            Especialista
                                        </a>
                                    </li>
                                    <li>
                                        <a className="sidebar-list-global sidebar-inactive-global" href="dashboard.html" >
                                            <Home size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                            Atendimento
                                        </a>
                                    </li>
                                    <li>
                                        <a className="sidebar-list-global sidebar-inactive-global" href="dashboard.html" >
                                            <Home size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                            Prontuário
                                        </a>
                                    </li>
                                </ul>

                                <UncontrolledDropdown className="dropdown">
                                    <hr className="divisor-bottom-sidebar"></hr>
                                    <DropdownToggle caret className="dropdown-sidebar-global">
                                        <img
                                            src="https://github.com/jhsmiranda.png"
                                            alt=""
                                            width="32px"
                                            height="32px"
                                            className="rounded-circle me-2"
                                        />
                                        <strong>Henrique Miranda</strong>
                                    </DropdownToggle>
                                    <DropdownMenu right className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                        <li>
                                            <a className="dropdown-item" href="#">Configurações</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Perfil</a>
                                        </li>
                                        <hr></hr>
                                        <li>
                                            <a className="dropdown-item" href="login.html">Sair</a>
                                        </li>
                                    </DropdownMenu>
                                </UncontrolledDropdown>                            

                            </Nav>
                        </Collapse>
                    </Navbar>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h4">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <Calendar size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                This week
                            </button>
                            </div>
                        </div>
                
                        <h2>Section title</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                        <td>tabular</td>
                                    </tr>
                                        <tr>
                                        <td>1,003</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>text</td>
                                        <td>random</td>
                                        <td>layout</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>placeholder</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>irrelevant</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,009</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,010</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                        <td>tabular</td>
                                    </tr>
                                    <tr>
                                        <td>1,011</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,012</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                        <td>layout</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,013</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                        <td>visual</td>
                                    </tr>
                                    <tr>
                                        <td>1,014</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,015</td>
                                        <td>random</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>text</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src = "../../assets/dist/js/bootstrap.bundle.min.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);