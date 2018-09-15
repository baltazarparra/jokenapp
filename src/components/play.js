import React from 'react'
import Score from './score'
import Counter from './counter'
import Choices from './choices'

const Play = ({ handleResult, showResult }) => (
  <section className="play">
    <Score />
    {!showResult && <Counter />}
    {!showResult && <Choices handleResult={handleResult} />}
  </section>
)

export default Play
