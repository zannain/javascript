function removeArrayValues(obj) {
  for (var x in obj) {
    if (typeof obj[x] === 'object') {
      delete obj[x];
    }
    else {
      console.log(obj[x]);
    }
  }
}

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }