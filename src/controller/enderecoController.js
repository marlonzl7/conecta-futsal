var enderecoModel = require("../model/enderecoModel");

async function cadastrar(req, res) {
    try {
        const { id_usuario, cep, logradouro, numero, complemento, bairro, cidade, uf } = req.body;

        const resultado = await enderecoModel.cadastrar(
            id_usuario, cep, logradouro, numero, complemento, bairro, cidade, uf
        );

        res.status(201).json({ message: "Endereço cadastrado com sucesso!", resultado });
    } catch (erro) {
        console.error("Erro ao cadastrar endereço: ", erro);

        res.status(500).json({ error: "Erro interno no servidor."});
    }
}

module.exports = {
    cadastrar
}