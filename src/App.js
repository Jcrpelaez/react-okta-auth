import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Parent from "./components/pages/Parent";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/" exact={true} component={Home} />
          <Route path="/parents" exact={true} component={Parent} />
        </div> 
      </div>
    </Router>
  );
}

export default App;
