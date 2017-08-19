function filterEvenElements(arr) {
  var evenArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
      console.log(evenArr);
    }
  }
  return evenArr;
}


var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
