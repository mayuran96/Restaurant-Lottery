'use strict';


import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";




class Landing extends Component {
    constructor(props) {
    	super(props)
    }

    render() {
        //template from https://bootsnipp.com/snippets/featured/ipad-calendar-login
        return (<div className="jumbotron">
        			Restaurant Lottery
         		</div>);
    }
}

export default withRouter(Landing);