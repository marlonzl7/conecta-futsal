var express = require("express");
var router = express.Router();

var enderecoController = require("../controller/enderecoController");

router.post("/cadastrar", function(req, res) {
    enderecoController.cadastrar(req, res);
})

module.exports = router;