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
        const { q } = req.query;

        if (q) {
            const resultado = await timeModel.pesquisar(q);
            return res.status(200).json({ resultado });
        }

        const resultado = await timeModel.listar();
        return res.status(200).json({ resultado });
    } catch (erro) {
        console.error("Erro ao listar times: ", erro);

        res.status(500).json({ error: "Erro interno no servidor. "});
    }
}

async function obterTimePorCidadePorIdUsuario(req, res) {
    try {
        const { idUsuario } = req.params;

        const resultado = await timeModel.quantidadeTimePorCidadePorUsuario(idUsuario);

        return res.status(200).json({ resultado });
    } catch (erro) {
        console.error("Erro ao buscar times na cidade do usuário: ", erro);
    }
}

module.exports = {
    cadastrar,
    listar,
    obterTimePorCidadePorIdUsuario
}