import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="title">Jo Ken App</h1>
        </header>
        <section className="section">
          <img src={logo} alt="logo" />
        </section>
        <form className="form">
          <p className="inputContent">
            <label className="label">Name</label>
            <input className="input" type="text" />
          </p>
          <p className="inputContent">
            <label className="label">Password</label>
            <input className="input" type="password" />
          </p>
          <button className="button register">Register</button>
          <button className="button">Login</button>
        </form>
      </div>
    );
  }
}

export default App;
