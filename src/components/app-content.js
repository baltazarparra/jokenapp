import React from 'react'
import Header from './header'
import Logo from './logo'
import Form from './form'
import Play from './play'

const AppContent = ({
    login,
    yourScore,
    friendScore,
    userChoice,
    friendChoice,
    isntAuth,
    isPlaying,
    showResult,
    emptyUser,
    handleUsername,
    handlePassword,
    handleAuth,
    userLogic
  }) => (
  <div className="container">
    {!isPlaying && <Header />}
    {!isPlaying && <Logo />}
    {isntAuth &&
      <Form
        emptyUser={emptyUser}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        handleAuth={handleAuth}
    />}
    {isPlaying &&
      <Play
        login={login}
        yourScore={yourScore}
        friendScore={friendScore}
        userLogic={userLogic}
        userChoice={userChoice}
        friendChoice={friendChoice}
        showResult={showResult}
    />}
  </div>
)

export default AppContent
