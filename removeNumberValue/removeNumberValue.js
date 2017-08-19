function removeNumberValues(obj) {
  for (var x in obj) {
    if (typeof obj[x] === "number") {
      delete obj[x];
    }
  }
  return obj;
}