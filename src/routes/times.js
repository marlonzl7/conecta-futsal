var express = require("express");
var router = express.Router();

var timeController = require("../controller/timeController");

router.post("/cadastrar", function(req, res) {
    timeController.cadastrar(req, res);
})

module.exports = router;