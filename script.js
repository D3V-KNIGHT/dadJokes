let dadJokes = [
  "how do you make a tissue dance?... Put alittle boogie in it",
  "where do you find a dog with no legs?... Right where you left it.",
  "Why did the blind miner fall into the well?... He didnt see that well.",
  "Did you hear about the miner who lost his left arm?... Don't worry, he's all right now.",
  "Why did the man become an astronaut?... Because he wanted space.",
  "Why don’t monsters eat clowns?... Because they taste funny.",
  "I bought a book about gravity... I couldn’t put it down.",
];
let numOfJokes = dadJokes.length;
//numOfJokes = dadJokes.length;
console.log(numOfJokes);
// need to be random
let randomNum = Math.floor(Math.random() * numOfJokes);
console.log(dadJokes[randomNum]);
