import React, { Component, Fragment } from 'react';
import {BrowserRouter} from "react-router-dom";

import LandingPage from './components/LandingPage.js';
import Aside from './components/Aside.js';

import './CSS/App.css';


class App extends Component {
 constructor(props){
   super(props);
   this.state ={
     page: 0,
     username: ''
   }
 }
  render () {
    return (
      <BrowserRouter> 
        <LandingPage />
      </BrowserRouter>
    );
  }
}

export default App;
