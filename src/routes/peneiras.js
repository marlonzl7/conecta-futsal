var express = require("express");
var router = express.Router();

var peneiraController = require("../controller/peneiraController");

router.post("/", function (req, res) {
    peneiraController.cadastrar(req, res);
})

router.get("/", function (req, res) {
    peneiraController.listar(req, res);
})

router.get("/quantidade", function(req, res) {
    peneiraController.listarQuantidadePorFiltro(req, res);
})

router.get("/:idPeneira", function (req, res) {
    peneiraController.buscarPorId(req, res);
})

module.exports = router;