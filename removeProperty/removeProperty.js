function removeProperty(obj, key) {
  for (var x in obj) {
    if (obj[key]) {
      delete obj[key];
    }
  }
  return obj;
}

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined