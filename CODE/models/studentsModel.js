/** Exercicio Anterior
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
**/

const courseId = 2;
var pool = require('./connection');


module.exports.getAllStudents = async function () {
    try {
        const sqlQuery = 'SELECT alu_id AS id, alu_nome AS name, 0 AS number FROM alunos WHERE alu_cur_id =' + courseId;
        const students = await pool.query(sqlQuery);
        return students;

    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports.getStudent = async function (pos) {
    try {
        let sqlQuery = 'SELECT alu_id AS id, alu_nome AS name, 0 AS number FROM alunos WHERE alu_id = ?';
        let students = await pool.query(sqlQuery, [pos]);
        let student = students[0];
        let sqlQuery2 = 'SELECT dis_id AS id, dis_nome AS name, dis_creditos AS ects, pla_semestre AS semester, ins_nota AS grade, ins_id FROM disciplinas, planoestudos,inscricoes WHERE dis_id = pla_dis_id AND ins_pla_dis_id = pla_dis_id AND ins_alu_id = ? AND pla_cur_id =' + courseId;
        student.grades = await pool.query(sqlQuery2, [pos]);
        return student;

    } catch (error) {
        console.log(error);
        return error;
    }
}




module.exports.saveGrade = async function (sId, objUnit) {

    try {
      let sqlQuery = 'SELECT ins_alu_id AS sId, dis_id AS uId FROM inscricoes, planoestudos, disciplinas WHERE ins_pla_dis_id = pla_dis_id AND pla_dis_id = dis_id AND ins_id = ?';
        verify = await pool.query(sqlQuery, [objUnit.uId]);
        let student = verify[0];

        if (student.sId == sId) {
            if (student.uId == objUnit.uId) {
                let sql = 'UPDATE inscricoes SET ins_dt_avaliacao= ? , ins_nota= ? WHERE ins_id= ?';
                let result = await pool.query(sql, [new Date(), objUnit.grade, objUnit.uId]);
                if (result.changedRows > 0) {
                    return { msg: "Grade Updated" };
                } else {
                    return { msg: "Grade Not Updated" };
                }
            } else {
                return { msg: 'inscription does not correspond to the student and/or unit' };
            }
        } else {
            return { msg: 'inscription does not correspond to the student and/or unit' };
        }
    } catch (error) {
        console.log(error);
        return error;
    }

}