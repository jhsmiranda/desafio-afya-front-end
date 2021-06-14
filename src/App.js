import React from 'react';
import SignIn from './pages/login/signIn'
import SignUp from './pages/login/signUp'
import Client from './pages/client/client'
import RegisterEditClient from './pages/client/registerEdit-client'
import Specialist from './pages/specialist/specialist'
import RegisterEditSpecialist from './pages/specialist/registerEdit-specialist'
import Attendance from './pages/attendance/attendance';
import RegisterAttendance from './pages/attendance/register-attendance';
import MedicalRecord from './pages/medicalRecord/medicalRecord';
import MedicalRecordHistoric from './pages/medicalRecord/medicalHistoric';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
                    component={RegisterEditClient}
                />
                <Route
                    exact
                    path="/editar-cliente/:id"
                    component={RegisterEditClient}
                />
                <Route
                    exact
                    path="/especialista"
                    component={Specialist}
                />
                <Route
                    exact
                    path="/cadastro-especialista"
                    component={RegisterEditSpecialist}
                />
                <Route
                    exact
                    path="/editar-especialista/:id"
                    component={RegisterEditSpecialist}
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
                <Route
                    exact
                    path="/prontuario"
                    component={MedicalRecord}
                />    
                <Route
                    exact
                    path="/historico-prontuario"
                    component={MedicalRecordHistoric}
                />                
            </Switch>
        </Router>
    );
}

export default App;