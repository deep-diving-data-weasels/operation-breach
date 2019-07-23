// React
import React, { Component, Fragment } from 'react';

// Components
import Header from './Header.js';
import Aside from './Aside.js';

// Styles
import './../CSS/App.css';

// Result class - used to build results
class Result extends Component{ 
  constructor(props){
    super(props);
  }// end constructor

  render() {
    return(
      <div class='result'>
        <h3>{this.props.resObj.Name}</h3>
        <p>{this.props.resObj.Title}</p>
        <p>{this.props.resObj.Domain}</p>
        <p>{this.props.resObj.BreachDate}</p>
        <p>{this.props.resObj.PwnCount}</p>
        <p>{this.props.resObj.Description}</p>
        <p>{this.props.resObj.DataClasses}</p>
      </div>
    );
  }// end render
}// end Result

// Results - Componet to hold each result sub components.
export default class Results extends Component {
 
  constructor(props){
    super(props);
    this.state = {results: [{
      Name: "Adobe",
      Title: "Adobe",
      Domain: "adobe.com",
      BreachDate: "2013-10-04",
      AddedDate: "2013-12-04T00:00Z",
      ModifiedDate: "2013-12-04T00:00Z",
      PwnCount: 152445165,
      Description: "In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, <em>encrypted</em> password and a password hint in plain text. The password cryptography was poorly done and <a href=\"http://stricture-group.com/files/adobe-top100.txt\" target=\"_blank\" rel=\"noopener\">many were quickly resolved back to plain text</a>. The unencrypted hints also <a href=\"http://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html\" target=\"_blank\" rel=\"noopener\">disclosed much about the passwords</a> adding further to the risk that hundreds of millions of Adobe customers already faced.",
      DataClasses: ["Email addresses","Password hints","Passwords","Usernames"],
      IsVerified: true,
      IsSensitive: false,
      IsRetired: false,
      IsSpamList: false
      },
      {
        Name: "Adobe2",
        Title: "Adobe2",
        Domain: "adobe2.com",
        BreachDate: "2013-10-04",
        AddedDate: "2013-12-04T00:00Z",
        ModifiedDate: "2013-12-04T00:00Z",
        PwnCount: 152445165,
        Description: "In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, <em>encrypted</em> password and a password hint in plain text. The password cryptography was poorly done and <a href=\"http://stricture-group.com/files/adobe-top100.txt\" target=\"_blank\" rel=\"noopener\">many were quickly resolved back to plain text</a>. The unencrypted hints also <a href=\"http://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html\" target=\"_blank\" rel=\"noopener\">disclosed much about the passwords</a> adding further to the risk that hundreds of millions of Adobe customers already faced.",
        DataClasses: ["Email addresses","Password hints","Passwords","Usernames"],
        IsVerified: true,
        IsSensitive: false,
        IsRetired: false,
        IsSpamList: false
        }]
    };
  } // end constructor

  render () {
    return (
      <Fragment>
        <Header />
        <main>
          <section id="resultSection">
            {
              this.state.results.map( (pwndObj,idx) => <Result resObj={pwndObj}/>)
            }
          </section>
          <Aside />
        </main>
        <footer>This is our footer</footer>
      </Fragment>
    );
  }// end render
}// end Results

