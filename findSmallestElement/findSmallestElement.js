function findSmallestElement(arr) {
  var check = arr[0];
  if (arr.length > 0) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < check) {
        check = arr[i];
      }
    }
    return check;
  } else {
    return 0;
  }
}


var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
