import React, { Profiler } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap"
import { library } from "@fortawesome/fontawesome-svg-core";


import Homepage from "./View/Homepage";
import LoginPage from "./View/Login"
import CandidatesPage from "./View/CandidatesPage";
import CurrentCandidate from "./View/CurrentCandidate";
import NotFound from "./View/NotFound";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/FooterComponent"
import Profile from "./View/Profile"

function App() {
  return (
    <Container fluid="true">
      <Navbar />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/home" exact component={Homepage} />
        <Route path="/candidates" exact component={CandidatesPage} />
        <Route path="/candidates/:id" exact component={CurrentCandidate} />
        <Route path="*" component={NotFound} />
      </Switch>
      <FooterComponent/> 
    </Container>
  );
}

export default App;
