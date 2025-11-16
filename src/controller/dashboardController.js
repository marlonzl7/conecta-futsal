var dashboardModel = require("../model/dashboardModel");

async function listarPeneirasPorUf(req, res) {
    try {
        const { uf } = req.body;

        const resultado = await dashboardModel.listarPeneirasPorUf(uf);
        
        res.status(200).json({ resultado });
    } catch (erro) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

async function listarTimesPorCidade(req, res) {
    try {
        const { cidade } = req.body;

        const resultado = await dashboardModel.listarTimesPorCidade(cidade);
        
        res.status(200).json({ resultado });
    } catch (erro) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

module.exports = {
    listarPeneirasPorUf,
    listarTimesPorCidade
}