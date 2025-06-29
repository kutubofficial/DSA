//* This is the only practice part (if u want actual code checkout the files)

function largestNumber(arr) {
  let theLargestNumberIs = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > theLargestNumberIs) {
      theLargestNumberIs = arr[i];
    }
  }
  console.log("the largest number is ", theLargestNumberIs);
}
let arr = [30, 45, 17, 69, -78, 55, 12, 20, 26];
// largestNumber(arr);

function secondLargestNumber(arr) {
  let firstLarger = -Infinity;
  let secondLarger = -Infinity;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > firstLarger) {
      secondLarger = firstLarger;
      firstLarger = arr[j];
    } else if (arr[j] > secondLarger && arr[j] !== firstLarger) {
      secondLarger = arr[j];
    }
  }
  console.log("second largest ", secondLarger);
}
// secondLargestNumber(arr);

function numberPalindrome(num) {
  let str = num.toString();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// console.log(numberPalindrome(13431))
// console.log(numberPalindrome("nitin"))

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
// console.log(reverseString("america"))

//! ( 153 → 1³ + 5³ + 3³ = 153)
function armstrong(num) {
  let str = num.toString();
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    let number = Number(str[i]);
    total += Math.pow(number, str.length)
  }
  return total
}
console.log(armstrong(153));
