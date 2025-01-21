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
