//~ remove the duplicate element from the array

let arr = [2, 52, 46, 85, 63, 52, 28, 63, 66];

//! using for in loop and includes() method
function removeDuplicate(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicate(arr));

//! using Set() method
let unique = new Set(arr);
console.log(Array.from(unique));
