function findShortestOfThreeWords(word1, word2, word3) {
  var wordArr = [word1, word2, word3];
  var shortestWord = word1;
  for (var i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length < word1.length) {
      shortestWord = wordArr[i];
    }
  }
  return shortestWord;
}

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'