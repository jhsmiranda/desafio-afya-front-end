import React from 'react';
import SignIn from './components/pages/signin/signIn'
import SignUp from './components/pages/signup/signUp'
import Home from './components/pages/home/home'
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
                    path="/home"
                    component={Home}
                />
            </Switch>
        </Router>
  );
}

export default src;