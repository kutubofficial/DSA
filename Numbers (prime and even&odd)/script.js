//~ Check even or odd
function numberCheck(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even number..!!`);
  } else {
    console.log(`${num} is odd number..!!`);
  }
}
// numberCheck(8)

//~ check prime number
function primeNumber(num) {
  if (num <= 1) {
    console.log(`${num} is not a prime number....`);
    return;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`${num} is not a prime number.`);
      return;
    }
  }
  console.log(`${num} is a prime number.`);
}
primeNumber(11.5);

//~ Find the factorial of a number
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
// console.log(factorial(5))




// & PRACTICE ANOTHER DAY

function prime(num) {
  for(let i=2;i<num/2;i++){
    if(num%i===0){
      return false
    }
  }
  return true;
}
// console.log(prime(8))
// console.log(prime(7))
// console.log(prime(9))
// console.log(prime(11))
// console.log(prime(16))
// console.log(prime(19))