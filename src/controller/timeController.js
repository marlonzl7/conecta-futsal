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

module.exports = {
    cadastrar
}