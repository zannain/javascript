function findMinLengthOfThreeWords(word1, word2, word3) {
  var words = [word1, word2, word3];
  var maxLengths = [];
  for (var i = 0; i < words.length; i++) {
    maxLengths.push(words[i].length);
  }
  var inx = Math.min(...maxLengths);
  return inx;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1


