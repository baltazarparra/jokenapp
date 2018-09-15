import React from 'react'
import Header from './header'
import Logo from './logo'
import Form from './form'
import Invite from './invite'
import Waiting from './waiting'
import Play from './play'

const AppContent = ({
    isntAuth,
    isInvite,
    isWaiting,
    isPlaying,
    showResult,
    handleInvite,
    waitingPlayer,
    handleResult
  }) => (
  <div className="container">
    {!isWaiting && !isPlaying && <Header />}
    {!isPlaying && <Logo />}
    {isntAuth && <Form handleInvite={handleInvite} />}
    {isInvite &&
      <Invite isWaiting={isWaiting} waitingPlayer={waitingPlayer}
    />}
    {isWaiting && <Waiting />}
    {isPlaying && <Play handleResult={handleResult} showResult={showResult} />}
  </div>
)

export default AppContent
