function removeOddValues(obj) {
  for (var x in obj) {
    if (obj[x] % 2 !== 0) {
      delete obj[x];
    }
  }
  return obj;
}