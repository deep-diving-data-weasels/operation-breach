import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router';
import superagent from 'superagent';

// import Components
import Aside from './Aside.js';


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

    //for local testing
    // const backEndURL = 'http://localhost:3000/pg';
    const url = 'https://operation-breach.herokuapp.com/pg';

    superagent.get(url)
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
        <main>
          <h1>Welcome: Operation Breach</h1>
          <p>This site will utilize mutliple APIs that check if your data has been put at risk.</p>
          <form onSubmit={this.loginClick}>
            <label for="username" >Username: </label>
            <input name="username" id="username" type="text" placeholder="Username Here"></input>
            <label for="password">Password</label>
            <input name="password" id="password" type="password" placeholder="Password"></input>
            <button type="submit" value="submit">Log In</button>
          </form>
          <Aside />
        </main>
      </Fragment>
    );
  }// render end
} // Login end

