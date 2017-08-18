function computeFactorialOfN(n) { 
{  
    // If the number is less than 0, reject it.  
    if (n < 0) {  
        return -1;  
    }  
    // If the number is 0, its factorial is 1.  
    else if (n === 0) {  
        return 1;  
    }  
    var tmp = n;  
    while (n-- > 2) {  
        tmp *= n;  
    }  
    return tmp;  
} 
}
  // your code here
var output = computeFactorialOfN(3);
console.log(output); // --> 6
