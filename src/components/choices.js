import React from 'react'
import rock from '../rock.svg'
import paper from '../paper.svg'
import scissor from '../scissor.svg'

const Choices = ({ handleResult }) => (
  <main className="choices">
    <img src={rock} alt="rock" onClick={handleResult} />
    <img src={paper} alt="paper" onClick={handleResult} />
    <img src={scissor} alt="scissor" onClick={handleResult} />
  </main>
)

export default Choices
