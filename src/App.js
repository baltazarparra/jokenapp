import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: '',
      yourScore: 0,
      friendScore: 0,
      userChoice: '',
      friendChoice: '',
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
      return this.setState({ isntAuth: false, isPlaying: true })
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

  userLogic = (e) => {
    this.setState({ userChoice: e.target.alt })
    this.friendLogic()
  }

  friendLogic = () => {
    const choice = (Math.random() * 3 | 0) + 1
    switch (choice) {
      case 1:
        this.setState({ friendChoice: 'rock' })
        this.handleResult()
        break
      case 2:
        this.setState({ friendChoice: 'paper' })
        this.handleResult()
        break
      case 3:
        this.setState({ friendChoice: 'scissor' })
        this.handleResult()
        break
      default:
        break
    }
  }

  handleResult = (e) => {
    console.log(this.state.friendChoice)
    console.log(this.state.userChoice)
  }

  render() {
    return <AppContent
      {...this.state}
      handleAuth={this.handleAuth}
      waitingPlayer={this.waitingPlayer}
      userLogic={this.userLogic}
      handleUsername={this.handleUsername}
      handlePassword={this.handlePassword}
    />
  }
}

export default App;
