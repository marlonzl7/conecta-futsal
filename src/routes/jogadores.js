var express = require("express");
var router = express.Router();

var jogadorController = require("../controller/jogadorController");

router.get("/listar", function(req, res) {
    jogadorController.listar(req, res);
})

module.exports = router;