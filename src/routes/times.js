var express = require("express");
var router = express.Router();

var timeController = require("../controller/timeController");

router.post("/cadastrar", function(req, res) {
    timeController.cadastrar(req, res);
})

router.get("/listar", function(req, res) {
    timeController.listar(req, res);
})

router.get("/pesquisar", function(req, res) {
    timeController.pesquisar(req, res);
})

module.exports = router;