import React, { Component } from 'react';
import LandingPage from './pages/Landing';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Auth } from './Auth';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {Auth.isAuthenticated ? (
            <p> hello </p>
          ) : (
            <Route path="/" exact component={LandingPage}>
            </Route>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
