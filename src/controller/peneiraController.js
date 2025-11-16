var peneiraModel = require("../model/peneiraModel");

async function cadastrar(req, res) {
    try {
        const { 
            titulo, descricao, dataInicioInscricao, dataFinalInscricao, dataHoraRealizacao, idTime, idEndereco, idCategoriaBase 
        } = req.body;

        const resultado = await peneiraModel.cadastrar(
            titulo, descricao, dataInicioInscricao, dataFinalInscricao, dataHoraRealizacao, idTime, idEndereco, idCategoriaBase
        );

        res.status(201).json({ message: "Peneira cadastrada com sucesso!", resultado });
    } catch (erro) {
        console.error("Erro ao cadastrar peneira: ", erro);

        res.status(500).json({ error: "Erro interno no servidor." });
    }
}

async function listar(req, res) {
    try {
        const resultado = await peneiraModel.listar();

        res.status(200).json({ resultado });
    } catch (erro) {
        console.error("Erro ao listar peneiras: ", erro);

        res.status(500).json({ error: "Erro interno no servidor. "});
    }
}

async function pesquisar(req, res) {
    try {
        const { q } = req.query;

        const resultado = await peneiraModel.pesquisar(q);

        res.status(200).json({ resultado });
    } catch (erro) {
        console.error("Erro ao pesquisar por peneira: ", erro);

        res.status(500).json({ error: "Erro interno no servidor." });
    }
}

module.exports = {
    cadastrar,
    listar,
    pesquisar
}