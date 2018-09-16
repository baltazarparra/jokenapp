import React from 'react'
import Score from './score'
import Duel from './duel'
import Choice from './choice'
import Result from './result'

const Play = ({ login, yourScore, friendScore, userChoice, friendChoice, userLogic, showResult }) => (
  <section className="play">
    <Score login={login} yourScore={yourScore} friendScore={friendScore} />
    {!showResult && <Duel userChoice={userChoice} friendChoice={friendChoice} />}
    {!showResult && <Choice userLogic={userLogic} />}
    {showResult && <Result />}
  </section>
)

export default Play
