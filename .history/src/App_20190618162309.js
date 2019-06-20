import React from 'react';
import AppBar from './components/AppBar';
import List from './components/List';
import Detail from './components/Detail';
import Grid from '@material-ui/core/Grid';
import Login from './pages/Login';
import Register from './pages/Register';
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
const list = Array.from(new Array(10)).map((item,index)=>({
  id:index+'',
  value:`item ${index}`
}));

function App() {
  
  return (
    <Router>
      <Grid container direction='column'>
        <Route path="/" component={()=><AppBar title='Todo'/>} />
        <Route path="/list" component={props=><List {...props} list={list}/>} />
        <Route path="/detail" component={Detail} />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Grid>
    </Router>
  );
}

export default App;
