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
    handleResult
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
    {isInvite &&
      <Invite isWaiting={isWaiting} waitingPlayer={waitingPlayer}
    />}
    {isWaiting && <Waiting />}
    {isPlaying && <Play login={login} handleResult={handleResult} showResult={showResult} />}
  </div>
)

export default AppContent
