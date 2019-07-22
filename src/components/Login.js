import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Aside from './Aside.js';
import './../CSS/App.css';


export default class Login extends Component {
 
  render () {
    return (
      <Fragment>
        <header>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/aboutus">AboutUs</Link>
            <button>Sign Out</button>
          </ul>
        </header>
        <main>
          <h1>Welcome: Operation Breach</h1>
          <p>Description of our services</p>
          <form>
            <label for="username">Username: </label>
            <input name="username" type="text" placeholder="Username Here"></input>
            <label for="password">Password</label>
            <input name="password" type="password" placeholder="Password"></input>
            {/* <input type="submit" value="submit">Log In</input> */}
          </form>
          <Aside />
        </main>
        <footer>This is our footer</footer>
      </Fragment>
    );
  }
}

