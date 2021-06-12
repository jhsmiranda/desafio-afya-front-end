import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/globalstyles.css';
import DefaultPage from '../../components/defaultpage/defaultPage';
import { Clients } from '../../data';

const initialValue = {
    id: '',
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
    useEffect(() => {
        document.title = 'Clínica Pomarola | Cliente';
    }, []);

    const { id } = useParams();

    const listBloodType = ['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(
        (bloodtype, index) => {
            return(
                <option value={index}>{bloodtype}</option>
            )
        }
    )

    const [clientData, setClientData] = useState(!id ? initialValue : Clients[id - 1]);
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

    const saveClient = () => {
        console.log(clientData)
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

    useEffect(() => {
        console.log('clientData', clientData)
    }, [clientData]);

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
                        <option defaultValue>{id ? Clients[id - 1].bloodtype : 'Escolha o tipo'}</option>
                        {listBloodType}
                      </select>
                  </div>

                  <div className="col-sm-3">
                      <label htmlFor="phone" className="form-label">
                          Telefone<span className="text-muted"> (Opcional)</span>
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