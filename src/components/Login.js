import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router';
import Aside from './Aside.js';
import Header from './Header.js';
import './../CSS/App.css';


export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={isLogin: false};
    this.loginClick = this.loginClick.bind(this);
  }
  loginClick(event){
    event.preventDefault();
    console.log(event.target["username"].value);
    console.log(event.target["password"].value);
    this.props.history.push('/search');
  }

  render () {
    return (
      <Fragment>
       <Header />
        <main>
          <h1>Welcome: Operation Breach</h1>
          <p>Description of our services</p>
          <form onSubmit={this.loginClick}>
            <label for="username">Username: </label>
            <input name="username" type="text" placeholder="Username Here"></input>
            <label for="password">Password</label>
            <input name="password" type="password" placeholder="Password"></input>
            <button type="submit" value="submit">Log In</button>
          </form>
          <Aside />
        </main>
        <footer>This is our footer</footer>
      </Fragment>
    );
  }
}

