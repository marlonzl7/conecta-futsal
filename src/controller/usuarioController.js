var usuarioModel = require("../model/usuarioModel");
const { compararSenhas } = require("../utils/senhaUtils");

async function cadastrar(req, res) {
    try {
        const { nome, sobrenome, dataNascimento, telefone, email, senha, tipo } = req.body;

        const idUsuario = await usuarioModel.cadastrar(
            nome, sobrenome, dataNascimento, telefone, email, senha
        );

        if (tipo.toLowerCase() === "jogador") {
            const jogadorModel = require("./../model/jogadorModel");
            await jogadorModel.cadastrar(idUsuario)
        } else if (tipo.toLowerCase() === "tecnico") {
            const tecnicoModel = require("./../model/tecnicoModel");
            await tecnicoModel.cadastrar(idUsuario);
        }

        res.status(201).json({ message: "Usuário cadastrado com sucesso!", idUsuario });
    } catch (erro) {
        console.error("Erro ao cadastrar usuário: ", erro);
        
        if (typeof erro === "string" && erro.includes("EMAIL_DUPLICADO")) {
            res.status(409).json({ error: "Este email já está em uso. "});
        } else {
            res.status(500).json({ error: "Erro interno no servidor. "});
        }
    }
}

async function autenticar(req, res) {
    try {
        const { email, senha } = req.body;
        const usuario = await usuarioModel.autenticar(email, senha);

        if (!usuario || !compararSenhas(senha, usuario.senha)) {
            return res.status(403).json({ error: "Email ou senha inválidos" });
        }

        res.status(200).json({
            idUsuario: usuario.id_usuario,
            nome: usuario.nome
        });
    } catch (erro) {
        console.error("Erro ao autenticar: ", erro);
        res.status(500).json({ error: "Erro interno no servidor. "});
    }
}

module.exports = {
    cadastrar,
    autenticar
}