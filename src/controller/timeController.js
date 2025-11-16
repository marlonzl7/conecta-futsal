var timeModel = require("../model/timeModel");

async function cadastrar(req, res) {
    try {
        const { nome, descricao, idTecnico, idEndereco } = req.body;

        const resultado = await timeModel.cadastrar(nome, descricao, idTecnico, idEndereco);

        res.status(201).json({ message: "Time cadastrado com sucesso!", resultado });
    } catch (erro) {
        console.error("Erro ao cadastrar time: ", erro);

        res.status(500).json({ error: "Erro interno no servidor." });
    }
}

async function listar(req, res) {
    try {
        const { cidade, uf, q } = req.query;

        if (cidade) {
            const resultado = await timeModel.filtrarPorCidade(cidade);

            res.status(200).json({ resultado });
        }

        if (uf) {
            const resultado = await timeModel.filtrarPorUf(uf);

            res.status(200).json({ resultado });
        }

        if (q) {
            const resultado = await timeModel.pesquisar(q);

            res.status(200).json({ resultado });
        }
    } catch (erro) {
        console.error("Erro ao listar times: ", erro);

        res.status(500).json({ error: "Erro interno no servidor. "});
    }
}

module.exports = {
    cadastrar,
    listar
}