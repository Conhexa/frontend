import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Login from "../../components/Login";


const PrivateRoute = ({component, ...args}) => (
    <Route 
        component={withAuthenticationRequired(component,{
            onRedirecting: ()=> <Login />,
        })}
        {...args}
    />
);

export default PrivateRoute;