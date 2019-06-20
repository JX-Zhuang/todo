import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
function AuthRoute({auth,children}) {
    return (
        <Route component={props => auth?<Redirect to='/login'/>:children}  />
    );
}

export default AuthRoute;
