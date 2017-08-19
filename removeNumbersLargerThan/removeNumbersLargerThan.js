function removeNumbersLargerThan(num, obj) {
  for (var x in obj) {
    if (obj[x] > num) {
      delete obj[x];
    }
  }
  return obj;
}