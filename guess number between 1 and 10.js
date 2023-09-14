const num = Math.floor(Math.random() * 10) + 1;
console.log(num);

const userGuess = prompt('Guess the number between 1 and 10:');
if(userGuess === num) {
  console.log('Matched');
} else {
  console.log('Not Matched');
}