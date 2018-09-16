import React from 'react'

const Result = ({ finalScore, playAgain, youDied }) => (
  <section className="result">
    <h1 className={`result__title ${youDied ? 'lose' : ''}`}>{finalScore}</h1>
    <div className="result__control">
      <button className="button" onClick={playAgain}>Play Again</button>
    </div>
  </section>
)

export default Result
