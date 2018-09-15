import React from 'react'
import Header from './header'
import Logo from './logo'
import Form from './form'
import Invite from './invite'
import Waiting from './waiting'

const AppContent = ({ isntAuth, isInvite, isWaiting, handleInvite, waitingPlayer }) => (
  <div className="container">
    {!isWaiting && <Header />}
    <Logo />
    {isntAuth && <Form handleInvite={handleInvite} />}
    {isInvite &&
      <Invite isWaiting={isWaiting} waitingPlayer={waitingPlayer}
    />}
    {isWaiting && <Waiting />}
  </div>
)

export default AppContent
