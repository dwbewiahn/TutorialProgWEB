window.onload = function(){

    let studentGrade = JSON.parse(sessionStorage.getItem("studentGrade"));

    let result = "Passed";
    let statusClass = "passed";
    if(studentGrade.finalScore < 9.5){
        statusClass = "fail";     
        result = "Failed";
    }

    document.getElementById("name").innerHTML =studentGrade.name;
    document.getElementById("gProject").innerHTML =studentGrade.proGrade;
    document.getElementById("gTest").innerHTML =studentGrade.testGrade;
    document.getElementById("finalScore").innerHTML = studentGrade.finalScore + " (Project: "+studentGrade.perProGrade+"% + Test: "+studentGrade.perTestGrade+"%)";
    document.getElementById("result").innerHTML = "The student has "+result+" the unit."
    document.getElementById("result").classList.add(statusClass);


}

