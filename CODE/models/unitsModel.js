var units = [
    { unit: "Mathematics", semester: "3º semester", etcs: 6 },
    { unit: "Literature", semester: "2º semester", etcs: 6 },
    { unit: "Laws", semester: "1º semester", etcs: 3 },
    { unit: "Informatics", semester: "1º semester", etcs: 6 },
    { unit: "Cooking", semester: "2º semester", etcs: 3 }
];

module.exports.getAllUnits = function () {
    return units;
}

