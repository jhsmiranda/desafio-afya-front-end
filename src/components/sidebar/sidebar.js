import React from 'react'
import { Link } from 'react-router-dom'
import { Activity, User, Clipboard, Calendar, LogOut } from 'react-feather'
import { Collapse, Nav, Navbar } from 'reactstrap';

export default function SideBarGlobal({isOpen}) {

    return(

        <Navbar expand="md" className="sidebar-global">
            <Collapse isOpen={isOpen} navbar>
                <Nav className="sidebar-content-global position-sticky pt-3 d-flex flex-column p-2">

                    <hr className="divisor-top-sidebar"></hr>

                    <ul className="nav-pills sidebar-nav-global">
                        <li>
                            <Link to="/cliente" className="sidebar-list-global sidebar-active-global" aria-current="page">
                                <User size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                Cliente
                            </Link>
                        </li>
                        <li>
                            <Link to="/especialista" className="sidebar-list-global sidebar-inactive-global">
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
                            <Link to="/prontuário" className="sidebar-list-global sidebar-inactive-global">
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
    )
}
