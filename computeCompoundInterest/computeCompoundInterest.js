function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  
  var frequency = 1 + (interestRate/compoundingFrequency);
  var nt = compoundingFrequency * timeInYears;
  var annualInterest = Math.pow(frequency,nt);
  var compoundInterest =(principal * annualInterest) - principal;
  return compoundInterest;
  
}
var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061
