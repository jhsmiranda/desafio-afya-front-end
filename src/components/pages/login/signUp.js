import React, { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import '../../styles/login.css'
import Fundo from '../../images/fundo2.png'
import '../../assets/dist/css/bootstrap.min.css'

function Register() {

  useEffect(() => {
    document.title = "Pomarola | Cadastro"
  }, []);

  let history = useHistory();

  const handleLogin = () => {
    history.push("/");
  }

  return (
      <div className="body-login">
        <div className="filter-image"></div>
        <img className="background-image" src={Fundo} alt="fundo do página"/>
        <div className="container">

          <div className="signup-form row flex-wrap-reverse mb-2">

            <div className="col-md-6">
              <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column">

                  <div>
                    <ul className="menu">
                      {/* <li><a className="inactive" href="/">LOGIN</a></li>
                      <li><a className="active" href="/cadastro">CADASTRO</a></li> */}
                        <Link to="/">
                          <li className="inactive">
                            LOGIN
                          </li>
                        </Link>
                        <Link to="/cadastro">
                          <li className="active">
                            CADASTRAR
                          </li>
                        </Link>
                    </ul>
                    <form className="input-register">
                      <input type="text" className="name" placeholder="Nome Completo"></input>
                      <input type="text" className="login" placeholder="Nome de usuário"></input>
                      <input type="password" className="password" placeholder="Senha"></input>
                    </form>
                    <button className="button-register" onClick={handleLogin}>CADASTRAR</button>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                   
                    <div className="brand">
                      <p className="clinica-pomarola">Clínica Pomarola</p>
                      <p className="cuidando-de-sua-saude">Cuidando de sua saúde,</p>
                      <p className="onde-voce-estiver">onde você estiver.</p>
                    </div>

                  </div>
                </div>
            </div>

          </div>

        </div>
      </div>
  );
}

export default Register;