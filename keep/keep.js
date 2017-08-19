function keep(array, keeper) {
  var keeperArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === keeper)
      keeperArr.push(array[i]);
  }
  return keeperArr;
}

var output = keep([1, 2, 3, 2, 1], 2);
console.log(output); //--> [2, 2]