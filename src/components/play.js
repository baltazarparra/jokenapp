import React from 'react'
import rock from '../rock.svg'
import paper from '../paper.svg'
import scissor from '../scissor.svg'

const Play = () => (
  <section className="play">
    <header>
      <span>userName - points</span>
      <span>userName - points</span>
    </header>
    <section>
      <p>counter</p>
      <p>Play!</p>
    </section>
    <main>
      <img src={rock} alt="rock" />
      <img src={paper} alt="paper" />
      <img src={scissor} alt="scissor" />
    </main>
  </section>
)

export default Play
