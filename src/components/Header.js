import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

export default class header extends Component {

  render(){
    return(    
      <Fragment>
        <header>
          <ul>
            <Link to="/">Home</Link><br/>
            <Link to="/aboutus">AboutUs</Link><br/>
            <Link to="/">Sign Out</Link><br/>
          </ul>
        </header>
      </Fragment>   
    )}
}