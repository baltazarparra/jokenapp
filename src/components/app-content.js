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
    playedByUser
  }) => (
  <div className="container">

    {!isPlaying && <Header />}


    {!isPlaying && <Logo />}

    {isntAuth &&
      <Form
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        handleAuth={handleAuth}
        emptyUser={emptyUser}
    />}

    {isPlaying &&
      <Play
        isPlaying={isPlaying}
        login={login}
        yourScore={yourScore}
        friendScore={friendScore}
        userChoice={userChoice}
        friendChoice={friendChoice}
        playedByUser={playedByUser}
        showResult={showResult}
    />}

  </div>
)

export default AppContent
