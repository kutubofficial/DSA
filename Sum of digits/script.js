//~  Sum of digits of a number

function sumOfDigits(num) {
  let strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
      // console.log(strNum[i]);
    let number = Number(strNum[i])
    // console.log(number);
    sum += number;
  }
  console.log("SUM OF DIGITS ",sum);
}
sumOfDigits(428);
sumOfDigits(28);
sumOfDigits(198);
sumOfDigits(4023);

//*OR

function sumOfDigit(num) {
  let sum = num.toString().split("").reduce((acc, digit) => acc + Number(digit), 0);
  console.log("Sum of digits:", sum);
}
sumOfDigit(456)