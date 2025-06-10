import runGame from '../engine.js'
import { getRandomInt } from '../utils/random.js'

const description = 'Find the greatest common divisor of given numbers.'

function createRandomNumbers(quantity, min, max) {
  const arr = []

  for (let i = 0; i < quantity; i++) {
    arr.push(getRandomInt(min, max))
  }

  return arr
}

function multiplyNumbersInArr(numbers) {
  let acc = 1

  for (const num of numbers) {
    acc = acc * num
  }

  return acc
}

function createNumberWithRandomFactors(minNum, maxNum, minFac, maxFac) {
  const rndNumber = getRandomInt(minNum, maxNum)

  const quantityMultipliers = getRandomInt(1, 3)
  const arrMultipliers = createRandomNumbers(quantityMultipliers, minFac, maxFac)
  const multipliedFactors = multiplyNumbersInArr(arrMultipliers)

  return rndNumber * multipliedFactors
}

/**
 * Находит набольший общий делитель у двух чисел
 */
function getGCD(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateRound = () => {
  const firstNumber = createNumberWithRandomFactors(1, 9, 2, 9)
  const secondNumber = createNumberWithRandomFactors(1, 9, 2, 9)

  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = String(getGCD(firstNumber, secondNumber))

  return { question, correctAnswer }
}

export default () => runGame(description, generateRound)
