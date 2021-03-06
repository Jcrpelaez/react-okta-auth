import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Parent from "./components/pages/Parent";
import Login from "./components/auth/Login";

import "./App.css";

function onAuthRequired({ history }) {
  history.push("/login");
}

function App() {
  return (
    <Router>
      <Security
        issuer="https://dev-694554.okta.com/oauth2/default"
        clientId="0oa2lhyd99BR4KYDo4x6"
        redirectUri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
      >
        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/parents" exact={true} component={Parent} />
            <Route
              path="/login"
              render={() => (
                <Login baseUrl="https://dev-694554.okta.com/oauth2/default" />
              )}
            />
            <Route path="/implicit/callback" component={ImplicitCallback} />
          </div>
        </div>
      </Security>
    </Router>
  );
}

export default App;
