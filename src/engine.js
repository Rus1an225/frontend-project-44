// src/engine.js
import readlineSync from 'readline-sync';
import { welcome, helloName } from './cli.js';

const runGame = (description, generateRound) => {
  welcome();
  const userName = helloName();

  console.log(description);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const { question, correctAnswer } = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
