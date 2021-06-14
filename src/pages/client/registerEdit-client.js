import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../../styles/globalstyles.css';
import DefaultPage from '../../components/defaultpage/defaultPage';
import { notification } from "antd";


const Client = {
    name: '',
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
};

function RegisterEditClient() {
    let history = useHistory();

    const token = localStorage.getItem('Authorization')
    if (!token) {
        history.push('/');
    }

    useEffect(() => {
        document.title = 'Clínica Pomarola | Cliente';
    }, []);

    const { id } = useParams();

    // const [editClient, setEditClient] = useState()
    
    const [clientData, setClientData] = useState(Client);

    useEffect(() => {
        axios.get(`https://clinica-pomarola-api.herokuapp.com/clients/${id}`, { headers: { Authorization:localStorage.getItem('Authorization') } })
            .then((res) => {
                setClientData(res.data); 
            }).catch((err) => {
                console.log(err);
            })
    }, [id]);
      

    const listBloodType = ['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(
        (bloodtype, index) => {
            return(
                <option key={index} value={bloodtype}>{bloodtype}</option>
            )
        }
    )

    const [streetEmpty, setStreetEmpty] = useState(false);
    const [neighborhoodEmpty, setNeighborhoodEmpty] = useState(false);

    const onChange = (input, value, addressInput = null) => {
        switch (input) {
            case 'address':
                const data = addressInput ? { [addressInput]: value } : value;
                setClientData({
                    ...clientData,
                    address: {
                        ...clientData.address,
                        ...data
                    }
                });
            break;
            case 'cellphone':
            case 'phone':
            case 'cpf':                
                setClientData({ ...clientData, [input]: value.replace(/[^0-9]/g, '')});
            break;
            default:
                setClientData({ ...clientData, [input]: value });
        }
    };

    const saveClient = (e) => {
        e.preventDefault();
        if (id) {
            let success = null
            axios.put(`https://clinica-pomarola-api.herokuapp.com/clients/${id}`, clientData, { headers: { Authorization:localStorage.getItem('Authorization') } })
            .then((res) => {
                success = true
                console.log('Editado com sucesso!', res.data)
                notification.success({
                    message: "Cliente Editado",
                    description: 'Cliente editado com sucesso!'
                })
            }).catch((err) => {
                notification.warning({
                    message: "Cliente Não Editado",
                    description: 'Insira as informações corretamente!'
                })
                console.log(err.response);  
            }).finally(() => {
                if (success){
                  history.push('/cliente');
                }
            })
        } else {
            let success = null
            axios.post('https://clinica-pomarola-api.herokuapp.com/clients', clientData, { headers: { Authorization:localStorage.getItem('Authorization') } })
            .then((res) => {
                success = true
                notification.success({
                    message: "Cliente Cadastrado",
                    description: 'Cadastrado realizado com sucesso!'
                })
                console.log('Cadastrado com sucesso!', res.data)
            }).catch((err) => {
                notification.warning({
                    message: "Cliente Não Cadastrado",
                    description: 'Insira as informações corretamente!'
                })
                console.log(err.response);
            }).finally(() => {
                if (success){
                  history.push('/cliente');
                }
            })
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
                    notification.warning({
                        message: 'CEP Inválido',
                        description: 'Digite um CEP válido'
                    })
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
      <DefaultPage atualPage="Cliente">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
              <h1 className="h4" style={{ marginTop: 2, paddingBottom: 3 }}>
                  {!id  ? 'Cadastro de' : 'Editar'} Cliente
              </h1>
          </div>
            <form action="/cliente" className="p-2">
              <div className="row g-3">
                  <div className="col-sm-6">
                      <label htmlFor="name" className="form-label">
                          Nome Completo
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Insira o nome completo"
                        value={clientData.name}
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
                        value={clientData.mail}
                        className="form-control"
                        placeholder="Insira e-mail"
                        onChange={(e) => onChange('mail', e.target.value)}
                        required
                      />
                  </div>

                  <div className="col-sm-3">
                      <label htmlFor="cpf" className="form-label">
                          CPF
                      </label>
                      <input
                        type="text"
                        value={clientData.cpf}
                        className="form-control"
                        placeholder="Insira o CPF"
                        maxLength="11"
                        onChange={(e) => onChange('cpf', e.target.value)}
                        required
                      />
                  </div>

                  <div className="col-sm-3">
                      <label htmlFor="bloodtype" className="form-label">
                          Tipo Sanguíneo
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => onChange('bloodtype', e.target.value)}
                      >
                        <option defaultValue>{id ? clientData.bloodtype : 'Escolha o tipo'}</option>
                        {listBloodType}
                      </select>
                  </div>

                  <div className="col-sm-3">
                      <label htmlFor="phone" className="form-label">
                          Telefone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Insira o telefone"
                        value={clientData.phone}
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
                        value={clientData.cellphone}
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
                        value={clientData.address.cep}
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
                        value={clientData.address.street}
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
                        value={clientData.address.number}
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
                        value={clientData.address.complement}
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
                        value={clientData.address.neighborhood}
                        onChange={(e) => onChange('address', e.target.value, 'neighborhood')}
                        disabled={!neighborhoodEmpty}
                        placeholder={!streetEmpty ? '' : 'Insira o bairro'}
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
                        value={clientData.address.locality}
                        onChange={(e) => onChange('address', e.target.value, 'locality')}
                        disabled />
                  </div>

                  <div className="col-sm-1">
                      <label htmlFor="state" className="form-label">
                          UF
                      </label>
                      <input type="text" className="form-control"
                             value={clientData.address.state}
                             onChange={(e) => onChange('address', e.target.value, 'state')}
                             disabled
                      />
                  </div>
              </div>
              <hr style={{ marginTop: 40, marginBottom: 30 }} />
            <button className="register-global btn btn-primary w-100" onClick={saveClient}>
                {!id ? 'Cadastrar' : 'Editar'} Cliente
            </button>
            </form>
      </DefaultPage>
    );
}

export default RegisterEditClient;