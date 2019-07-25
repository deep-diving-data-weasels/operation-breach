import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import {withRouter} from 'react-router-dom';
import { Route } from "react-router-dom";
// import Component
import Header from './Header.js';
import Aside from './Aside.js';
import Footer from './Footer.js';
import Results from './Results.js';
// import style

let dataPwnd;
let dataSocial;

// Search class
export default  withRouter( class Search extends Component {
  constructor(props){
    super(props);
    this.searchPwnd = this.searchPwnd.bind(this);
    this.searchSocial = this.searchSocial.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  } // constructor end

  async searchPwnd(email) {
   //for local testing
    // const backEndURL = "http://localhost:3000/apiPwnd";
    const url = 'https://operation-breach.herokuapp.com/apiPwnd';
    superagent.get(url)
      .query({data: email})
      .then(res => {
        dataPwnd = res.body;
      console.log(dataPwnd);
      // this.props.callback({pwndResult: dataPwnd}); 
      
    });

  } // searchPwnd end
  async searchSocial(email) {
   //for local testing
    // const backEndURL = "http://localhost:3000/apiSocial";
    const url = 'https://operation-breach.herokuapp.com/apiSocial';    
    superagent.get(url)
      .query({data: email})
      .then(res => {
        dataSocial = res.body;
      console.log(dataSocial);
      // this.props.callback({socialResult: dataSocial});
      // this line must be call on the last API route 
    });
  } // searchSocial end

  async stateTrigger(){
    this.setState( {pwndResult: dataPwnd, socialResult: dataSocial});
    this.props.history.push("/search/results");
  }

  async submitHandle(event){
    event.preventDefault();
    let email = event.target["email"].value;
    await this.searchPwnd(email);
    await this.searchSocial(email);
    await this.stateTrigger();
  }
 
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
          </div>
          <h3>placeholder</h3>
          <p>we don't sell any kind of Password</p>
          {/* trial for heroku dep */}
          <Route path='/search/results' component={() => < Results apiPwnd={this.state.pwndResult|| []} apiSocial={this.state.socialResult || {'posts': []}}/>} />
          <Aside />
        </main>
        <Footer />
      </Fragment>
    );
  } // render End
}) // Search class end

