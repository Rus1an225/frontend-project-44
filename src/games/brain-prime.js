import runGame from '../engine.js'
import { getRandomInt } from '../utils/random.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function isPrime(num) {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const sqrt = Math.sqrt(num)
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false
  }

  return true
}

const generateRound = () => {
  const number = getRandomInt(1, 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  const question = number

  return { question, correctAnswer }
}

export default () => runGame(description, generateRound)
