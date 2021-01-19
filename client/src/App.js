import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/accueil/Accueil";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Main from "./pages/Main";
import DashBoard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Route path="/register" exact render={(props) => <Register />} />
      <Route path="/login" exact render={(props) => <Login />} />
      <Route path="/Main" exact render={(props) => <Main />} />
      <Route path="/" exact render={(props) => <Accueil />} />
      <Route path="/dashboard" exact render={(props) => <DashBoard />} />
    </Router>
  );
}

export default App;