import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import Fundo from '../../assets/images/fundo1.png'

import { BodyLogin, FilterImage, ContainerLogin, ContainerContent, ListLogin, Brand } from '../../styles/styleLogin'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    login: '',
    password: '',
  })

  const handleFormDataName = (e) => {
    setFormData({ ...formData, name: e.target.value })
  }
  const handleFormDataLogin = (e) => {
    setFormData({ ...formData, login: e.target.value })
  }
  const handleFormDataPassword = (e) => {
    setFormData({ ...formData, password: e.target.value })
  }

  useEffect(() => {
    document.title = "Pomarola | Cadastro"
  }, []);

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Faz requisição a API
    axios.post('https://clinica-pomarola-api.herokuapp.com/users', formData).then((res) => {
      // Se bem sucedida, retorna os dados inseridos no res.data e faz o push
      console.log(res.data);
      history.push('/');
  }).catch((err) => {
   // Retorna array de erros, abaixo acessa o primeiro
    console.log(err.response.data[0].msg);
  })
}
  return (
    <BodyLogin>
      <FilterImage/>
      <img src={Fundo} alt="fundo do página"/>
      <ContainerLogin>
        <ContainerContent>
          <ul>
            <Link to="/">
              <ListLogin>LOGIN</ListLogin>
            </Link>
            <Link to="/cadastro">
              <ListLogin active>CADASTRAR</ListLogin>
            </Link>
          </ul>
          <form>
            <input type="text" value={formData.name} onChange={handleFormDataName} placeholder="Nome Completo" />
            <input type="text" value={formData.login} onChange={handleFormDataLogin} maxLength="20" placeholder="Nome de usuário" />
            <input type="password" value={formData.password} onChange={handleFormDataPassword} placeholder="Senha" />
          </form>
          <button onClick={handleSubmit} style={{ marginTop: 30 }}>CADASTRAR</button>
        </ContainerContent>
        <ContainerContent>
          <Brand>
            <h1>Clínica Pomarola</h1>
            <p>Cuidando de sua saúde,</p>
            <p>onde você estiver.</p>
          </Brand>
        </ContainerContent>
      </ContainerLogin>
    </BodyLogin>
  );
}

export default Register;