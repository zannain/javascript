function findShortestElement(arr) {
  var shortestElement = arr[0];
  if (arr.length === 0) {
    return "";
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < shortestElement.length) {
      shortestElement = arr[i];
    }
  }
  return shortestElement;
}

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'