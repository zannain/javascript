function filterOddElements(arr) {
  var oddArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]