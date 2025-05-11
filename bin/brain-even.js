#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { helloName, welcome } from '../src/cli.js';

welcome();
const userName = helloName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomInt(min, max) {
	const min1 = Math.ceil(min);
	const max1 = Math.floor(max);
	return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
}

function questionEvenNumber(userName) {
	const randomNumber = getRandomInt(0, 100);

	console.log(`Question: ${randomNumber}`);
	const isEven = randomNumber % 2 === 0;
	const answer = readlineSync.question('Your answer: ');
	const correctAnswer = isEven === true ? 'yes' : 'no';

	if (
		(answer === 'yes' && isEven === true) ||
		(answer === 'no' && isEven === false)
	) {
		console.log('Correct');
		return true;
	}

	if (
		(answer !== 'yes' && isEven === true) ||
		(answer !== 'no' && isEven === false)
	) {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
		console.log(`Let's try again, ${userName}!`);
		return false;
	}

	return false;
}

function question3Times(userName) {
	for (let i = 0; i < 3; i++) {
		const resultQuestion = questionEvenNumber(userName);

		if (resultQuestion === false) {
			return;
		}
	}

	console.log(`Congratulations, ${userName}!`);
}

question3Times(userName);
