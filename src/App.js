import React from 'react';
import SignIn from './components/pages/login/signIn'
import SignUp from './components/pages/login/signUp'
import Client from './components/pages/client/client'
import RegisterClient from './components/pages/client/register-client'
import Specialist from './components/pages/specialist/specialist'
import RegisterSpecialist from './components/pages/specialist/register-specialist'
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
                    path="/cliente"
                    component={Client}
                />
                <Route
                    exact
                    path="/cadastro-cliente"
                    component={RegisterClient}
                />
                <Route
                    exact
                    path="/especialista"
                    component={Specialist}
                />
                <Route
                    exact
                    path="/cadastro-especialista"
                    component={RegisterSpecialist}
                />
            </Switch>
        </Router>
    );
}

export default src;