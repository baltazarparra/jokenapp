import React from 'react'

const Result = ({ finalScore, playAgain }) => (
  <section className="result">
    <h1>{finalScore}</h1>
    <button className="button" onClick={playAgain}>Play Again</button>
    <button className="button">View Ranking</button>
  </section>
)

export default Result
