var express = require("express");
var router = express.Router();

var categoriaBaseController = require("../controller/categoriasBaseController");

router.get("/listar", function(req, res) {
    categoriaBaseController.listar(req, res);
})

module.exports = router;