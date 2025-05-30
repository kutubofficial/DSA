let today = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = days[today.getDay()];
console.log(`Today is: ${dayName}`);
let hours = today.getHours();
let minut = today.getMinutes();
let second = today.getSeconds();

const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12;
console.log(`Current time is: ${hours} ${ampm} : ${minut} : ${second}`);
