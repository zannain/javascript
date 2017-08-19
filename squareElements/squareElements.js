function squareElements(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(Math.pow(arr[i], 2));
  }
  return newArr;
  // your code here
}