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

const gemstone = {
  type: type,
  color: color,
  carat: carat,
};

console.log(gemstone);


function printFirstTwo([first, second]) {
  console.log(`First: ${first}, Second: ${second}`);
}

const numbers = [10, 20, 30, 40];

printFirstTwo(numbers);  
