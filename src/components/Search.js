import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import {withRouter} from 'react-router-dom';
// import Component
import Header from './Header.js';
import Aside from './Aside.js';
// import style
import './../CSS/App.css';

let dataPwnd;
let dataSocial;

// Search class
export default  withRouter( class Search extends Component {
 
  constructor(props){
    super(props);
    this.searchPwnd = this.searchPwnd.bind(this);
    this.searchSocial = this.searchSocial.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
    // this.searchPassword = this.searchPassword.bind(this);
  } // constructor end

  async searchPwnd(email) {
   const url = 'https://operation-breach.herokuapp.com/apiPwnd';
    superagent.get(url)
      .query({data: email})
      .then(res => {
        dataPwnd = res.body;
      console.log(dataPwnd);
      this.props.callback({pwndResult: dataPwnd});
      
    });

  } // searchPwnd end

  async searchSocial(email) {
    const url = 'https://operation-breach.herokuapp.com/apiSocial';
    superagent.get(url)
      .query({data: email})
      .then(res => {
        dataSocial = res.body;
      console.log(dataSocial);
      this.props.callback({socialResult: dataSocial});
      // this line must be call on the last API route 
      this.props.history.push("/results");
    });

  } // searchSocial end

  async submitHandle(event){
    event.preventDefault();
    let email = event.target["email"].value;
    await this.searchPwnd(email);
    await this.searchSocial(email);
    
  }

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
          <form onSubmit = {this.submitHandle}>
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

