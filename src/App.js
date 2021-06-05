import React from 'react';
import SignIn from './pages/login/signIn'
import SignUp from './pages/login/signUp'
import Client from './pages/client/client'
import RegisterClient from './pages/client/register-client'
import Specialist from './pages/specialist/specialist'
import RegisterSpecialist from './pages/specialist/register-specialist'
import Attendance from './pages/attendance/attendance';
import RegisterAttendance from './pages/attendance/register-attendance';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';;

// import { Container } from './styles';

function App() {

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
                <Route
                    exact
                    path="/atendimento"
                    component={Attendance}
                />
                <Route
                    exact
                    path="/cadastro-atendimento"
                    component={RegisterAttendance}
                />                 
            </Switch>
        </Router>
    );
}

export default App;