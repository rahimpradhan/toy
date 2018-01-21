import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navigation from './components/Navigation.js';
import Container from './components/Container.js';
import Form from './components/Form.js';
import Send from './components/Send.js';
import Home from './components/Home.js';
import About from './components/About.js';
import FAQ from './components/Faq.js';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/send" component={Send} />
      <Route exact path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
    </div>
  </Router>;

export default App;
