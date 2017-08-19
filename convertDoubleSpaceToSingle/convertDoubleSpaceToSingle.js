function convertDoubleSpaceToSingle(str) {
 var splitString=str.split("  ");
  var newString= splitString.join(" ");
  return newString;
 // your code here
}
convertDoubleSpaceToSingle("string  with  double  spaces");
