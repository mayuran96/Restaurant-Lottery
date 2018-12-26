"use strict";

import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Landing from './components/Landing.js'

class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (<BrowserRouter>
               <Route exact path="/" render={props => <Landing/>} />
            </BrowserRouter>);
  }
}
render(<App />, document.getElementById("mainDiv"));