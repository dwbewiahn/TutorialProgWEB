var students = [
    { name: "John Smith", unit: "Mathematics", grade: 8.3 },
    { name: "Mary Jane", unit: "Literature", grade: 11.2 },
    { name: "Jane Dow", unit: "", grade: 18.5 }
];

module.exports.getAllStudents = function () {
    return students;
}

module.exports.getStudent = function(pos){
    return students[pos];    
}

module.exports.saveGrade = function(pos, objUnit){
    
    if(students[pos].unit == objUnit.unit){
        students[pos].grade = objUnit.grade;
        return {msg: "Changed grade of unit "+objUnit.unit};
    } 
   
        students[pos].unit = objUnit.unit;
        students[pos].grade = objUnit.grade;
        return {msg: "Added grade for unit "+objUnit.unit};
      

}