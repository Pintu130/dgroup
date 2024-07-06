import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./common/NavBar";
import Home from "./page/Home";

const Company = () => <div>Company Page</div>;
const Marketplace = () => <div>Marketplace Page</div>;
const Features = () => <div>Features Page</div>;
const Team = () => <div>Team Page</div>;
const Contact = () => <div>Contact Page</div>;
const Login = () => <div>Login Page</div>;
const GetStarted = () => <div>Get Started Page</div>;

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" component={Company} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/features" component={Features} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/get-started" component={GetStarted} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
