import React from 'react'
import rock from '../rock.svg'
import paper from '../paper.svg'
import scissor from '../scissor.svg'

const Choice = ({ playedByUser }) => (
  <main className="choices">
    <img src={rock} alt="rock" onClick={playedByUser} />
    <img src={paper} alt="paper" onClick={playedByUser} />
    <img src={scissor} alt="scissor" onClick={playedByUser} />
  </main>
)

export default Choice
