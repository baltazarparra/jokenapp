import React from 'react'

const Score = ({ login, yourScore, friendScore }) => (
  <header className="play__points">
    <span>{login} - {yourScore}</span>
    <span> CPU - {friendScore}</span>
  </header>
)

export default Score
