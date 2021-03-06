import React from 'react';
import AppBar from './components/AppBar';
import List from './pages/List';
import Detail from './pages/Detail';
import Grid from '@material-ui/core/Grid';
import Login from './pages/Login';
import Register from './pages/Register';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import getUser from './service/user';
import AuthRoute from './components/AuthRoute';
import { getUserSuccess } from './store/user'
import LinearProgress from '@material-ui/core/LinearProgress';
import FetchApi from './components/FetchApi';
function App({ getUserSuccess, user }) {
  const [showLoading, setLoading] = React.useState(true);
  const onOk = result => getUserSuccess({ username: result.data.username });
  return (
    <Grid container direction='column'>
      <AppBar title='Todo' login={Boolean(user.username)} username={user.username} />
      <FetchApi onOk={onOk} fetchApi={getUser}>
        <Router>
          <Switch>
            <Route path='/login' render={props => <Login {...props} user={user.username} />} />
            <AuthRoute auth={user.username}>
              <Switch>
                <Route path="/list" render={props => <List {...props} />} />
                <Route path="/detail" render={props => <Detail {...props} />} />
                <Route path="/detail/:id" render={props => <Detail {...props} />} />
                <Route path='/register' component={Register} />
                <Redirect to='/list' />
              </Switch>
            </AuthRoute>
          </Switch>
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
