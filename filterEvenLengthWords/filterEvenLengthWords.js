function filterEvenLengthWords(words) {
  var evenArr = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 0) {
      evenArr.push(words[i]);
    }
  }
  return evenArr;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']