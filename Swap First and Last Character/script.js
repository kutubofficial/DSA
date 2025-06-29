function swapString(str) {
  mid_char = str.substring(1, str.length, -1);
//   console.log(str.charAt(str.length - 1));
//   console.log(str.length - 1);
//   console.log(mid_char);
//   console.log(str.charAt(0));
  return str.charAt(str.length - 1) + mid_char + str.charAt(0);
}
console.log(swapString("noida"));
console.log(swapString("poonam"));
