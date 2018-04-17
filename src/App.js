import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignUp} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
