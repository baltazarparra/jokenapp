import React from 'react'
import Header from './header'
import Logo from './logo'
import Form from './form'
import Play from './play'
import Result from './result'

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
    playedByUser,
    finalScore,
    playAgain,
    youDied
  }) => (
  <div className="container">

    {!isPlaying && !showResult && <Header />}


    {!isPlaying && !showResult && <Logo />}

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
    />}

    {showResult && <Result finalScore={finalScore} playAgain={playAgain} youDied={youDied} />}

  </div>
)

export default AppContent
