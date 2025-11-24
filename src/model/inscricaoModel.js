var database = require("../database/config");

async function cadastrar(idUsuario, idPeneira) {
    if (!idUsuario || !idPeneira) {
        throw "PARAMETROS_INVALIDOS";
    }

    const resultado = await obterJogadorPorIdUsuario(idUsuario);

    if (!resultado || resultado.length === 0) {
        throw "TIPO_USUARIO_DIFERENTE_DE_JOGADOR";
    }

    const idJogador = resultado[0].id_jogador;
    
    const inscrito = await verificarInscricao(idJogador, idPeneira);

    if (inscrito.length > 0) {
        throw "JOGADOR_INSCRITO";
    }

    const instrucao = `
        INSERT INTO inscricao (id_peneira, id_jogador) VALUES (?, ?)
    `;


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
        SELECT 1
        FROM inscricao
        WHERE id_peneira = ? AND id_jogador = ?
        LIMIT 1
    `;

    const parametros = [idPeneira, idJogador];

    return await database.execute(instrucao, parametros);
}

module.exports = {
    cadastrar
}