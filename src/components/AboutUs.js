// React
import React, { Component, Fragment } from 'react';
// Components
import Aside from './Aside.js';

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
              <a href="url">GitHub</a>
              <a href="url">linkedIn</a>
            </div>

            <div>
              {/* <img></img> */}
              <h3>Chris Coulon</h3>
              <p>description</p>
              <a href="url">GitHub</a>
              <a href="url">linkedIn</a>
            </div>

            <div>
              {/* <img></img> */}
              <h3>Kevin Couture</h3>
              <p>description</p>
              <a href="url">GitHub</a>
              <a href="url">linkedIn</a>
            </div>

            <div>
              {/* <img></img> */}
              <h3>Promila Tamang</h3>
              <p>description</p>
              <a href="url">GitHub</a>
              <a href="url">linkedIn</a>
            </div>
          </div>
    

          <Aside />
        </main>
      </Fragment>
    );
  }
}

