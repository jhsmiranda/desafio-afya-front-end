import React from 'react'
import { Link } from 'react-router-dom'
import { Activity, User, Clipboard, Calendar, LogOut } from 'react-feather'
import { Collapse, Nav, Navbar } from 'reactstrap';

export default function SideBarGlobal({isOpen, atualPage}) {

    const client = 'Cliente';
    const Specialist = 'Especialista';
    const medicalCare = 'Atendimento';
    const medicalRecord = 'Prontuário';

    return(

        <Navbar expand="md" className="sidebar-global">
            <Collapse isOpen={isOpen} navbar>
                <Nav className="sidebar-content-global position-sticky pt-3 d-flex flex-column p-2">

                    <hr className="divisor-top-sidebar"></hr>

                    <ul className="nav-pills sidebar-nav-global">
                        <li>
                            <Link
                                to="/cliente"
                                className={
                                    atualPage === client ? 
                                    'sidebar-list-global sidebar-active-global' :
                                    'sidebar-list-global sidebar-inactive-global'
                                }
                                aria-current="page"
                            >
                                <User size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                {client}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/especialista"
                                className={
                                    atualPage === Specialist ?
                                    'sidebar-list-global sidebar-active-global' :
                                    'sidebar-list-global sidebar-inactive-global'
                                }
                            >
                                <Activity size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                {Specialist}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/atendimento"
                                className={
                                    atualPage === medicalCare ?
                                    'sidebar-list-global sidebar-active-global' :
                                    'sidebar-list-global sidebar-inactive-global'
                                }
                            >
                                <Calendar size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                {medicalCare}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/prontuario"
                                className={
                                    atualPage === medicalRecord ?
                                    'sidebar-list-global sidebar-active-global' :
                                    'sidebar-list-global sidebar-inactive-global'
                                }
                            >
                                <Clipboard size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                                {medicalRecord}
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
