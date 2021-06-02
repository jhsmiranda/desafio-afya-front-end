import React, { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

import Fundo from '../../images/fundo2.png'

import { BodyLogin, FilterImage, ContainerLogin, ContainerContent, ListLogin, Brand } from '../../styles/styles'

function Register() {

  useEffect(() => {
    document.title = "Pomarola | Cadastro"
  }, []);

  let history = useHistory();

  const handleLogin = () => {
    history.push("/");
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
              <input type="text" placeholder="Nome Completo"></input>
              <input type="text" placeholder="Nome de usuário"></input>
              <input type="password" placeholder="Senha"></input>
            </form>
            <button onClick={handleLogin} style={{ marginTop: 30 }}>CADASTRAR</button>
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