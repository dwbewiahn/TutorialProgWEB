var express = require('express');
var router = express.Router();
var mUnits = require('../models/unitsModel');
 
/* GET units listing. */
router.get('/', async function(req, res, next) {
      res.send(await mUnits.getAllUnits());
});

module.exports = router;
