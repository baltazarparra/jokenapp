import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: '',
      emptyUser: false,
      isntAuth: true,
      isInvite: false,
      isWaiting: false,
      isPlaying: false,
      showResult: false
    }
  }

  handleAuth = (e) => {
    e.preventDefault()
    if(this.state.login && this.state.password) {
      return this.setState({ isntAuth: false, isInvite: true })
    }
    this.setState({ emptyUser: true })
  }

  handleUsername = (e) => {
    this.setState({ login: e.target.value })
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  waitingPlayer = (e) => {
    e.preventDefault()
    this.setState({ isInvite: false, isWaiting: true })
    setTimeout(() => {
      this.setState({ isWaiting: false, isPlaying: true })
    }, 3000)
  }

  handleResult = () => {
    this.setState({ showResult: true })
  }

  render() {
    return <AppContent
      {...this.state}
      handleAuth={this.handleAuth}
      waitingPlayer={this.waitingPlayer}
      handleResult={this.handleResult}
      handleUsername={this.handleUsername}
      handlePassword={this.handlePassword}
    />
  }
}

export default App;
