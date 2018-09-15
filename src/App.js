import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isntAuth: true,
      isInvite: false,
      isWaiting: false
    }
  }

  handleInvite = (e) => {
    e.preventDefault()
    this.setState({ isntAuth: false, isInvite: true })
  }

  waitingPlayer = (e) => {
    e.preventDefault()
    this.setState({ isInvite: false, isWaiting: true })
  }

  render() {
    return <AppContent
      {...this.state}
      handleInvite={this.handleInvite}
      waitingPlayer={this.waitingPlayer}
    />
  }
}

export default App;
