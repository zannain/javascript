function removeStringValues(obj) {
  for (var x in obj) {
    if (typeof obj[x] === "string") {
      delete obj[x];
    }
  }
  return obj;
}