import React from 'react'
import Score from './score'
import Duel from './duel'
import Choice from './choice'
import Result from './result'

const Play = ({ isPlaying, login, yourScore, friendScore, userChoice, friendChoice, playedByUser, showResult }) => (
  <section className="play">
    <Score login={login} yourScore={yourScore} friendScore={friendScore} />
    {isPlaying && <Duel userChoice={userChoice} friendChoice={friendChoice} />}
    {isPlaying && <Choice playedByUser={playedByUser} />}
    {showResult && <Result />}
  </section>
)

export default Play
