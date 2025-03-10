/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
  if (nums.length === 0) return 0;
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum / nums.length;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

//Memory Efficiency:

// If the method were defined inside the constructor, each instance would get a separate copy.
// By using the prototype, all instances share the same method, saving memory.
// Prototype Chain:

// If you access a property/method on an object and it doesn't exist, JavaScript looks up the prototype chain to find it.

class name {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    `Hello ${name} Your  Age ${this.age}`;
  }
}

function objArray(arr) {
  let myobj = {};
  for (const { id, name } of arr) {
    myobj[id] = name;
  }
  return myobj;
}

console.log(
  objArray([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ])
);

//  by using  reduce
function oobjArray(arr) {
  return arr.reduce((acc, { id, name }) => {
    acc[id] = name;
    return acc;
  }, {});
}

console.log(
  oobjArray([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ])
);

function mapArray(arr) {
  return arr
    .filter(([name, age]) => age > 18)
    .map(([name, age]) => ({ [name]: age }));
}

const people = [
  ["Alice", 25],
  ["Bob", 17],
  ["Charlie", 30],
];

console.log(mapArray(people));
