import React from 'react'

const Score = ({ login, globalScore, yourScore, friendScore }) => (
  <header className="play__points">
    <span>YOU - {yourScore}</span>
    <span> CPU - {friendScore}</span>
    <p className="email">Score: {globalScore} <br /> User: {login}</p>
  </header>
)

export default Score
