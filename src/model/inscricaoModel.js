var database = require("../database/config");
const { param } = require("../routes");

async function cadastrar(idUsuario, idPeneira) {
    const instrucao = `
        INSERT INTO inscricao (id_peneira, id_jogador) VALUES (?, ?)
    `;

    const resultado = await obterJogadorPorIdUsuario(idUsuario);

    console.log(resultado);

    const idJogador = resultado[0].id_jogador;

    if (!idJogador) {
        throw "TIPO_USUARIO_DIFERENTE_DE_JOGADOR";
    }

    const inscrito = verificarInscricao(idJogador, idPeneira)

    if (inscrito) {
        throw "JOGADOR_INSCRITO";
    }

    const parametros = [idPeneira, idJogador];

    return database.execute(instrucao, parametros);
}

async function obterJogadorPorIdUsuario(idUsuario) {
    const instrucao = `
        SELECT id_jogador FROM jogador j WHERE id_usuario = ?
    `;

    const parametro = [idUsuario];

    return await database.execute(instrucao, parametro);
}

async function verificarInscricao(idJogador, idPeneira) {
    const instrucao = `
        SELECT 1 FROM inscricao WHERE id_usuario = ? AND id_peneira = ?
    `;

    const parametros = [idJogador, idPeneira];

    return await database.execute(instrucao, parametros);
}

module.exports = {
    cadastrar
}