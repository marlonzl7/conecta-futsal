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

module.exports = {
    cadastrar
}