import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import EventListing from "./components/EventListing";
import EventDetail from "./components/EventDetail";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={EventListing} />
            <Route exact path="/:activityId" component={EventDetail} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
