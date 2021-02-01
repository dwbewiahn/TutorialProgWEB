/** Exercicio Anterior
var students = [
    { name: "Mary", id: 101 },
    { name: "John", id: 202 },
    { name: "Anthony", id: 303 }
];

var units = [
    { name: "Mathematics", semester: "1º Semester", etcs: 6 },
    { name: "Physics", semester: "2º Semester", etcs: 6 },
    { name: "Literature", semester: "3º Semester", etcs: 3 },
];

window.onload = function () {

    let studentsOpt = "";
    for (let i in students) {
        studentsOpt += "<option value='" + i + "'>" + students[i].name + "</option>";
    }
    document.getElementById("studentName").innerHTML = studentsOpt;
    document.getElementById("studentName").value ="";


    let unitsOpt = "";;
    for (let i in units) {
        unitsOpt += "<option value='" + i + "'>" + units[i].name + "</option>"
    }
    document.getElementById("unitName").innerHTML = unitsOpt;
    document.getElementById("unitName").value ="";
    
}


function getCalculate() {

    let studentIndex = document.getElementById("studentName").value;
    let unitIndex = document.getElementById("unitName").value;

    let proGrade = parseFloat(document.getElementById("projectGrade").value);
    let perProGrade = parseFloat(document.getElementById("projectGradePerc").value);

    let testGrade = parseFloat(document.getElementById("testGrade").value);
    let perTestGrade = parseFloat(document.getElementById("testGradePerc").value);


    let finalScore = "";

    if (studentIndex == "" || unitIndex == "" || isNaN(proGrade) || isNaN(perProGrade) || isNaN(testGrade) || isNaN(perTestGrade)) {
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

    document.getElementById("finalGrade").innerHTML = "Student " + students[studentIndex].name + " with number "+students[studentIndex].id+" obtained " + finalScore.toFixed(1) + " on the " + units[unitIndex].name + " unit ("+units[unitIndex].etcs +" ETCS) of the "+units[unitIndex].semester+"";

}

function resetAll() {

    document.getElementById("gradeStudent").reset();
    document.getElementById("finalGrade").innerHTML = "";
    document.getElementById("unitName").value ="";
    document.getElementById("studentName").value ="";

}
**/

var students = [
    { name: "Mary", id: 101 },
    { name: "John", id: 202 },
    { name: "Anthony", id: 303 }
];

var units = [
    { name: "Mathematics", semester: "1º Semester", etcs: 6 },
    { name: "Physics", semester: "2º Semester", etcs: 6 },
    { name: "Literature", semester: "3º Semester", etcs: 3 },
];

window.onload = function () {

    let studentsOpt = "";
    for (let i in students) {
        studentsOpt += "<option value='" + i + "'>" + students[i].name + "</option>";
    }

    document.getElementById("studentName").innerHTML = studentsOpt;
    document.getElementById("studentName").value = "";

    let unitsOpt = "";
    for (let i in units) {
        unitsOpt += "<option value='" + i + "'>" + units[i].name + "</option>"
    }

    document.getElementById("unitName").innerHTML = unitsOpt;
    document.getElementById("unitName").value = "";
}

function getCalculate() {

    let studentGrade = {
        name: students[document.getElementById("studentName").value].name,
        unit: units[document.getElementById("unitName").value].name,
        proGrade: parseFloat(document.getElementById("projectGrade").value),
        perProGrade: parseFloat(document.getElementById("projectGradePerc").value),
        testGrade: parseFloat(document.getElementById("testGrade").value),
        perTestGrade: parseFloat(document.getElementById("testGradePerc").value),
        finalScore: 0,
    };

    let noError = true;

    noError = checkGradeProject(studentGrade);
    noError = checkGradeTest(studentGrade);
    noError = checkPercentagePro(studentGrade);
    noError = checkPercentageTest(studentGrade);
    noError = checkPercentageSum(studentGrade);

    if (!noError) return;

    studentGrade.finalScore = ((studentGrade.proGrade * studentGrade.perProGrade) + (studentGrade.testGrade * studentGrade.perTestGrade));
    sessionStorage.setItem("studentGrade", JSON.stringify(studentGrade));
    window.location = "studentGradeSubmited.html";

}

function checkGradeProject(obj) {
    let eProject = document.getElementById("eProject");
    if (obj.proGrade < 0 || obj.proGrade > 20) {
        eProject.style.display = "block";
        return false;
    }
    eProject.style.display = "none";
    return true;
}

function checkGradeTest(obj) {
    let eTest = document.getElementById("eTest");
    if (obj.testGrade < 0 || obj.testGrade > 20) {
        eTest.style.display = "block";
        return false;
    }
    eTest.style.display = "none";
    return true;
}

function checkPercentagePro(obj) {
    let ePercPro = document.getElementById("ePercPro");
    if (obj.perProGrade < 0 || obj.perProGrade > 1) {
        ePercPro.style.display = "block";
        return false;
    }
    ePercPro.style.display = "none";
    return true;

}

function checkPercentageTest(obj) {
    let ePercTest = document.getElementById("ePercTest");
    if (obj.perTestGrade < 0 || obj.perTestGrade > 1)  {
        ePercTest.style.display = "block";
        return false;
    }
    ePercTest.style.display = "none";
    return true;

}

function checkPercentageSum(obj) {
    let ePerSum = document.getElementById("ePerSum");
    if ((obj.perProGrade + obj.perTestGrade) == 1) {
        ePerSum.style.display = "none";
        return true;
    }
    ePerSum.style.display = "block";
    return false;

}

function resetAll() {

    document.getElementById("gradeStudent").reset();
    document.getElementById("unitName").value = "";
    document.getElementById("studentName").value = "";

}
