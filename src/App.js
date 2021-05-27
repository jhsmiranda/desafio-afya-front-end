import React from 'react';
import SignIn from './components/pages/login/signIn'
import SignUp from './components/pages/login/signUp'
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
            </Switch>
        </Router>
  );
}

export default src;