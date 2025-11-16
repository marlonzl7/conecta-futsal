var express = require("express");
var router = express.Router();

var peneiraController = require("../controller/peneiraController");

router.post("/cadastrar", function (req, res) {
    peneiraController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    peneiraController.listar(req, res);
})

router.get("/listar-por-id", function (req, res) {
    peneiraController.listarPorId(req, res);
})


router.get("/pesquisar", function (req, res) {
    peneiraController.pesquisar(req, res)
})

module.exports = router;