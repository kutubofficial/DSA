//~ merg sort
function mergSortArray(arr1, arr2) {
  const merged = [];
  let i = 0,
    j = 0;

  //! Compare elements from both arrays and push the smaller one
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  //! Push the remaining elements if any
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergSortArray(arr1, arr2));
//* expected output -> [1,2,3,4,5,6]
