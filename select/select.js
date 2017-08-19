function select(arr, obj) {
  var newObj = {};
  for (var i = 0; i < arr.length; i++) {
    for (var x in obj) {
      if (arr[i] === x) {
        newObj[arr[i]] = obj[x];
      }
    }
  }
  return newObj;
}


var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }