import React from 'react';
import AppBar from './components/AppBar';
import List from './components/List';
import Detail from './components/Detail';
import Grid from '@material-ui/core/Grid';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Grid container direction='column'>
        <Route path="/" component={AppBar} />
        <Route path="/list" component={List} />
        <Route path="/detail" component={Detail} />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Grid>
    </Router>
  );
}

export default App;
