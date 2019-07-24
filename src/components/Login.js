import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router';
import superagent from 'superagent';

// import Components
import Aside from './Aside.js';
import Header from './Header.js';
import Footer from './Footer.js';

// import style 


//Error Handler
function handleError (err, res) {
  console.error(err);
  if (res) res.status(500).send('Not authorized for access');
}

// Login class 
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={isLogin: false};
    this.loginClick = this.loginClick.bind(this);
  } // constructor end
  
  loginClick(event){
   //TODO: backURL - Deploy
    event.preventDefault();
    console.log(event.target['username'].value);
    console.log(event.target['password'].value);
    const url = 'https://operation-breach.herokuapp.com';
    const route = url + '/pg';

    superagent.get(route)
      .query({username: event.target['username'].value, password:event.target['password'].value})
      .then(res => {
      //TODO: check flag, if correct, move to search.
      this.props.history.push("/search");
      //TODO: if it's not correct, prompt and do nothing.
      }).catch(e=>console.error(e));
  } // loginClick end
  
  /*
    

  */

  render () {
    return (
      <Fragment>
       <Header />
        <main>
          <h1>Welcome: Operation Breach</h1>
          <p>Description of our services</p>
          <form onSubmit={this.loginClick}>
            <label for="username" >Username: </label>
            <input name="username" id="username" type="text" placeholder="Username Here"></input>
            <label for="password">Password</label>
            <input name="password" id="password" type="password" placeholder="Password"></input>
            <button type="submit" value="submit">Log In</button>
          </form>
          <Aside />
        </main>
        <Footer />
      </Fragment>
    );
  }// render end
} // Login end

