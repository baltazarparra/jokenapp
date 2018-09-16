import React from 'react'
import Score from './score'
import Counter from './counter'
import Choices from './choices'
import Result from './result'

const Play = ({ login, handleResult, showResult }) => (
  <section className="play">
    <Score login={login} />
    {!showResult && <Counter />}
    {!showResult && <Choices handleResult={handleResult} />}
    {showResult && <Result />}
  </section>
)

export default Play
