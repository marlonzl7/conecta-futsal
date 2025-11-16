var categoriaBaseController = require("../model/categoriasBaseModel");

async function listar(req, res) {
    try {
        const resultado = await categoriaBaseController.listar();
        console.log(resultado);

        res.status(201).json({ resultado });
    } catch (erro) {
        console.error("Erro ao listar categorias de base: ", erro);

        res.status(500).json({ error: "Erro interno no servidor." });
    }
}

module.exports = {
    listar
}