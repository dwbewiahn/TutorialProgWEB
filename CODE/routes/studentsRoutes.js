var express = require('express');
var router = express.Router();
var mStudents = require("../models/studentsModel");

/* GET students listing. */
router.get('/', async function(req, res, next) {
  res.send(await mStudents.getAllStudents() );
});

/* GET only one student from a position informed*/
router.get('/:pos', async function(req, res, next){
  res.send(await mStudents.getStudent(req.params.pos));
});

/* Save a Grade for a unit */

router.post('/:pos', async function(req, res, next){
  let pos = req.params.pos;
  let objUnit = req.body;
  res.send(await mStudents.saveGrade(pos, objUnit)); 
});

module.exports = router;