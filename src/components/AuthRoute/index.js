import React from 'react';
import { Redirect,Route } from "react-router-dom";
function AuthRoute({ auth, children ,...rest}) {
    return <Route
        {...rest}
        render={props => auth ? children : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
            />
        )}
    />
}

export default AuthRoute;
