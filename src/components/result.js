import React from 'react'
import rock from '../rock.svg'
import paper from '../paper.svg'

const Result = ({ handleResult }) => (
  <section className="result">
    <div className="result__choice">
      <img className="result__you-choice" src={rock} alt="rock" onClick={handleResult} />
      <img className="result__friend-choice" src={paper} alt="paper" onClick={handleResult} />
    </div>
    <h2 className="result__title">You Loose :(</h2>
  </section>
)

export default Result
