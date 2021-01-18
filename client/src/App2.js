import React from "react";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from './pages/404/404';

function App2() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" exact render={(props) => <Register />} />
        <Route exact path="/login" exact render={(props) => <Login />} />
        <Route exact path="/Main" exact render={(props) => <Main />} />
        <Route exact path="/" exact render={(props) => <Accueil />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App2;