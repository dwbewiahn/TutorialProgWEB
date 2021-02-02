/**Exercicio anterior
    var units = [
    { unit: "Mathematics", semester: "3º semester", etcs: 6 },
    { unit: "Literature", semester: "2º semester", etcs: 6 },
    { unit: "Laws", semester: "1º semester", etcs: 3 },
    { unit: "Informatics", semester: "1º semester", etcs: 6 },
    { unit: "Cooking", semester: "2º semester", etcs: 3 }
];
**/

var pool = require('./connection');
const courseId = 2;

module.exports.getAllUnits = async function () {
  
    try {
        const sqlQuery = 'SELECT dis_id AS id, dis_nome AS name, dis_creditos AS ects, pla_semestre AS semester FROM disciplinas, planoestudos WHERE dis_id = pla_dis_id AND pla_cur_id = '+courseId;
        const units = await pool.query(sqlQuery);
        return units;

    } catch (error) {
        console.log(error);
        return error;
    }   
}

