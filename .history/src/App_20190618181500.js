import React from 'react';
import AppBar from './components/AppBar';
import List from './components/List';
import Detail from './components/Detail';
import Grid from '@material-ui/core/Grid';
import Login from './pages/Login';
import Register from './pages/Register';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import getUser from './service/user';
import AuthRoute from './components/AuthRoute';
import { getUserSuccess } from './store/user'
const list = Array.from(new Array(10)).map((item, index) => ({
  id: index + '',
  value: `item ${index}`
}));

function App({ getUserSuccess, user }) {
  async function api() {
    const result = await getUser();
    console.log(result);
    if (result.success) {
      getUserSuccess({ username: result.data.username });
    }
  }
  React.useEffect(() => {
    api();
  }, [])
  return (
    <Grid container direction='column'>
      <AppBar title='Todo' />
      <Router>
        <Switch>
          <Route path='/login' user={user} render={props=><Login {...props}/>} />
          <AuthRoute auth={user}>
            <Route path="/list"  list={list} component={props => <List {...props} />} />
            <Route path="/detail" component={Detail} />
            <Route path='/register' component={Register} />
            <Redirect to='/list' />
          </AuthRoute>
        </Switch>
      </Router>
    </Grid>
  );
}
const mapStateToProps = ({ user }) => {
  return {
    user
  }
};

const mapDispatchToProps = (dispatch) => ({
  getUserSuccess: user => dispatch(getUserSuccess(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
