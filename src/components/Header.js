import React from 'react'
import { randomGenerator, randomWords } from '../data'
import App from '../App'

const Header = () => {
    const letter = randomGenerator(randomWords)
  return (
    <div>
        <App letter={letter} />
    </div>
  )
}

export default Header