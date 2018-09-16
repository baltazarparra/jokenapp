import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: '',
      userChoice: '',
      friendChoice: '',
      yourScore: 0,
      friendScore: 0,
      finalScore: '',
      isntAuth: true,
      emptyUser: false,
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

  playedByUser = (e) => {
    this.setState({ userChoice: e.target.alt })
    this.playedByCpu()
  }

  playedByCpu = () => {
    const choice = (Math.random() * 3 | 0) + 1
    switch (choice) {
      case 1:
        this.setState({ friendChoice: 'rock' }, () => {
          this.handleRock(this.state.userChoice)
        })
        break
      case 2:
        this.setState({ friendChoice: 'paper' }, () => {
          this.handlePaper(this.state.userChoice)
        })
        break
      case 3:
        this.setState({ friendChoice: 'scissor' }, () => {
          this.handleScissor(this.state.userChoice)
        })
        break
      default:
        break
    }
  }

  handleRock = (userEntry) => {
    let yourPrevScore = this.state.yourScore
    let yourNewScore = yourPrevScore + 1
    let friendPrevScore = this.state.friendScore
    let friendNewScore = friendPrevScore + 1
    if (userEntry === 'paper') {
      this.setState({ yourScore: yourNewScore }, () => {
        if(this.state.yourScore === 3) {
          this.handleWin()
        }
      })
    } else if (userEntry === 'scissor') {
      this.setState({ friendScore: friendNewScore }, () => {
        if(this.state.friendScore === 3) {
          this.handleLoose()
        }
      })
    }
  }

  handlePaper = (userEntry) => {
    let yourPrevScore = this.state.yourScore
    let yourNewScore = yourPrevScore + 1
    let friendPrevScore = this.state.friendScore
    let friendNewScore = friendPrevScore + 1
    if (userEntry === 'scissor') {
      this.setState({ yourScore: yourNewScore }, () => {
        if(this.state.yourScore === 3) {
          this.handleWin()
        }
      })
    } else if (userEntry === 'rock') {
      this.setState({ friendScore: friendNewScore }, () => {
        if(this.state.friendScore === 3) {
          this.handleLoose()
        }
      })
    }
  }

  handleScissor = (userEntry) => {
    let yourPrevScore = this.state.yourScore
    let yourNewScore = yourPrevScore + 1
    let friendPrevScore = this.state.friendScore
    let friendNewScore = friendPrevScore + 1
    if (userEntry === 'rock') {
      this.setState({ yourScore: yourNewScore }, () => {
        if(this.state.yourScore === 3) {
          this.handleWin()
        }
      })
    } else if (userEntry === 'paper') {
      this.setState({ friendScore: friendNewScore }, () => {
        if(this.state.friendScore === 3) {
          this.handleLoose()
        }
      })
    }
  }

  handleWin = () => {
    this.setState({ showResult: true, isPlaying: false, finalScore: 'U Fckn Won! o/' })
  }

  handleLoose = () => {
    this.setState({ showResult: true, isPlaying: false, finalScore: 'YOU DIED' })
  }

  playAgain = () => {
    this.setState({ showResult: false, isPlaying: true, yourScore: 0, friendScore: 0 })
  }

  render() {
    return <AppContent
      {...this.state}
      handleAuth={this.handleAuth}
      playedByUser={this.playedByUser}
      handleUsername={this.handleUsername}
      handlePassword={this.handlePassword}
      playAgain={this.playAgain}
    />
  }
}

export default App;
