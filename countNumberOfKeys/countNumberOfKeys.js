function countNumberOfKeys(obj) {
  var count = 0;
  for (var x in obj) {
    if (obj.hasOwnProperty(x));
    count++;
  }
  return count;
}

countNumberOfKeys({ a: 1, b: 2, c: 3 });