//~ triangle pattern
function triangle(n) {
  let star = 1;
  let space = n - 1;

  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= space; j++) {
      line += "  ";
    }
    for (let j = 1; j <= star; j++) {
      line += "*   ";
    }
    console.log(line);
    star++;
    space--;
  }
}
// triangle(5);

//~ square pattern
function square(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        line += "* ";
      } else {
        line += "  ";
      }
    }
    console.log(line);
  }
}
square(5);
