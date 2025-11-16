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
        const { id, uf, q } = req.query;
        
        if (id) {
            const resultado = await peneiraModel.listarPorId(id);

            res.status(200).json({ resultado });
        }

        if (uf) {
            const resultado = await peneiraModel.listarPorUf(uf);

            res.status(200).json({ resultado });
        }   
        
        if (q) {
            const resultado = await peneiraModel.pesquisar(q);

            res.status(200).json({ resultado });
        }
    } catch (erro) {
        console.error("Erro ao listar peneiras: ", erro);

        res.status(500).json({ error: "Erro interno no servidor. "});
    }
}

module.exports = {
    cadastrar,
    listar
}