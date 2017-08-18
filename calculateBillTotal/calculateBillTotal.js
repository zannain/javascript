function calculateBillTotal(preTaxAndTipAmount) {
  var salesTax = preTaxAndTipAmount*0.095;
  var totalTip = preTaxAndTipAmount * 0.15;
  var total =preTaxAndTipAmount + totalTip + salesTax;
  return total;
  
}

var output = calculateBillTotal(20);
console.log(output); // --> 24.9
