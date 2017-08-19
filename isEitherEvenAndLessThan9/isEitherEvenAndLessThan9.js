function isEitherEvenAndLessThan9(num1, num2) {
  var bool;
  var arr = [num1, num2];
  if (num1 < 9 && num2 < 9) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        bool = true;
        break;
      } else {
        bool = false;
      }
    }
  } else {
    return false;
  }
  return bool;
}
var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true