function removeStringValuesLongerThan(num, obj) {
  for (var x in obj) {
    if ((typeof obj[x] === "string") && obj[x].length > num) {
      delete obj[x];
    }
  }
  return obj;
}