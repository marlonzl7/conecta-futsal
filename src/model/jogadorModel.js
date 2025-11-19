var database = require("./../database/config");

async function cadastrar(id_usuario) {
    const instrucao = `INSERT INTO jogador (id_usuario) VALUES (?)`;

    const parametros = [id_usuario];

    await database.execute(instrucao, parametros);
}

async function listar() {
    const instrucao = `
        SELECT * FROM jogador;
    `;

    const resultado = await database.execute(instrucao);

    return resultado;
}

async function buscarPorId(id_jogador) {
    const instrucao = `
        SELECT * FROM jogador WHERE id_jogador = ?
    `;

    const resultado = await database.execute(instrucao);

    return resultado;
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId
}