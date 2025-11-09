var express = require("express");
var router = express.Router();

var userController = require("../controller/usuarioController");

router.post("/cadastrar", function(req, res) {
    userController.cadastrar(req, res);
})

module.exports = router;