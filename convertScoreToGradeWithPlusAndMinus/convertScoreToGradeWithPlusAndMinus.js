function convertScoreToGradeWithPlusAndMinus(score) {
  var letterGrade;
  var num;
  var plus;
  if (score >= 0 && score <= 100) {
    if (score <= 100 && score >= 90) {
      letterGrade = "A";
    }
    else if (score < 90 && score >= 80) {
      letterGrade = "B";
    }
    else if (score < 80 && score >= 70) {
      letterGrade = "C";
    }
    else if (score < 70 && score >= 60) {
      letterGrade = "D";
    }
    else if (score < 60 && score >= 0) {
      letterGrade = "F";
    }
  }
  else if (score > 100 || score < 0) {
    letterGrade = "INVALID SCORE";
  }
  else {
    letterGrade = "INVALID SCORE";
  }
  if (letterGrade !== "INVALID SCORE" && score >= 0 && score <= 100) {
    num = score.toString();
    if (num[1] === '8' || num[1] === "9" || num[1] === "0" && num[2] > 5 || num.length > 2) {
      letterGrade = letterGrade + "+";
    }
    else if (num[1] === "2" || num[1] === "1" || num[1] === "0" && num.length <= 2) {
      letterGrade = letterGrade + "-";
    }

  }
  return letterGrade;
}

convertScoreToGradeWithPlusAndMinus(100);