var express = require("express");
var router = express.Router();

var dashboardController = require("../controller/dashboardController");

router.post("/peneiras/listarPorUf", function(req, res) {
    dashboardController.listarPeneirasPorUf(req, res);
})

router.post("/times/listarPorCidade", function(req, res) {
    dashboardController.listarTimesPorCidade(req, res);
})

module.exports = router;