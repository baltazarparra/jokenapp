import React from 'react'
import rock from '../rock.svg'
import paper from '../paper.svg'
import scissor from '../scissor.svg'

const Choice = ({ userLogic }) => (
  <main className="choices">
    <img src={rock} alt="rock" onClick={userLogic} />
    <img src={paper} alt="paper" onClick={userLogic} />
    <img src={scissor} alt="scissor" onClick={userLogic} />
  </main>
)

export default Choice
