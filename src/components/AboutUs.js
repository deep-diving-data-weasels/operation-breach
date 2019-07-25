// React
import React, { Component, Fragment } from 'react';
// Components
import Header from './Header.js';
import Aside from './Aside.js';
import Footer from './Footer.js';

export default class AboutUs extends Component {
 
  render () {
    return (
      <Fragment>
        <main>
          <div>
            <div>
              {/* <img></img> */}
              <h3>Jack Daniel Kinne</h3>
              <p>description</p>
            </div>

            <div>
              {/* <img></img> */}
              <h3>Chris Coulon</h3>
              <p>description</p>
            </div>

            <div>
              {/* <img></img> */}
              <h3>Kevin Couture</h3>
              <p>description</p>
            </div>

            <div>
              {/* <img></img> */}
              <h3>Promila Tamang</h3>
              <p>description</p>
            </div>
          </div>
    

          <Aside />
        </main>
      </Fragment>
    );
  }
}

