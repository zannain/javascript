function getAllLetters(str) {
  var letters = [];
  for (var i = 0; i < str.length; i++) {
    letters.push(str[i]);
  }
  return letters;
}

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']