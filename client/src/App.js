import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/about" component={About}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
