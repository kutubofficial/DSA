
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
  let strLength = str.length - 1;
  for (let i = 0; i <= strLength/2; i++) {
    if (str[i] !== str[strLength - i]) {
      console.log(`${str} is NOT a palindrome`);
      return;
    }
  }
      console.log(`${str} is a palindrome`);
}
palindrome("madam");
palindrome("level");
