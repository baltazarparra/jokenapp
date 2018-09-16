import React from 'react'
import rock from '../rock.svg'
import paper from '../paper.svg'
import scissor from '../scissor.svg'

const Duel = ({ userChoice, friendChoice }) => (
  <section>
    {friendChoice === 'rock' && <img className="friend-choice" src={rock} alt="rock" />}
    {friendChoice === 'paper' && <img className="friend-choice" src={paper} alt="paper" />}
    {friendChoice === 'scissor' && <img className="friend-choice" src={scissor} alt="scissor" />}
    <h1 className="play-title">Play!</h1>
    {userChoice === 'rock' && <img className="your-choice" src={rock} alt="rock" />}
    {userChoice === 'paper' && <img className="your-choice" src={paper} alt="paper" />}
    {userChoice === 'scissor' && <img className="your-choice" src={scissor} alt="scissor" />}
  </section>
)

export default Duel
