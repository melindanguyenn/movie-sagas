import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home';
import Details from '../Details/details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Movies</h1>
          <Route exact path='/' component={Home} />
          <Route exact path='/Details' component={Details} />
          <Route exact path='/Edit' component={Edit}/>
      </div>
    </Router>  
    );
  }
}

export default App;
