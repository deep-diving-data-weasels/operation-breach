import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import {withRouter} from 'react-router-dom';
// import Component
import Aside from './Aside.js';

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

   //for local testing
    const url = "http://localhost:3000/apiPwnd";
    // const url = 'https://operation-breach.herokuapp.com/apiPwnd';

    superagent.get(url)
      .query({data: email})
      .then(res => {
        dataPwnd = res.body;
      console.log(dataPwnd);
      this.props.callback({pwndResult: dataPwnd});
      
    });

  } // searchPwnd end

  async searchSocial(email) {

   //for local testing
    const url = "http://localhost:3000/apiSocial";
    // const url = 'https://operation-breach.herokuapp.com/apiSocial';    
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
    //Stretch: Button effect or loading bar.
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
        <main>
          <h1>Welcome: Operation Breach</h1>
          <p>By entering in your email we can check for data breaches that the email was involved in and what type of data was at risk. (Results may take a few moments to process.)</p>
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
          <h3>Our Promise</h3>
          <p>We will not willingly share or distribute any data entered in the site.</p>

          <Aside />
        </main>
      </Fragment>
    );
  } // render End
}) // Search class end

