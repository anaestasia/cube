import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/accueil/Accueil";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/Main";
require('dotenv').config()

function App() {
  return (
    <Router>
      <Route path="/register" exact render={(props) => <Register />} />
      <Route path="/login" exact render={(props) => <Login />} />
      <Route path="/Main" exact render={(props) => <Main />} />
      <Route path="/" exact render={(props) => <Accueil />} />
    </Router>
  );
}

export default App;