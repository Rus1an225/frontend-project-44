import readlineSync from 'readline-sync'

export const welcome = () => {
  console.log('Welcome to the Brain Games!')
}

export const helloName = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}
