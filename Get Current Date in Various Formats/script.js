let currentDate = new Date();
let dd = currentDate.getDate();
let mm = currentDate.getMonth();
let yyy = currentDate.getFullYear();
// Format the date as mm-dd-yyyy and log it
console.log(`${mm}-${dd}-${yyy}`);
// Format the date as dd-mm-yyyy and log it
console.log(`${dd}-${mm}-${yyy}`);
