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
    authError,
    handleUsername,
    handlePassword,
    handleLogin,
    handleRegister,
    playedByUser,
    finalScore,
    playAgain,
    youDied,
    globalScore
  }) => (
  <div className="container">

    {!isPlaying && !showResult && <Header />}


    {!isPlaying && !showResult && <Logo />}

    {isntAuth &&
      <Form
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        emptyUser={emptyUser}
        authError={authError}
    />}

    {isPlaying &&
      <Play
        isPlaying={isPlaying}
        yourScore={yourScore}
        friendScore={friendScore}
        userChoice={userChoice}
        friendChoice={friendChoice}
        playedByUser={playedByUser}
        login={login}
        globalScore={globalScore}
    />}

    {showResult && <Result finalScore={finalScore} playAgain={playAgain} youDied={youDied} />}

  </div>
)

export default AppContent
