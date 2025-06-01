//~ Find the least common multiple (LCM)

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function findLCM(numbers) {
  return numbers.reduce((acc, curr) => lcm(acc, curr));
}

console.log(findLCM([4, 5, 10]));
