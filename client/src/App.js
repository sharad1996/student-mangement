import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard'
import { Header } from './components/Header'
import history from './helpers/history'
import { Login } from './components/User/Login'
import { Signup } from './components/User/Signup'
import { PrivateRoute } from './components/PrivateRoute'
import { setToken } from './redux/user/actions'

function App() {
  const dispatch = useDispatch()
  const usersData = useSelector(state => state.userReducer)

  useEffect(() => {
    if (!usersData.token) {
      const token = sessionStorage.getItem('token')
      dispatch(setToken(token))
    }
  }, [usersData.token])

  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/view-student" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
