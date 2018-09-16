import React from 'react'

const Score = ({ login, yourScore, friendScore }) => (
  <header className="play__points">
    <span>{login} - {yourScore}</span>
    <span> Friend - {friendScore}</span>
  </header>
)

export default Score
