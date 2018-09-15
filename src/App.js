import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isInvite: false
    }
  }

  handleInvite = (e) => {
    e.preventDefault()
    this.setState({ isInvite: true })
  }

  render() {
    return <AppContent
      {...this.state}
      handleInvite={this.handleInvite}
    />
  }
}

export default App;
