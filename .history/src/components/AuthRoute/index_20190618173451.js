import React from 'react';
import { Redirect,Route } from "react-router-dom";
function AuthRoute({ auth, children }) {
    return <Route
        {...rest}
        render={props => auth ? children : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
            />
        )
        }
    />
    return (
        auth ? children : <Redirect to='/login' />
        // <Route component={props => auth?:children}  />
    );
}

export default AuthRoute;
