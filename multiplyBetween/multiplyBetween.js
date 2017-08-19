function multiplyBetween(num1, num2) {
  var arr = [];
  if (num1 < num2) {
    for (var i = num1; i < num2; i++) {
      arr.push(i);
    }
    var product = 1;
    arr.forEach(function (each) {
      product *= each;
    });
    return product;
  }
  else {
    return 0;
  }
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24