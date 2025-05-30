
//~  Check if a number is a palindrome
function checkPalindrome(str) {
  //   let s = str.split("");
  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// checkPalindrome("madam");
// checkPalindrome("khandaan");

//*OR

function palindrome(str) {
  let mid = str.length - 1;
  for (let i = 0; i <= mid; i++) {
    if (str[i] !== str[mid - i]) {
      console.log(`${str} is NOT a palindrome`);
      return;
    }
  }
      console.log(`${str} is a palindrome`);
}
palindrome("madam");
palindrome("level");
