//~  Count vowels and consonants in a string
function countCharecter(char) {
  let vowels = "aeiou";
  let consonants = "bcdfghjklmnpqrstvwxyz";
  let vowelsCount = 0;
  let consonantsCount = 0;
  for (let i = 0; i < char.length; i++) {
    let letter = char[i];
    if (vowels.includes(letter)) {
      vowelsCount += 1;
    } else if (consonants.includes(letter)) {
      consonantsCount += 1;
    }
  }
  console.log("vowels: ", vowelsCount);
  console.log("consonants: ", consonantsCount);
}
let char = "abcdefghijklmnopqrstuvwxyz";

countCharecter(char);


//*OR


function countCharacter(str) {
  str = str.toLowerCase();

  let vowels = str.match(/[aeiou]/g) || [];
  let consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/g) || [];

  console.log("Vowels:", vowels.length);
  console.log("Consonants:", consonants.length);
}

countCharacter("abcdefghijklmnopqrstuvwxyz");
