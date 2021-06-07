import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PlusCircle } from 'react-feather'

import '../../styles/globalstyles.css'

import DefaultPage from '../../components/defaultpage/defaultPage'
import { Clients } from '../../data'

function Client() {

    useEffect(() => {
        document.title = "Clínica Pomarola | Cliente"
    }, []);

    const listClients = Clients.map(
        (client, index) => {
            let id = 1000 + index

            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{client.name}</td>
                    <td><button className="btn btn-sm btn-outline-secondary">Abrir</button></td>
                </tr>
            )
        }
    )
    
    return (
        <DefaultPage atualPage = 'Cliente'>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h4">Cliente</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                <Link to="/cadastro-cliente">
                    <button type="button" className="btn btn-sm btn-outline-secondary mb-2">
                        <PlusCircle size={16} style={{ marginRight: 10, marginBottom: 4 }} />
                        Cadastrar Cliente
                    </button>
                </Link>
                </div>
            </div>

            <input className="form-control form-control-dark w-100 mb-3" type="text" placeholder="Pesquisar Cliente" aria-label="Search"></input>

            <h5 className="mb-3">Lista de Clientes</h5>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th className="col-xs-2 col-md-2 col-lg-2">ID</th>
                            <th className="col-xs-8 col-md-8 col-lg-8">Nome Completo</th>
                            <th className="col-xs-2 col-md-2 col-lg-2">INFO</th>
                        </tr>
                    </thead>
                    <tbody>{listClients}</tbody>
                </table>
            </div>
        </DefaultPage>
    );
}

export default Client;