import React, { Component, Fragment } from 'react';
import Aside from './components.Aside.js';
import './App.css';


class App extends Component {
 
  render () {
    return (
      <Fragment>
        <header>
          <ul>
            <button>Home</button>
            <button>About Us</button>
            <button>Sign Out</button>
          </ul>
        </header>
        <main>
          <h1>Welcom: Operation Breach</h1>
          <p>Description of our services</p>
          <form>
            <label for="username">Username: </label>
            <input name="username" type="text" placeholder="Username Here"></input>
            <label for="password">Password</label>
            <input name="password" type="password" placeholder="Password"></input>
            <input type="submit" value="submit">Log In</input>
          </form>
          <Aside />
        </main>
        <footer>This is our footer</footer>
      </Fragment>
    );
  }
}

export default App;
