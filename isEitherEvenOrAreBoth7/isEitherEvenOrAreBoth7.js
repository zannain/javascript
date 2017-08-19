function isEitherEvenOrAreBoth7(num1, num2) {
  var bool;
  var arr = [num1, num2];
  if ((num1 === 7 && num2 === 7) || (num1 % 2 === 0 || num2 % 2 === 0)) {
    return true;
  } else {
    return false;
  }
}

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false