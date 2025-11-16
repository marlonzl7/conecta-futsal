var express = require("express");
var router = express.Router();

var peneiraController = require("../controller/peneiraController");

router.post("/cadastrar", function (req, res) {
    peneiraController.cadastrar(req, res);
})

module.exports = router;