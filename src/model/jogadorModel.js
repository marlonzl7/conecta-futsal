var database = require("./../database/config");

async function cadastrar(id_usuario) {
    const instrucao = `INSERT INTO jogador (id_usuario) VALUES (?)`;

    const parametros = [id_usuario];

    await database.execute(instrucao, parametros);
}

module.exports = {
    cadastrar
}