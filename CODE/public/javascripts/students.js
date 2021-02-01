var students = [
    {name:"John Smith", number: 201, id: 12},
    {name:"Mary Jane", number: 512, id: 31},
    {name:"Jane Dow", number: 45, id: 3}
];


window.onload = function(){

    studentsGrid = "";
    for(let i in students){
        studentsGrid+="<section onclick='showStudent("+i+")'><h3>"+students[i].name+"</h3><p>Number: "+students[i].number+"</p></section>";
    }

    document.getElementById("students").innerHTML = studentsGrid;

}

function showStudent(idx){
    sessionStorage.setItem("itemPos",idx);
    sessionStorage.setItem("studentName", students[idx].name);

    window.location = " studentGrades.html"
}