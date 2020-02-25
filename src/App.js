import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Parent from "./components/pages/Parent";

import "./App.css";

function App() {
  return (
    <Router>
      <Security
        issuer="https://dev-694554.okta.com/oauth2/default"
        clientId="0oa2lhyd99BR4KYDo4x6"
        redirectUri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
        pkce={true}
      >
        <Route path="/" exact={true} component={Home} />
        <SecureRoute path="/protected" component={Protected} />
        <Route
          path="/login"
          render={() => <Login baseUrl="https://${yourOktaDomain}" />}
        />
        <Route path="/implicit/callback" component={ImplicitCallback} />

        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/parents" exact={true} component={Parent} />
          </div>
        </div>
      </Security>
    </Router>
  );
}

export default App;
