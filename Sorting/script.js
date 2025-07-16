let arr = [2, 16, 29, 78, 65, 30, 81, 22, 21];

//! using loop

function sortingArray(arr) {
  let sortedArray = [...arr];
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = 0; j < sortedArray.length - 1 - i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        //* Swap the elements
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }
  return sortedArray;
}

// console.log(sortingArray(arr));

//! using predefined method
function sortingArr(arr) {
  return arr.sort((a, b) => a - b);
}
// console.log(sortingArr(arr));

//! slice and splice
let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const s1 = arrr.slice(2, 5);
console.log(s1); //[3,4,5]

const s2 = arrr.splice(3, 5);
console.log(s2); //[4,5,6,7,8]

console.log(arrr); //actual array
