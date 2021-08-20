import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./containers/App";
import client from "./utils/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import "./babel.config";

/* const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID; */

ReactDOM.render(
  
  <Auth0Provider
    domain="dev-8sptt3mc.eu.auth0.com"
    clientId="nFGyDsZCJyQgRkXqd8cgWr1HgDP9pLHW"
    redirectUri={window.location.origin}
  >
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);