function sumDigits(num) {
  var toStr = num.toString();
  var sum = 0;
  for (var i = 0; i < toStr.length; i++) {
    if (toStr[i] !== '-') {
      sum += parseInt(toStr[i]);
    } else {
      sum -= parseInt(toStr[i + 1]);
      i += 2;
    }
  }
  return sum;
}

var output = sumDigits(1148);
console.log(output); // --> 14