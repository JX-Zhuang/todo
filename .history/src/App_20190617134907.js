import React from 'react';
import AppBar from './components/AppBar';
import List from './components/List';
import Detail from './components/Detail';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Grid container direction='column'>
        <Route path="/" component={AppBar} />
        <Route path="/list" component={List} />
        <Route path="/details/:id" component={Detail} />
      </Grid>
    </Router>
  );
}

export default App;
