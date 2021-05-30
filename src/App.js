import React from 'react';
import SignIn from './components/pages/login/signIn'
import SignUp from './components/pages/login/signUp'
import RegisterClients from './components/pages/register-clients/register-clients'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { Container } from './styles';

function src() {
  return (
    <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={SignIn}
                />
                <Route
                    exact
                    path="/cadastro"
                    component={SignUp}
                />
                <Route
                    exact
                    path="/registro-clientes"
                    component={RegisterClients}
                />
            </Switch>
        </Router>
  );
}

export default src;