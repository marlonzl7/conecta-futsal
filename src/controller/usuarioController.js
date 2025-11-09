var usuarioModel = require("../model/usuarioModel");

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

module.exports = {
    cadastrar
}