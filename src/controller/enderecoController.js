var enderecoModel = require("../model/enderecoModel");
const UFS = require("../utils/ufs");

async function cadastrar(req, res) {
    try {
        const { idUsuario, cep, logradouro, numero, complemento, bairro, cidade, uf } = req.body;

        const resultado = await enderecoModel.cadastrar(
            idUsuario, cep, logradouro, numero, complemento, bairro, cidade, uf
        );

        res.status(201).json({ message: "Endereço cadastrado com sucesso!", resultado });
    } catch (erro) {
        if (erro == "ENDERECO_EXISTENTE") {
            console.error("Erro ao cadastrar endereço: ", erro);
            return res.status(409).json({ error: "Usuário já possuí um endereço cadastrado. "});
        } else {
            console.error("Erro ao cadastrar endereço: ", erro);
            return res.status(500).json({ error: "Erro interno no servidor."});
        }  
    }
}

async function buscarPorIdEndereco(req, res) {
    try {
        const { idEndereco } = req.params;

        const resultado = await enderecoModel.buscarPorIdEndereco(idEndereco);

        res.status(200).json({ message: "Endereços de usuário listado com sucesso!", resultado });
    } catch (erro) {
        console.error("Erro ao listar endereço por id_endereco: ", erro);

        res.status(500).json({ error: "Erro interno no servidor."});
    }
}

async function buscarPorIdUsuario(req, res) {
    try {
        const { idUsuario } = req.params;

        const resultado = await enderecoModel.buscarPorIdUsuario(idUsuario);

        res.status(200).json({ message: "Endereços de usuário listado com sucesso!", resultado });
    } catch (erro) {
        console.error("Erro ao listar endereço por id_endereco: ", erro);

        res.status(500).json({ error: "Erro interno no servidor."});
    }
}

function listarUFs(req, res) {
    res.status(200).json(UFS);
}

module.exports = {
    cadastrar,
    buscarPorIdEndereco,
    buscarPorIdUsuario,
    listarUFs
}