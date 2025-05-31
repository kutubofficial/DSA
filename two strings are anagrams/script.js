//~  Check if two strings are anagrams

let str1 = "silent";
let str2 = "listen";
function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let sort1 = str1.split("").sort().join("");
  let sort2 = str2.split("").sort().join("");
  //   console.log(sort1);
  //   console.log(sort2);

  return sort1 == sort2;
}
console.log(anagrams(str1, str2));
