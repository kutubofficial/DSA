//*  Check Leap Year
let today = new Date();
// console.log(today)
function leapYear(year) {
  //   let year = today.getFullYear();
  if (year % 4 == 0 || year % 400 == 0 || year % 100 == 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
leapYear(2016); //true
leapYear(2018); //false
leapYear(2000); //true
leapYear(2025); //false
leapYear(2022); //false
leapYear(2024); //true

