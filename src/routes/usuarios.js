var express = require("express");
var router = express.Router();

var usuarioController = require("../controller/usuarioController");

router.post("/cadastrar", function(req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function(req, res) {
    usuarioController.autenticar(req, res);
})

router.get("/buscar", function(req, res) {
    usuarioController.buscarPorId(req, res);
})

module.exports = router;