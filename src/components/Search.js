import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import {withRouter} from 'react-router-dom';
// import Component
import Header from './Header.js';
import Aside from './Aside.js';
// import style
import './../CSS/App.css';

let data;

// Search class
export default  withRouter( class Search extends Component {
 
  constructor(props){
    super(props);
    this.searchEmail = this.searchEmail.bind(this);
    // this.searchPassword = this.searchPassword.bind(this);
  } // constructor end

  searchEmail(event) {
   event.preventDefault();
   console.log(event.target["email"].value);
   
    const backEndURL = "http://localhost:3000/apiPwnd";
    superagent.get(backEndURL).query({data: event.target["email"].value}).then(res => {
      data = res;
      console.log(res.body);
      this.props.callback({result: res.body});
      this.props.history.push("/results");
    });


  } // searchEmail end

  // searchPassword(event) {

  // }
 
  render () {
    return (
      <Fragment>
        <Header />
        <main>
          <h1>Welcome: Operation Breach</h1>
          <p>Description of our services</p>
          <div>
          <form onSubmit = {this.searchEmail}>
            <label for="email">email: </label>
            <input name="email" type="text" placeholder="E-mail Address "></input>
            <button type="submit" value="submit">Search</button>
          </form>
          {/* <form>
            <label for="Password">Password: </label>
            <input name="Password" type="text" placeholder="Password"></input>
            <input type="submit" value="submit">Search</input>
          </form> */}
          </div>
          <h3>placeholder</h3>
          <p>we don't sell any kind of Password</p>

          <Aside />
        </main>
        <footer>This is our footer</footer>
      </Fragment>
    );
  } // render End
}) // Search class end

