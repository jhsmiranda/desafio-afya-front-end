import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PlusCircle } from 'react-feather'

import '../../styles/globalstyles.css'

import DefaultPage from '../../components/defaultpage/defaultPage'

function Dashboard() {

    useEffect(() => {
        document.title = "Clínica Pomarola | Especialista"
    }, []);

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
        <DefaultPage className="col-md-9 ms-sm-auto col-lg-10" atualPage = 'Especialista'>
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
        </DefaultPage>
    );
}

export default Dashboard;