import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard'
import { Header } from './components/Header'
import { history } from './helpers/history'
import { Login } from './components/User/Login'
import { Signup } from './components/User/Signup'
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/view-student" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
