import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Main from "./components/Main/Main"
import Intro from "./components/Intro/Intro"
import Projects from "./components/Projects/Projects"
import Typewriter from './components/typewriter/Typewriter';
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <Intro />
      <Projects />
      <Typewriter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
