import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBx2Ht0SJigGD_tf_ycjL55ChPxGvvr8cw",
  authDomain: "jokenapp.firebaseapp.com",
  databaseURL: "https://jokenapp.firebaseio.com",
  projectId: "jokenapp",
  storageBucket: "jokenapp.appspot.com",
  messagingSenderId: "25504544170"
}

firebase.initializeApp(config)
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
      authError: '',
      isInvite: false,
      isWaiting: false,
      isPlaying: false,
      showResult: false,
      youdied: '',
      globalScore: 0
    }
  }

  handleLogin = (e) => {
    e.preventDefault()
    const auth = firebase.auth()
    const promise = auth.signInWithEmailAndPassword(this.state.login, this.state.password)

    promise.then(() => {
      this.updateScore()
      return this.setState({ isntAuth: false, isPlaying: true })
    })

    promise.catch(e => {
      this.setState({ emptyUser: true, authError: e.message })
      console.log(e.message)
    })

  }

  updateScore = () => {
    const userId = firebase.auth().currentUser.uid
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
      var score = snapshot.val().score
      this.setState({ globalScore: score })
    });
  }

  handleRegister = (e) => {
    e.preventDefault()
    const auth = firebase.auth()
    const promise = auth.createUserWithEmailAndPassword(this.state.login, this.state.password)

    promise.then(() => {
      return this.setState({ isntAuth: false, isPlaying: true })
    })

    promise.catch(e => {
      this.setState({ emptyUser: true, authError: e.message })
      console.log(e.message)
    })

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
    const userId = firebase.auth().currentUser.uid
    let currentScore = this.state.globalScore
    let newScore = currentScore + 1
    this.setState({ globalScore: newScore, showResult: true, isPlaying: false, finalScore: 'U Fckn Won! o/', youDied: false })
    firebase.database().ref('users/' + userId).set({
      score: newScore
    })
  }

  handleLoose = () => {
    this.setState({ showResult: true, isPlaying: false, finalScore: 'YOU DIED', youDied: true })
  }

  playAgain = () => {
    this.setState({ showResult: false, isPlaying: true, yourScore: 0, friendScore: 0 })
  }

  render() {
    return <AppContent
      {...this.state}
      handleLogin={this.handleLogin}
      handleRegister={this.handleRegister}
      playedByUser={this.playedByUser}
      handleUsername={this.handleUsername}
      handlePassword={this.handlePassword}
      playAgain={this.playAgain}
    />
  }
}

export default App;
