var inscricaoModel = require("../model/inscricaoModel");

async function cadastrar(req, res) {
    try {
        const { idUsuario, idPeneira } = req.body;

        console.log(req.body);

        const resultado = await inscricaoModel.cadastrar(idUsuario, idPeneira);

        res.status(201).json({ message: "Inscrição realizada com sucesso!", resultado });
    } catch (erro) {
        console.error("Erro ao realizar inscrição: ", erro);

        if (erro == "TIPO_USUARIO_DIFERENTE_DE_JOGADOR") {
            res.status(500).json({ error: "Usuário não cadastrado como jogador" });
        } else if (erro == "TIPO_USUARIO_DIFERENTE_DE_JOGADOR") {
            res.status(409).json({ error: "Usuário já cadastrado nessa peneira" });
        } else {
            res.status(500).json({ error: "Erro interno no servidor." });
        }

    }
}

module.exports = {
    cadastrar
}