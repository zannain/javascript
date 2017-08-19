function computeProductOfAllElements(arr) {
  var product = 1;
  if (arr.length >= 1)
  for (var i = 0; i<arr.length; i++) {
    product *= arr[i];
  }
  else {
    product = 0;
  }
  return product;
  // your code here
}

