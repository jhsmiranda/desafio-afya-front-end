import React, { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

import Fundo from '../../assets/images/fundo2.jpg'

import { BodyLogin, FilterImage, ContainerLogin, ContainerContent, ListLogin, Forget, Brand } from '../../styles/styleLogin'
import '../../assets/dist/css/bootstrap.min.css'


function Login() {

  useEffect(() => {
    document.title = "Clínica Pomarola | Login"
  }, []);

  let history = useHistory();

  const handleLogin = () => {
    history.push("/cliente");
  }

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
              <input type="text" placeholder="Nome de usuário"></input>
              <input type="password" placeholder="Senha"></input>
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