import React from 'react'
import Score from './score'
import Counter from './counter'
import Choices from './choices'
import Result from './result'

const Play = ({ login, yourScore, friendScore, userLogic, showResult }) => (
  <section className="play">
    <Score login={login} yourScore={yourScore} friendScore={friendScore} />
    {!showResult && <Counter />}
    {!showResult && <Choices userLogic={userLogic} />}
    {showResult && <Result />}
  </section>
)

export default Play
