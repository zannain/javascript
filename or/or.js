function or(expression1, expression2) {
  if (expression1) {
    return expression1;
  }
  else if (expression2) {
    return expression2;
  } else {
    return false;
  }
}

var output = or(true, false);
console.log(output); // --> true;