var express = require("express");
var router = express.Router();

var timeController = require("../controller/timeController");

router.post("/cadastrar", function(req, res) {
    timeController.cadastrar(req, res);
})

router.get("/listar", function(req, res) {
    timeController.listar(req, res);
})

router.get("/quantidade/:idUsuario", function(req, res) {
    timeController.obterTimePorCidadePorIdUsuario(req, res);
})

module.exports = router;