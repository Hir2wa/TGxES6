const circle = {
  radius: 10,
  getArea: function () {
    return Math.PI * this.radius * this.radius;
  },
};

let { getArea } = circle;
console.log(getArea());
console.log(circle);
console.log(circle.getArea());

let type = "quartz";
let color = "rose";
let carat = 21.29;

// here there is some repetition
const gemstone = {
  type: type,
  color: color,
  carat: carat,
};

console.log(gemstone);

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
}
