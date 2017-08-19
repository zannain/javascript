function computeSumBetween(num1, num2) {
 var total = 0;
 if(num1 >= num2) {
   total = 0;
 }
 else if (num2 > num1) {
   for(var i = num1; i <num2; i++ ) {
     total = total + i;
   }
 }
 return total;
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9
