function convertScoreToGrade(score) {
  var letterGrade;
  if (score <= 100 && score >=90) {
    letterGrade = "A";
  }
  else if (score < 90 && score >= 80) {
    letterGrade = "B";
  }
  else if (score <80 && score >= 70) {
    letterGrade = "C";
  }
  else if (score < 70 && score >= 60) {
    letterGrade = "D";
  }
  else if (score < 60 && score >= 0) {
    letterGrade = "F";
  }
  else {
    letterGrade = "INVALID SCORE";
  }
  return letterGrade;
 }
 
 convertScoreToGrade(91);
