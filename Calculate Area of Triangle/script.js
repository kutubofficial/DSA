//  ~        (Sides: 5, 6, 7)

//* formula =  √s(s−a)(s−b)(s−c)
const a = 5;
const b = 6;
const c = 7;

const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Area of triangle is: " + area.toFixed(2));




