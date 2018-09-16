import React from 'react'
import Header from './header'
import Logo from './logo'
import Form from './form'
import Invite from './invite'
import Waiting from './waiting'
import Play from './play'

const AppContent = ({
    login,
    password,
    yourScore,
    friendScore,
    userChoice,
    friendChoice,
    isntAuth,
    isInvite,
    isWaiting,
    isPlaying,
    showResult,
    emptyUser,
    handleUsername,
    handlePassword,
    handleAuth,
    waitingPlayer,
    userLogic
  }) => (
  <div className="container">
    {!isWaiting && !isPlaying && <Header />}
    {!isPlaying && <Logo />}
    {isntAuth &&
      <Form
        emptyUser={emptyUser}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        handleAuth={handleAuth}
    />}
    {false &&
      <Invite isWaiting={isWaiting} waitingPlayer={waitingPlayer}
    />}
    {false && <Waiting />}
    {isPlaying &&
      <Play
        login={login}
        yourScore={yourScore}
        friendScore={friendScore}
        userLogic={userLogic}
        showResult={showResult}
        userChoice={userChoice}
        friendChoice={friendChoice}
      />}
  </div>
)

export default AppContent
