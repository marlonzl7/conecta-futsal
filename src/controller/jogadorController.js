var jogadorModel = require("../model/jogadorModel");

async function listar(req, res) {

    try {
        const resultado = await jogadorModel.listar();

        return res.status(200).json({ message: "Jogadores listados com sucesso!", resultado });
    } catch (erro) {
        console.error("Erro ao listar peneiras: ", erro);

        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}

async function listarPorId(req, res) {
    try {
        const { id_jogador } = req.query;

        const resultado = await jogadorModel.buscarPorId(id_jogador);

        return res.status(200).json({ message: "Jogador listado com sucesso", resultado });

    } catch (erro) {
        console.error("Erro ao listar peneiras: ", erro);

        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}

module.exports = {
    listar,
    listarPorId
}