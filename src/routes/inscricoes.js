var express = require("express");
var router = express.Router();

var inscricaoController = require("../controller/inscricaoController");

router.post("/cadastrar", function (req, res) {
    inscricaoController.cadastrar(req, res);
})

module.exports = router;