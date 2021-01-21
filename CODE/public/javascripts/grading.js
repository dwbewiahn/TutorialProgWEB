
function resetAll() {

    document.getElementById("gradeStudent").reset();
    document.getElementById("finalGrade").innerHTML = "";

}

var students = [
    { name: "Mary", id: 101 },
    { name: "John", id: 202 },
    { name: "Anthony", id: 303 }
];

var units = [
    { name: "Mathematics", semester: "1º Semester", etcs: 6 },
    { name: "physics", semester: "2º Semester", etcs: 6 },
    { name: "Literature", semester: "3º Semester", etcs: 3 },
];

window.onload = function () {

    let studentsOpt = "<option value=''></option>";
    for (let i in students) {
        studentsOpt += "<option value='" + i + "'>" + students[i].name + "</option>";
    }
    document.getElementById("studentName").innerHTML = studentsOpt;


    let unitsOpt = "<option value=''></option>";;
    for (let i in units) {
        unitsOpt += "<option value='" + i + "'>" + units[i].name + "</option>"
    }
    document.getElementById("unitName").innerHTML = unitsOpt;
}


function getCalculate() {

    let studentName = document.getElementById("studentName").value;
    let unitName = document.getElementById("unitName").value;

    let proGrade = parseFloat(document.getElementById("projectGrade").value);
    let perProGrade = parseFloat(document.getElementById("projectGradePerc").value);

    let testGrade = parseFloat(document.getElementById("testGrade").value);
    let perTestGrade = parseFloat(document.getElementById("testGradePerc").value);


    let finalScore = "";

    if (studentName == "" || unitName == "" || isNaN(proGrade) || isNaN(perProGrade) || isNaN(testGrade) || isNaN(perTestGrade)) {
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

    let studentIndex = document.getElementById("studentName").value;
    let unitIndex = document.getElementById("unitName").value;

    document.getElementById("finalGrade").innerHTML = "Student " + students[studentIndex].name + " with number "+students[studentIndex].id+" obtained " + finalScore.toFixed(1) + " on the " + units[unitIndex].name + " unit ("+units[unitIndex].etcs +" ETCS) of the "+units[unitIndex].semester+"";

}

