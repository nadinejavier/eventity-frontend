import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import HomePage from './components/HomePage';
import SignUp from './components/SignUpPage/SignUpForm';
import UsersIndex from './components/UsersIndex';
import EventsIndex from './components/EventIndex'
import reducers from './reducers';
// import ReactDOM from 'react-dom';
// import './App.css';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
              <div>
                <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route path="/signup" component={SignUp} />
                      <Route path="/users" component={UsersIndex} />
                      <Route path="/events" component={EventsIndex} />
                </Switch>
              </div>
            </BrowserRouter>
          </Provider>
      </div>
    );
  }
}

export default App;

