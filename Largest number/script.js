//~ get the largest number
let arr = [4, 5, 8, 1, 6, 3, -9, 4];
function biggestNumber(arr) {
  let indexOfBiggest = 0;
  let biggest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
      indexOfBiggest = i;
    }
  }
  console.log("biggest number is: ", biggest);
  console.log("index of biggest number is: ", indexOfBiggest);
}
biggestNumber(arr);

//~ get the second largest number

function secondLargestNumber(arr) {
  let first = -Infinity;
  let second = -Infinity;
  let indexOfSecond = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
      indexOfSecond = i;
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
      indexOfSecond = i;
    }
  }
  console.log("Second largest number is:", second);
  console.log("index of Second largest number is:", indexOfSecond);
}
secondLargestNumber(arr);

//! practice
function larger(arr) {
  let larg = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > larg) {
      larg = arr[i];
    }
  }
  console.log(`here the largest number ${larg}`);
}
larger(arr);
function secLarger(arr) {
  let SECONDLARGER = -Infinity;
  let FIRSTLARGER = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > FIRSTLARGER) {
      SECONDLARGER = FIRSTLARGER;
      FIRSTLARGER = arr[i];
      ind = i;
    } else if (arr[i] > SECONDLARGER && arr[i] !== FIRSTLARGER) {
      SECONDLARGER = arr[i];
      ind = i;
    }
  }
  console.log(`here the sec larg ${SECONDLARGER} and index is ${ind}`);
}
secLarger(arr);
