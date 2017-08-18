function addToBackOfNew(arr, element) {
  var newArray = [];
  for(var i = 0; i <arr.length; i++) {
    newArray.push(arr[i]);
  }
  newArray.push(element);
  return newArray;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
