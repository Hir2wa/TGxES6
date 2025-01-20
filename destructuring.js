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
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
  console.log(index);
}
