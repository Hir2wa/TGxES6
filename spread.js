//Expanding an iterable (like an array) into individual elements.
function greet(a, b, c) {
  console.log(a, b, c);
}
const names = ["Alice", "Bob", "Charlie"];
greet(...names);

const books = [
  "Don Quixote",
  "The Hobbit",
  "Alice in Wonderland",
  "Tale of Two Cities",
];
console.log(...books);
