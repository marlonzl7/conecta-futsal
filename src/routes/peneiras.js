var express = require("express");
var router = express.Router();

var peneiraController = require("../controller/peneiraController");

router.post("/cadastrar", function (req, res) {
    peneiraController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    peneiraController.listar(req, res);
})

router.get("/listar-quantidade-por-regiao", function(req, res) {
    peneiraController.listarQuantidadePeneirasPorRegiao(req, res);
})

module.exports = router;