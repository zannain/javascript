function removeEvenValues(obj) {
  for (var x in obj) {
    if (obj[x] % 2 === 0) {
      delete obj[x];
    }
  }
  return obj;
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }