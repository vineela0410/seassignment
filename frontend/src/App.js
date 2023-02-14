import React from "react";
import {  Container } from "react-bootstrap";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Addition from "./components/Addition";
function App() {
  return (
    <Router>
      <div style={{ background: "linear-gradient(to right, red , yellow)" }}>
        <Header />

        <Container style={{ paddingTop: "20px" ,height:"700px"}}>
          <Route
            exact
            path="/"
            render={() => <Profile />}
          />
          <Route
            path="/addition"
            render={() => (<Addition />)}
          />
        </Container>
      </div>
    </Router>
  );
}

export default App;
