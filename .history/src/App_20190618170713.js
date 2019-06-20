import React from 'react';
import AppBar from './components/AppBar';
import List from './components/List';
import Detail from './components/Detail';
import Grid from '@material-ui/core/Grid';
import Login from './pages/Login';
import Register from './pages/Register';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
// import store from './store';
import user from './service/user';
import AuthRoute from './components/AuthRoute';
const list = Array.from(new Array(10)).map((item, index) => ({
  id: index + '',
  value: `item ${index}`
}));

function App() {
  user();
  return (
    <Grid container direction='column'>
      <AppBar title='Todo' />
      <Router>
        <AuthRoute>
          <Switch>
            <Route path="/list" component={props => <List {...props} list={list} />} />
            <Route path="/detail" component={Detail} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Redirect to='/list' />
          </Switch>
        </AuthRoute>
      </Router>
    </Grid>
  );
}

export default App;
