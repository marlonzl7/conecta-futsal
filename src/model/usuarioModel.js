var database = require("../database/config");
var { gerarHash, compararSenhas } = require("./../utils/senhaUtils");

async function verificarExistencia(email) {
    const instrucao = `SELECT id_usuario FROM usuario WHERE email = ?`;
    const parametro = [email];
    const resultado = await database.execute(instrucao, parametro);

    return resultado.length > 0;
}

async function cadastrar(nome, sobrenome, dataNascimento, telefone, email, senha, tipoUsuario) {

    const existe = await verificarExistencia(email);

    if (existe) {
        throw "EMAIL_DUPLICADO";
    }

    if (tipoUsuario.toLowerCase() !== "jogador" && tipoUsuario.toLowerCase() !== "tecnico") {
        throw "TIPO_USUARIO_INVALIDO";
    }

    const senhaHash = gerarHash(senha);

    const instrucao = `
        INSERT INTO usuario (nome, sobrenome, data_nascimento, telefone, email, senha) 
            VALUES (?, ?, ?, ?, ?, ?)
    `;

    const parametros = [nome, sobrenome, dataNascimento, telefone, email, senhaHash];

    const resultado = await database.execute(instrucao, parametros);

    if (tipoUsuario.toLowerCase() === "jogador") {
        const jogadorModel = require("./../model/jogadorModel");
        await jogadorModel.cadastrar(resultado.insertId)
    } else if (tipoUsuario.toLowerCase() === "tecnico") {
        const tecnicoModel = require("./../model/tecnicoModel");
        await tecnicoModel.cadastrar(resultado.insertId);
    }

    return resultado;
}

async function autenticar(email, senha) {
    const instrucao = `
        SELECT 
            u.id_usuario, 
            u.nome, 
            u.email, 
            u.senha,
            j.id_jogador,
            t.id_tecnico 
        FROM usuario u
            LEFT JOIN jogador j ON j.id_usuario = u.id_usuario
            LEFT JOIN tecnico t ON t.id_usuario = u.id_usuario
                WHERE email = ?
    `;

    const parametro = [email];
    const resultado = await database.execute(instrucao, parametro);

    const usuario = resultado.length ? resultado[0] : null;

    if (!usuario || !compararSenhas(senha, usuario.senha)) {
        throw "CREDENCIAIS_INVALIDAS";
    }

    return usuario;
}

async function buscarPorId(id_usuario) {
    const instrucao = `
        SELECT * FROM usuario u WHERE id_usuario = ?
    `;

    const parametro = [id_usuario];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

module.exports = {
    cadastrar,
    autenticar,
    buscarPorId
};