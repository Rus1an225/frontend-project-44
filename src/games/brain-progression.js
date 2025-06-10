import runGame from '../engine.js'
import { getRandomInt } from '../utils/random.js'

const description = 'What number is missing in the progression?'

function createStrWithHiddenNumber(nums, posHiddenNumber) {
  const numsCopy = Array.from(nums)

  numsCopy[posHiddenNumber] = '..'

  return numsCopy.join(' ')
}

function createArrNumsArithmeticProgression() {
  const firstNumber = getRandomInt(0, 50) // первое число в арифметической прогрессии
  const lengthArithmeticProgression = getRandomInt(5, 15) // сколько будет чисел в арифметической прогрессии
  const stepArithmeticProgression = getRandomInt(2, 20) // шаг арифметической прогрессии

  const arrNums = []

  for (let i = 0; i < lengthArithmeticProgression; i++) {
    arrNums.push(i * stepArithmeticProgression + firstNumber)
  }

  return arrNums
}

const generateRound = () => {
  const arrNumsArithmeticProgression = createArrNumsArithmeticProgression()
  const posHiddenNumber = getRandomInt(0, arrNumsArithmeticProgression.length - 1)

  const question = createStrWithHiddenNumber(arrNumsArithmeticProgression, posHiddenNumber)
  const correctAnswer = String(arrNumsArithmeticProgression[posHiddenNumber])

  return { question, correctAnswer }
}

export default () => runGame(description, generateRound)
