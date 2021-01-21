/* ******Exercicio passado****
var name = "JohnSmith";
var unit1 = "Mathematics";
var gradeUnit1 = 7.5;
var unit2 = "Literature";
var gradeUnit2 = 11.2; */

/* ******Exercicio passado****
window.onload = function () {
    document.getElementById("student").innerHTML = name+" Grades"

    let gradeGrid = "";
    if(gradeUnit1 < 9.5){
        gradeGrid += "<section class='fail'><div class='twoFirstLetters'><h3>"+unit1.substring(0,2)+"</h3></div><div><h1>"+unit1+"</h1>"+"<p>Grade: "+gradeUnit1+"</p></div></section>";
    }
    else{
        gradeGrid += "<section><div class='twoFirstLetters'><h3>"+unit1.substring(0,2)+"</h3></div><div><h1>"+unit1+"</h1>"+"<p>Grade: "+gradeUnit1+"</p></div></section>";
    }

    if(gradeUnit2 < 9.5){
        gradeGrid += "<section class='fail'><div class='twoFirstLetters'><h3>"+unit2.substring(0,2)+"</h3></div><div><h1>"+unit2+"</h1>"+"<p>Grade: "+gradeUnit2+"</p></div></section>";
    }
    else{
         gradeGrid += "<section><div class='twoFirstLetters'><h3>"+unit2.substring(0,2)+"</h3></div><div><h1>"+unit2+"</h1>"+"<p>Grade: "+gradeUnit2+"</p></div></section>";
    }
    document.getElementById("grades").innerHTML = gradeGrid;
} */

var name = "JohnSmith";
var student = [
    { unit: "Mathematics", grade: 8.3, semester: "3º semester", etcs: 6 },
    { unit: "Literature", grade: 11.2, semester: "2º semester", etcs: 6 },
    { unit: "Laws", grade: 18.5, semester: "1º semester", etcs: 3 },
    { unit: "Informatics", grade: 14.3, semester: "1º semester", etcs: 6 },
    { unit: "Cooking", grade: 7.4, semester: "2º semester", etcs: 3 }
];

function createUnit(unitInfo) {

    let status = "";
    if (unitInfo.grade < 9.5) {
        status = "class='fail'";
    }
    return "<section " + status + " ><div class='twoFirstLetters'><h3>" + unitInfo.unit.substring(0, 2) + "</h3></div><div><h1>" + unitInfo.unit + "</h1>" + "<p>Grade: " + unitInfo.grade + "</p><p>Semester: " + unitInfo.semester + "</p><p>ETCS: " + unitInfo.etcs + "</p></div></section>";
}

window.onload = function () {
    document.getElementById("student").innerHTML = name + " Grades"

    let gradeGrid = "";
    for (let i in student) {
        gradeGrid += createUnit(student[i]);
    }

    document.getElementById("grades").innerHTML = gradeGrid;

    let gradesSum = 0;
    let unitsPassed = 0;
    let unitsFail = 0;
    let etcsSUm = 0;

    for (let i in student) {
        if (student[i].grade < 9.5) {
            unitsFail++;
        }
        else {
            gradesSum += (student[i].grade) * (student[i].etcs);
            etcsSUm += student[i].etcs
            unitsPassed++;
        }

    }
    document.getElementById("summary").innerHTML = "<summary>Avarage: " + (gradesSum / etcsSUm).toFixed(1) + "</summary><p>Failed Units: " + unitsFail + "</p><p>Passed Units: " + unitsPassed + "</p>"


}

