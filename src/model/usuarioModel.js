var database = require("../database/config");
var { gerarHash, compararSenhas } = require("./../utils/senhaUtils");

async function verificarExistencia(email) {
    const instrucao = `SELECT id_usuario FROM usuario WHERE email = ?`;
    const parametro = [email];
    const resultado = await database.execute(instrucao, parametro);

    return resultado.length > 0;
}

async function cadastrar(nome, sobrenome, dataNascimento, telefone, email, senha) {

    const existe = await verificarExistencia(email);

    if (existe) {
        throw "EMAIL_DUPLICADO";
    }

    const senhaHash = gerarHash(senha);

    const instrucao = `
        INSERT INTO usuario (nome, sobrenome, data_nascimento, telefone, email, senha) 
            VALUES (?, ?, ?, ?, ?, ?)
    `;

    const parametros = [nome, sobrenome, dataNascimento, telefone, email, senhaHash];

    const resultado = await database.execute(instrucao, parametros);

    console.log(resultado);

    return resultado;
}

async function autenticar(email, senha) {
    const instrucao = `SELECT id_usuario, nome, email, senha FROM usuario WHERE email = ?`;
    const parametro = [email];
    const resultado = await database.execute(instrucao, parametro);

    return resultado.length ? resultado[0] : null;
}

module.exports = {
    cadastrar,
    autenticar
};