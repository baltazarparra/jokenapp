import React from 'react'
import rock from '../rock.svg'
import paper from '../paper.svg'
import scissor from '../scissor.svg'

const Counter = ({ userChoice, friendChoice }) => (
  <section>
    {userChoice === 'rock' && <img className="your-choice" src={rock} alt="rock" />}
    {userChoice === 'paper' && <img className="your-choice" src={paper} alt="paper" />}
    {userChoice === 'scissor' && <img className="your-choice" src={scissor} alt="scissor" />}
    <h1 className="play-title">Play!</h1>
    {friendChoice === 'rock' && <img className="friend-choice" src={rock} alt="rock"className="friend-choice"  />}
    {friendChoice === 'paper' && <img className="friend-choice" src={paper} alt="paper"className="friend-choice"  />}
    {friendChoice === 'scissor' && <img className="friend-choice" src={scissor} alt="scissor"className="friend-choice"  />}
  </section>
)

export default Counter
