function computeSumOfAllElements(arr) {
  var counter = 0;
  for(i=0;i<arr.length;i++) {
    counter += arr[i];
  }
  return counter;
}
computeSumOfAllElements([1,2,3]);

