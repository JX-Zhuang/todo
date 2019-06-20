import React from 'react';
import {  Redirect } from "react-router-dom";
function AuthRoute({auth,children}) {
    return (
        auth?children:<Redirect to='/login'/>
        // <Route component={props => auth?:children}  />
    );
}

export default AuthRoute;
