import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import SearchCep from '../../scripts/searchCep'

import '../../styles/globalstyles.css'

import DefaultPage from '../../components/defaultpage/defaultPage'

import { Clients } from '../../data'

const initialValue = {
    id: '',
    name:'',
    mail: '',
    cpf: '',
    bloodtype: '',
    phone: '',
    cellphone: '',
    address: {
        street: '',
        number: '',
        neighborhood: '',
        locality: '',
        state: '',
        complement: '',
        cep: ''
    }
}

function RegisterClient() {

    useEffect(() => {
        document.title = "Clínica Pomarola | Cliente"
    }, []);

    const { id } = useParams()

    // const [registerName, setRegisterName] = useState('')
    const [registerName, setRegisterName] = useState(initialValue)
    const [editValue, setEditValue] = useState(Clients[id-1])

    // const onChange = (e) => {
    //     setRegisterName(e.target.value)

    //     setEditValue(e.target.value)
    // }

    const onChange = (e) => {
        const { name, value } = e.target;
        setRegisterName({ ...registerName, [name]: value })
        console.log(registerName)
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
        <DefaultPage atualPage = 'Cliente'>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h4" style={{ marginTop:2, paddingBottom: 3 }}>{id === undefined ? 'Cadastro de' : 'Editar'} Cliente</h1>
            </div>

            <form action="/cliente" className="p-2" onSubmit={onSubmit}>
                <div className="row g-3">  
                    <div className="col-sm-6">
                        <label htmlFor="name" className="form-label">Nome Completo</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Insira o nome completo"  onChange={onChange} required></input>
                        {/* value={(id === undefined ? registerName : editValue.name)} */}
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="mail" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="mail" name="mail" placeholder="Insira e-mail" onChange={onChange} required></input>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input type="text" className="form-control" id="cpf" name="cpf" placeholder="Insira o CPF" onChange={onChange} required></input>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="bloodtype" className="form-label">Tipo Sanguíneo</label>
                        <select className="form-select" id="bloodtype" name="bloodtype" aria-label="Default select example"  onChange={onChange}>
                            <option defaultValue>Selecione o tipo</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="phone" className="form-label">Telefone<span className="text-muted"> (Opcional)</span></label>
                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Insira o telefone"  onChange={onChange}></input>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="cellphone" className="form-label">Celular</label>
                        <input type="tel" className="form-control" id="cellphone" name="cellphone" placeholder="Insira o celular"  onChange={onChange} required></input>
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input type="text" className="form-control" id="cep" name="cep" placeholder="Insira o cep" onBlur={SearchCep} onChange={onChange} required></input>
                    </div>
                    {/* value={(id === undefined ? registerName : editValue.cep)} onChange={onChange} */}

                    <div className="col-sm-8">
                        <label htmlFor="street" className="form-label">Logradouro</label>
                        <input type="text" className="form-control" id="street" name="street" onChange={onChange} disabled required></input>
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="number" className="form-label">Número</label>
                        <input type="text" className="form-control" id="number" name="number" placeholder="Insira o número" onChange={onChange} required></input>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="complement" className="form-label">Complemento</label>
                        <input type="text" className="form-control" id="complement" name="complement" placeholder="Se houver"  onChange={onChange}></input>
                    </div>

                    <div className="col-sm-4">
                        <label htmlFor="neighborhood" className="form-label">Bairro</label>
                        <input type="text" className="form-control" id="neighborhood" name="neighborhood" onChange={onChange} disabled required></input>
                    </div>

                    <div className="col-sm-4">
                        <label htmlFor="locality" className="form-label">Localidade</label>
                        <input type="text" className="form-control" id="locality" name="locality" disabled></input>
                    </div>

                    <div className="col-sm-1">
                        <label htmlFor="state" className="form-label">UF</label>
                        <input type="text" className="form-control" id="state" name="state"  disabled></input>
                    </div>
                </div>
                <hr style={{ marginTop: 40, marginBottom: 30 }}></hr>
                <button type="submit" className="register-global btn btn-primary w-100">{id === undefined ? 'Cadastrar' : 'Editar'} Cliente</button>
            </form>
        </DefaultPage>
    );
}

export default RegisterClient;