import runGame from '../engine.js'
import { getRandomInt } from '../utils/random.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const number = getRandomInt(0, 100)
  const question = String(number)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'

  return { question, correctAnswer }
}

export default () => runGame(description, generateRound)
