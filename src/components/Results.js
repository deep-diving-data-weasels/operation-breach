import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Aside from './Aside.js';
import './../CSS/App.css';


let dummy = {
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
  };
export default class Results extends Component {
 
  render () {
    return (
      <Fragment>
        <header>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/aboutus">AboutUs</Link>
            <button>Sign Out</button>
          </ul>
        </header>
        <main>
          <section>
            <div>
              <h3>${dummy.Name}</h3>
              <p>${dummy.Title}</p>
              <p>${dummy.Domain}</p>
              <p>${dummy.BreachDate}</p>
              <p>${dummy.PwnCount}</p>
              <p>${dummy.Description}</p>
              <p>${dummy.DataClasses}</p>
            </div>
            <Aside />
          </section>

        </main>
        <footer>This is our footer</footer>
      </Fragment>
    );
  }
}

