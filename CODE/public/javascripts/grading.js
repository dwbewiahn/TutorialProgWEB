function getCalculate() {

    let studentName = document.getElementById("studentName").value;
    let unitName = document.getElementById("unitName").value;

    let proGrade = parseFloat(document.getElementById("projectGrade").value);
    let perProGrade = parseFloat(document.getElementById("projectGradePerc").value);

    let testGrade = parseFloat(document.getElementById("testGrade").value);
    let perTestGrade = parseFloat(document.getElementById("testGradePerc").value);

   
    let finalScore = "";

    if (studentName == "" || unitName == "" || isNaN(proGrade) || isNaN(perProGrade)  || isNaN(testGrade)  || isNaN(perTestGrade)) {
        alert("Fill all the required fields")
        return;
    }

    if ((perProGrade + perTestGrade) == 1) {
        finalScore = ((proGrade * perProGrade) + (testGrade * perTestGrade));
    }
    else {
        alert("The sum of the percentages must be 1");
        return;

    }

    document.getElementById("finalGrade").innerHTML = "Student " + studentName + " obtained " + finalScore.toFixed(1) + " on the " + unitName + " unit.";

}

function resetAll(){

    document.getElementById("gradeStudent").reset();
    document.getElementById("finalGrade").innerHTML = "";

}