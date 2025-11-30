var express = require("express");
var router = express.Router();

var tecnicoController = require("../controller/tecnicoController");

router.get("/", function(req, res) {
    tecnicoController.listar(req, res);
})

// router.get("/:idTecnico", function(req, res) {
//     tecnicoController.buscarPorId(req, res);
// })

module.exports = router;