var express = require("express");
var router = express.Router();

var enderecoController = require("../controller/enderecoController");

router.post("/cadastrar", function(req, res) {
    enderecoController.cadastrar(req, res);
})

router.get("/listar/idEndereco", function(req, res) {
    enderecoController.listarPorIdEndereco(req, res);
})

router.get("/listar/idUsuario", function(req, res) {
    enderecoController.listarPorIdUsuario(req, res);
})

module.exports = router;