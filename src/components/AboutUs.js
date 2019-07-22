import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Aside from './Aside.js';
import './../CSS/App.css';


export default class AboutUs extends Component {
 
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
          <div>
            <div>
              {/* <img></img> */}
              <h3>Name</h3>
              <p>description</p>
            </div>

            <div>
              {/* <img></img> */}
              <h3>Name</h3>
              <p>description</p>
            </div>

            <div>
              {/* <img></img> */}
              <h3>Name</h3>
              <p>description</p>
            </div>

            <div>
              {/* <img></img> */}
              <h3>Name</h3>
              <p>description</p>
            </div>
          </div>
    

          <Aside />
        </main>
        <footer>This is our footer</footer>
      </Fragment>
    );
  }
}

