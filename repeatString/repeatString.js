function repeatString(string, num) {
  var newStr = string.repeat(num);
  return newStr;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'