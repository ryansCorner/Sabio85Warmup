import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import NavBar from './components/navigation/NavBar'
import { withRouter } from "react-router-dom"
import Layout from './components/templates/Layout'
import * as loginService from './services/loginService'

function App() {


  return (
    <div className="App">
      <Layout />
      {/* <Home /> */}
    </div>
  );
}

export default withRouter(App);
