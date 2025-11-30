var express = require("express");
var router = express.Router();

var jogadorController = require("../controller/jogadorController");

router.get("/", function(req, res) {
    jogadorController.listar(req, res);
})

// router.get("/:idUsuario", function(req, res) {
//     jogadorController.buscarPorId(req, res);
// })

module.exports = router;