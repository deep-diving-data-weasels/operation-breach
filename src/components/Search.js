import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Aside from './Aside.js';
import './../CSS/App.css';



export default class Search extends Component {
 
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
          <div>
          <form>
            <label for="email">email: </label>
            <input name="email" type="text" placeholder="E-mail Address "></input>
            {/* <input type="submit" value="submit">Search</input> */}
          </form>
          <form>
            <label for="Password">Password: </label>
            <input name="Password" type="text" placeholder="Password"></input>
            {/* <input type="submit" value="submit">Search</input> */}
          </form>
          </div>
          <h3>placeholder</h3>
          <p>we don't sell any kind of Password</p>

          <Aside />
        </main>
        <footer>This is our footer</footer>
      </Fragment>
    );
  }
}

