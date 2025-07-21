//~ Check if a number is an Armstrong number (e.g., 153 → 1³ + 5³ + 3³ = 153)

function checkArmstrong(num) {
  let digit = num.toString().split("");
  let power = digit.length;
  let sum = 0;
  for (let i = 0; i < digit.length; i++) {
    // console.log(digit[i]);
    let number = Number(digit[i]);
    sum += Math.pow(number, power);
  }
  if (sum === num) {
    console.log(`${num} is an Armstrong number.`);
  } else {
    console.log(`${num} is NOT an Armstrong number.`);
  }
}
// checkArmstrong(153);
// checkArmstrong(753);

//! PRACTICE
function armNum(num) {
  let digit = num.toString().split("");
  // console.log(digit);
  let sum = 0;
  for (let i = 0; i < digit.length; i++) {
    let number = Number(digit[i]);
    sum += Math.pow(number, digit.length);
  }
  if (sum === num) return true;
}

console.log(armNum(153));
console.log(armNum(4553));

