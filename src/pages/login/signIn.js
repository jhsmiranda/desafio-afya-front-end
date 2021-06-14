import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import Fundo from '../../assets/images/fundo2.jpg'

import { BodyLogin, FilterImage, ContainerLogin, ContainerContent, ListLogin, Forget, Brand } from '../../styles/styleLogin'
import '../../assets/dist/css/bootstrap.min.css'


function Login() {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  })

  const handleFormDataLogin = (e) => {
    setFormData({ ...formData, login: e.target.value })
  }
  const handleFormDataPassword = (e) => {
    setFormData({ ...formData, password: e.target.value })
  }

  useEffect(() => {
    document.title = "Clínica Pomarola | Login"
  }, []);

  let history = useHistory();

  const handleLogin = async (e) => {
      e.preventDefault();
    // Faz requisição à API
    axios.post('https://clinica-pomarola-api.herokuapp.com/login', formData).then((res) => {
      // Se bem sucedida, retorna os dados inseridos no res.data e faz o push
      console.log(res.data);
      localStorage.setItem('Authorization', `Bearer ${res.data.token}`)
      history.push('/cliente')
    }).catch((err) => {
      // Retorna array de erros, abaixo acessa o primeiro
      // console.log(err.response.data[0].msg);
      console.log('', err);
    })
  };

  return (
    <BodyLogin>
      <FilterImage/>
      <img src={Fundo} alt="fundo do página"/>
      <ContainerLogin>
        <ContainerContent>
          <ul>
            <Link to="/">
              <ListLogin active>LOGIN</ListLogin>
            </Link>
            <Link to="/cadastro">
              <ListLogin>CADASTRAR</ListLogin>
            </Link>
          </ul>
          <form>
            <input type="text" value={formData.login} onChange={handleFormDataLogin} maxLength="20" placeholder="Nome de usuário"></input>
            <input type="password" value={formData.password} onChange={handleFormDataPassword} placeholder="Senha"></input>
          </form>
          <Forget>
            <a href="/">ESQUECI MINHA SENHA</a>
            <a href="/">ESQUECI MEU NOME DE USUÁRIO</a>
          </Forget>
          <button onClick={handleLogin}>ENTRAR</button>
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

export default Login;