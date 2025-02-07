// getting the index of the array
const digits = [0, 1, 2, 9, 4, 35, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
  console.log(index);
}

// has continue and break statement
const digitss = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digitss) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

let myDays = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";
let arrayDays = myDays.split(",");
console.log(arrayDays);
for (const element of arrayDays) {
  console.log(element);
  //console.log(...element);
}

function* customGenerator() {
  console.log("First yield");
  yield 1;
  console.log("Second yield");
  yield 2;
  console.log("Done!");
  return 3;
}

const gen = customGenerator();
console.log(gen.next()); // Logs: "First yield", { value: 1, done: false }
console.log(gen.next()); // Logs: "Second yield", { value: 2, done: false }
console.log(gen.next()); // Logs: "Done!", { value: 3, done: true }

const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to remove vowels from a name
function removeVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // List of vowels to remove
    let result = '';

    for (let char of name) {
        if (!vowels.includes(char.toLowerCase())) {
            result += char; // Add the character to result if it's not a vowel
        }
    }

    return result;
}

// Ask the user to enter their name
rl.question("Enter your name: ", function(name) {
    let nameWithoutVowels = removeVowels(name);
    console.log("Name without vowels:", nameWithoutVowels);
    
    rl.close(); // Close the readline interface
});
