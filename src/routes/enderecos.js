var express = require("express");
var router = express.Router();

var enderecoController = require("../controller/enderecoController");

router.post("/cadastrar", function(req, res) {
    enderecoController.cadastrar(req, res);
})

router.get("/listar/endereco/:idEndereco", function(req, res) {
    enderecoController.buscarPorIdEndereco(req, res);
})

router.get("/listar/usuario/:idUsuario", function(req, res) {
    enderecoController.buscarPorIdUsuario(req, res);
})

router.get("/listar/ufs-validas", function(req, res) {
    enderecoController.listarUFs(req, res);
})

module.exports = router;