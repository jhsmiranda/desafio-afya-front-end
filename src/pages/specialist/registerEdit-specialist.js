import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../../styles/globalstyles.css';
import DefaultPage from '../../components/defaultpage/defaultPage';
import { notification } from "antd";

const Specialist = {
    name: '',
    mail: '',
    register: '',
    phone: '',
    cellphone: '',
    profession: '',
    address: {
        street: '',
        number: '',
        neighborhood: '',
        locality: '',
        state: '',
        complement: '',
        cep: ''
    }
};

function RegisterEditSpecialist() {
    let history = useHistory();

    const token = localStorage.getItem('Authorization')
    if (!token) {
        history.push('/');
    }

    const { id } = useParams();

    useEffect(() => {
        axios.get('https://clinica-pomarola-api.herokuapp.com/professions/', { headers: { Authorization:localStorage.getItem('Authorization') } })
        .then((res) => {
            console.log(res.data);
            setProfessions(res.data); 
            }).catch((err) => {
                console.log(err.response);
            })
        }, [id]);
    
    useEffect(() => {
        document.title = 'Clínica Pomarola | Especialista';
    }, []);
    
    
    const [specialistData, setSpecialistData] = useState(Specialist);
    
    useEffect(() => {
        axios.get(`https://clinica-pomarola-api.herokuapp.com/specialists/${id}`, { headers: { Authorization:localStorage.getItem('Authorization') } })
        .then((res) => {
            setSpecialistData(res.data); 
        }).catch((err) => {
            console.log(err.response);
        })
    }, [id]);
        
    const [streetEmpty, setStreetEmpty] = useState(false);

    const [neighborhoodEmpty, setNeighborhoodEmpty] = useState(false);
        
    const [Professions, setProfessions] = useState([]);
        
    const listProfession = Professions.map(
        (profession, index) => {
            return (
                <option key={index} value={profession.id}>{profession.name}</option>
                )
            }
            )
                
    const onChange = (input, value, addressInput = null) => {
        switch (input) {
            case 'address':
                const data = addressInput ? { [addressInput]: value } : value;
                setSpecialistData({
                    ...specialistData,
                    address: {
                        ...specialistData.address,
                        ...data
                    }
                });
            break;
            case 'profession':
            setSpecialistData({
                ...specialistData, [input]: value });
            break;
            case 'cellphone':
            case 'phone':
                setSpecialistData({ ...specialistData, [input]: value.replace(/[^0-9]/g, '') });
            break;
            default:
                setSpecialistData({ ...specialistData, [input]: value });
            }
    };

    const saveSpecialist = (e) => {
        e.preventDefault();
        let success = null
        if (id) {
            axios.put(`https://clinica-pomarola-api.herokuapp.com/specialists/${id}`, specialistData, { headers: { Authorization:localStorage.getItem('Authorization') } })
            .then((res) => {
                success = true
                console.log('Editado com sucesso!', res.data)
                notification.success({
                    message: "Especialista Editado",
                    description: 'Especialista editado com sucesso!'
                })
            }).catch((err) => {
                notification.warning({
                    message: "Especialista Não Editado",
                    description: 'Insira as informações corretamente!'
                })
                console.log(err.response);  
            }).finally(() => {
                if (success){
                  history.push('/especialista');
                }
            })
        } else {
            axios.post('https://clinica-pomarola-api.herokuapp.com/specialists', specialistData, { headers: { Authorization:localStorage.getItem('Authorization') } })
            .then((res) => {
                success = true
                console.log('Cadastrado com sucesso!', res.data)
                notification.success({
                    message: "Especialista cadastrado",
                    description: 'Especialista cadastrado com sucesso!'
                })
            }).catch((err) => {
                console.log(err.response);
                notification.warning({
                    message: "Especialista Não Cadastrado",
                    description: 'Insira as informações corretamente!'
                })
            }).finally(() => {
                if (success){
                  history.push('/especialista');
                }
            })
            console.log('console do cadastrar: ',specialistData.profession.id)
            console.log(specialistData)
        }
    }

    const changeCep = async (event) => {
        try {
            const cepValue = event.target.value;
            const cep = cepValue.replace(/[^0-9]/g, '');
            if (cep.length === 8) {
                const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                setStreetEmpty(data?.logradouro === '')
                setNeighborhoodEmpty(data?.bairro === '')

                if (data.hasOwnProperty('erro')) {
                    alert('Cep inválido')
                } else {
                    onChange('address', {
                        street: data.logradouro,
                        neighborhood: data.bairro,
                        locality: data.localidade,
                        state: data.uf,
                        cep
                    })
                }

            } else {
                onChange('address', cep, 'cep')
            }
        } catch (e) {
            // TODO - Tratamento de erro de cep
            alert(e)
        }
    }

    return (
        <DefaultPage atualPage="Especialista">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
                <h1 className="h4" style={{ marginTop: 2, paddingBottom: 3 }}>
                    {id === undefined ? 'Cadastro de' : 'Editar'} Especialista
                </h1>
            </div>
            <form action="/especialista" className="p-2">
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label htmlFor="name" className="form-label">
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Insira o nome completo"
                            value={specialistData.name}
                            onChange={(e) => onChange('name', e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="mail" className="form-label">
                            E-mail
                        </label>
                        <input
                            type="email"
                            value={specialistData.mail}
                            className="form-control"
                            placeholder="Insira e-mail"
                            onChange={(e) => onChange('mail', e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="profession" className="form-label">
                            Especialidade
                        </label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => onChange('profession', e.target.value, 'id')}
                        >
                            <option defaultValue>{id ? specialistData.profession.name : 'Escolha a especialidade'}</option>
                            {listProfession}
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="register" className="form-label">
                            Registro
                        </label>
                        <input
                            type="text"
                            value={specialistData.register}
                            className="form-control"
                            placeholder="Insira o Registro"
                            onChange={(e) => onChange('register', e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="phone" className="form-label">
                            Telefone
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Insira o telefone"
                            value={specialistData.phone}
                            onChange={(e) => onChange('phone', e.target.value)}
                        />
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="cellphone" className="form-label">
                            Celular
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Insira o celular"
                            value={specialistData.cellphone}
                            onChange={(e) => onChange('cellphone', e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="cep" className="form-label">
                            CEP
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Insira o cep"
                            value={specialistData.address.cep}
                            onChange={changeCep}
                            required
                        />
                    </div>

                    <div className="col-sm-8">
                        <label htmlFor="street" className="form-label">
                            Logradouro
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={specialistData.address.street}
                            onChange={(e) => onChange('address', e.target.value, 'street')}
                            disabled={!streetEmpty}
                            placeholder={!streetEmpty ? '' : 'Insira o logradouro'}
                            required
                        />
                    </div>

                    <div className="col-sm-2">
                        <label htmlFor="number" className="form-label">
                            Número
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Insira o número"
                            value={specialistData.address.number}
                            onChange={(e) => onChange('address', e.target.value, 'number')}
                            required
                        />
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor="complement" className="form-label">
                            Complemento
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={specialistData.address.complement}
                            onChange={(e) => onChange('address', e.target.value, 'complement')}
                            placeholder="Se houver"
                        />
                    </div>

                    <div className="col-sm-4">
                        <label htmlFor="neighborhood" className="form-label">
                            Bairro
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={specialistData.address.neighborhood}
                            onChange={(e) => onChange('address', e.target.value, 'neighborhood')}
                            disabled={!neighborhoodEmpty}
                            placeholder={!neighborhoodEmpty ? '' : 'Insira o logradouro'}
                            required
                        />
                    </div>

                    <div className="col-sm-4">
                        <label htmlFor="locality" className="form-label">
                            Localidade
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={specialistData.address.locality}
                            onChange={(e) => onChange('address', e.target.value, 'locality')}
                            disabled />
                    </div>

                    <div className="col-sm-1">
                        <label htmlFor="state" className="form-label">
                            UF
                        </label>
                        <input type="text" className="form-control"
                            value={specialistData.address.state}
                            onChange={(e) => onChange('address', e.target.value, 'state')}
                            disabled
                        />
                    </div>
                </div>
                <hr style={{ marginTop: 40, marginBottom: 30 }} />
                <button className="register-global btn btn-primary w-100" onClick={saveSpecialist}>
                    {id === undefined ? 'Cadastrar' : 'Editar'} Especialista
                </button>
            </form>
        </DefaultPage>
    );
}

export default RegisterEditSpecialist;