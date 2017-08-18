function addToFrontOfNew(arr, element) {
  var newArray = [];
  newArray = arr.slice(0);
  newArray.unshift(element);
  return newArray;
}

var output = addToFrontOfNew([1, 2], 3);
console.log(output); // -> [3, 1, 2]
