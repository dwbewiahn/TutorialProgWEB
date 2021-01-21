

var name = "JohnSmith";
var unit1 = "Mathematics";
var gradeUnit1 = 7.5;
var unit2 = "Literature";
var gradeUnit2 = 11.2;

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

}