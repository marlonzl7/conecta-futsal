var express = require("express");
var router = express.Router();

var dashboardController = require("../controller/dashboardController");

router.get("/", function (req, res) {
    res.render("/dashboard/index");
})

router.get("/jogador/graficos/peneiras-abertas-estado", function (req, res) {
    dashboardController.listarPeneirasAbertasNoEstadoComIdUsuario(req, res);
})

router.get("/jogador/kpis/peneiras-abertas-cidade", function (req, res) {
    dashboardController.listarQuantidadePeneirasAbertasNaCidadeComIdUsuario(req, res);
})

router.get("/jogador/kpis/times-cidade", function (req, res) {
    dashboardController.listarQuantidadeTimesNaCidadeComIdUsuario(req, res);
})

router.get("/jogador/kpis/quantidade-peneiras-inscritas", function(req, res) {
    dashboardController.obterQuantidadePeneirasInscritas(req, res);
})

router.get("/tecnico/graficos/inscricoes-por-peneira", function (req, res) {
    dashboardController.obterInscricoesPorPeneira(req, res);
})

// router.get("/tecnico/graficos/demanda-por-posicao", function (req, res) {
    
// })

// router.get("/tecnico/graficos/jogadores-por-cidade-estado", function (req, res) {
    
// })

// router.get("/tecnico/graficos/total-jogadores-por-posicao-estado", function (req, res) {
    
// })

// router.get("/tecnico/graficos/taxa-crescimento-inscricoes", function (req, res) {
    
// })


// router.get("/tecnico/kpis/total-jogadores-inscritos-peneiras", function (req, res) {

// })

// router.get("/tecnico/kpis/distribuicao-inscricoes-por-posicao", function (req, res) {

// })

// router.get("/tecnico/kpis/posicao-maior-demanda", function (req, res) {

// })

// router.get("/tecnico/kpis/cidades-com-mais-candidatos", function (req, res) {

// })

module.exports = router;