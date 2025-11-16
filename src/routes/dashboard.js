var express = require("express");
var router = express.Router();

var dashboardController = require("../controller/dashboardController");

router.post("/peneiras/listarPorUf", function(req, res) {
    dashboardController.listarPorUf(req, res);
})

module.exports = router;