import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PlusCircle } from 'react-feather'

import '../../styles/globalstyles.css'

import DefaultPage from '../../components/defaultpage/defaultPage'

function Attendance() {

    useEffect(() => {
        document.title = "Clínica Pomarola | Atendimento"
    }, []);

        
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

            <input className="form-control form-control-dark w-100 mb-3" type="text" placeholder="Pesquisar Cliente" aria-label="Search"></input>

            <h5 className="mb-3">Lista de Clientes</h5>          
            
        </DefaultPage>
    );
}

export default Attendance;
