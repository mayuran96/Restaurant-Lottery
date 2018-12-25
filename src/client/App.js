"use strict";

import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (<BrowserRouter>
    			<div>
      				<h1>Hello World</h1>
      			</div>
      		</BrowserRouter>);
  }
}

render(<App />, document.getElementById("mainDiv"));