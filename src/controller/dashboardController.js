var dashboardModel = require("../model/dashboardModel");

async function listarPorUf(req, res) {
    try {
        const { uf } = req.body;

        const resultado = await dashboardModel.listarPorUf(uf);
        
        res.status(200).json({ resultado });
    } catch (erro) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
}

module.exports = {
    listarPorUf
}