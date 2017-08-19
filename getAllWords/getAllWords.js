function getAllWords(str) {
  if (str.length > 0)
    return str.split(" ");
  else {
    return [];
  }
}

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']