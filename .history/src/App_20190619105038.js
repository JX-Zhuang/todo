import React from 'react';
import AppBar from './components/AppBar';
import List from './pages/List';
import Detail from './pages/Detail';
import Grid from '@material-ui/core/Grid';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import getUser from './service/user';
import AuthRoute from './components/AuthRoute';
import { getUserSuccess } from './store/user'
import LinearProgress from '@material-ui/core/LinearProgress';
import FetchApi from './components/FetchApi';
import { createHashHistory } from 'history';
function App({ getUserSuccess, user }) {
  const [showLoading, setLoading] = React.useState(true);
  const onOk = result => getUserSuccess({ username: result.data.username });
  return (
    <Grid container direction='column'>

      <FetchApi onOk={onOk} fetchApi={getUser}>
        <Router>
          <>
            <Route
              render={props =>
                <AppBar
                  title='Todo'
                  login={Boolean(user.username)}
                  username={user.username}
                  logout={() => props.history.push('/logout')}
                />}
            />
            <Switch>
              <Route path='/login' render={props => <Login {...props} getUserSuccess={getUserSuccess} user={user.username} />} />
              <AuthRoute auth={user.username}>
                <Switch>
                  <Route path="/list" render={props => <List {...props} />} />
                  <Route path="/detail" exact render={props => <Detail {...props} />} />
                  <Route path="/detail/:id" render={props => <Detail {...props} />} />
                  <Route path='/register' component={Register} getUserSuccess={getUserSuccess} />
                  <Route path='/logout' render={props => <Logout user={user.username} />} />
                  <Redirect to='/list' />
                </Switch>
              </AuthRoute>
            </Switch>
          </>
        </Router>
      </FetchApi>
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
