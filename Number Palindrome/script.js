//~ Check if a number is a palindrome (e.g., 121 → true)
function palindrome(num) {
  let string = num.toString();
  //const str = String(num);
  for (let i = 0; i < string.length / 2; i++) {
    // console.log(string[i]);
    // console.log(string[string.length - 1 - i]);
    if (string[i] !== string[string.length - 1 - i]) return false;
  }
  return true;
}
console.log(palindrome(121));
console.log(palindrome(1331));
console.log(palindrome(1941));
console.log(palindrome(14941));
