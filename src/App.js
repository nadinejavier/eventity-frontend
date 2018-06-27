import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import SignUp from './components/SignUpPage/SignUpForm';
import UsersIndex from './components/UsersIndex';
import EventsIndex from '/components/Event'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/users" component={UsersIndex} />
            <Route path="/events" component={UsersIndex} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
