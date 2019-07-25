import React, { Component, Fragment } from 'react';
import { Route } from "react-router-dom";

import AboutUs from './AboutUs.js';
import Login from './Login.js';
import Search from './Search.js';
import Results from './Results.js';
import Header from './Header.js';
import Footer from './Footer.js';


export default class LandingPage extends Component {
  constructor(props){
   super(props);
   this.setData = this.setData.bind(this); 
   this.state = {};
  }

  setData(data) {
    this.setState(data);
  }
 
  render () {
    console.log(this.state);
    return (
      <Fragment>
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/search" component={() => < Search callback={this.setData} />} />
        <Route path='/results' component={() => < Results apiPwnd={this.state.pwndResult} apiSocial={this.state.socialResult}/>} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Footer />
      </Fragment>
    );
  }
}

