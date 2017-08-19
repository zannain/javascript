function countWords(str) {
  var string = str.split(" ");
  var newObj = {};
  var emptyObj = {};
  for (var i = 0; i < string.length; i++) {
    (newObj[string[i]] = (newObj[string[i]] || 0) + 1);
  }
  if (str === "") {
    return emptyObj;
  }
  return newObj;
}

countWords('ask a bunch get a bunch'); 