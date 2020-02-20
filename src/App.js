import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Main from "./components/Main/Main"
import Intro from "./components/Intro/Intro"


function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <Intro />
    </div>
  );
}

export default App;
