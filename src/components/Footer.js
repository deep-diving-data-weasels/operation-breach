import React, { Component, Fragment } from 'react';

export default class Footer extends Component {

  setData(data) {
    this.setState(data);
  }
 
  render () {
    console.log(this.state);
    return (
      <Fragment>
        <footer>This is our footer.</footer>
      </Fragment>
    );
  }
}