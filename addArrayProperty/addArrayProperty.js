function addArrayProperty(obj, key, arr) {
  obj[key] = myArray;
}
var myObj = {};
var myArray = [1, 4];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]
