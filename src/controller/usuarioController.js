var usuarioModel = require("../model/usuarioModel");
const { compararSenhas } = require("../utils/senhaUtils");

async function cadastrar(req, res) {
    try {
        const { nome, sobrenome, dataNascimento, telefone, email, senha, tipoUsuario } = req.body;

        const resultado = await usuarioModel.cadastrar(
            nome, sobrenome, dataNascimento, telefone, email, senha, tipoUsuario
        );

        res.status(201).json({ message: "Usuário cadastrado com sucesso!", resultado });
    } catch (erro) {
        console.error("Erro ao cadastrar usuário: ", erro);
        
        if (erro == "EMAIL_DUPLICADO") {
            res.status(409).json({ error: "Este email já está em uso. "});
        } else if (erro == "TIPO_USUARIO_INVALIDO") {
            res.status(400).json({ error: "Tipo de usuário inválido. São aceitos apenas [Jogador, Técnico] " });
        } else {
            res.status(500).json({ error: "Erro interno no servidor. "});
        }
    }
}

async function autenticar(req, res) {
    try {
        const { email, senha } = req.body;
        const usuario = await usuarioModel.autenticar(email, senha);

        res.status(200).json({
            idUsuario: usuario.id_usuario,
            nome: usuario.nome
        });
    } catch (erro) {
        console.error("Erro ao autenticar: ", erro);
        if (erro == "CREDENCIAIS_INVALIDAS") {
            res.status(401).json({ error: "Email ou senha inválidos. " });
        } else {
            res.status(500).json({ error: "Erro interno no servidor. "});
        }
    }
}

async function buscarPorId(req, res) {
    try {
        const { id } = req.query;

        console.log(id);

        const resultado = await usuarioModel.buscarPorId(id);

        console.log(resultado);

        return res.status(200).json({ message: "Usuário filtrado por id listado com sucesso", resultado });
    } catch (erro) {
        console.error("Erro ao autenticar: ", erro);
        
        res.status(500).json({ error: "Erro interno no servidor. "});
    }
}

module.exports = {
    cadastrar,
    autenticar,
    buscarPorId
}