import runGame from '../engine.js';
import { getRandomInt } from '../utils/random.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const a = getRandomInt(1, 50);
  const b = getRandomInt(1, 50);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];

  const question = `${a} ${operator} ${b}`;

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = (a + b).toString();
      break;
    case '-':
      correctAnswer = (a - b).toString();
      break;
    case '*':
      correctAnswer = (a * b).toString();
      break;
		default:
      throw new Error(`Неподдерживаемый оператор: ${operator}`);
  }

  return { question, correctAnswer };
};

export default () => runGame(description, generateRound);
