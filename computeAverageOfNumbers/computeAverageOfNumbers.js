function computeAverageOfNumbers(nums) {
  var count = 0;
  var total;
  if(nums.length >= 1) {
    for (var i =0; i<nums.length; i++) {
    count += nums[i];
    }
      total = count/(nums.length);
  }
  else {
    total = 0;
  }
return total;
}

var input = [];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
