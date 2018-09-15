import React from 'react'
import Header from './header'
import Logo from './logo'
import Form from './form'
import Invite from './invite'

const AppContent = ({ isInvite, handleInvite }) => (
  <div className="container">
    <Header />
    <Logo />
    {!isInvite && <Form handleInvite={handleInvite} />}
    {isInvite && <Invite />}
  </div>
)

export default AppContent
