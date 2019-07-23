import React, { Component, Fragment } from 'react';
import { Route } from "react-router-dom";


import './../CSS/App.css';
import AboutUs from './AboutUs.js';
import Login from './Login.js';
import Search from './Search.js';
import Results from './Results.js';


export default class LandingPage extends Component {
 
  render () {
    return (
      <Fragment>
        <Route exact path="/" component={Login} />
        <Route exact path="/search" component={Search} />
        <Route exact path='/results' component={Results} />
        <Route exact path="/aboutus" component={AboutUs} />
      </Fragment>
    );
  }
}

