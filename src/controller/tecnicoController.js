var tecnicoModelModel = require("../model/tecnicoModel");

async function listar(req, res) {
    try {
        const resultado = await tecnicoModel.listar();

        return res.status(200).json({ message: "Técnicos listados com sucesso!", resultado });
    } catch (erro) {
        console.error("Erro ao listar peneiras: ", erro);

        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}

// async function buscarPorId(req, res) {
//     try {
//         const { idTecnico } = req.params;

//         const resultado = await tecnicoModel.buscarPorId(idTecnico);

//         return res.status(200).json({ message: "Técnico listado com sucesso", resultado });

//     } catch (erro) {
//         console.error("Erro ao listar peneiras: ", erro);

//         return res.status(500).json({ error: "Erro interno no servidor." });
//     }
// }

module.exports = {
    listar
}