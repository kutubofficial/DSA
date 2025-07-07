//~ sum the ever positive numbers

const arr = [1, -4, 12, 0, -3, 29, -150];
function sumPositiveNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i];
  }
  return sum;
}
console.log(sumPositiveNumber(arr));
//* expected output: 42
