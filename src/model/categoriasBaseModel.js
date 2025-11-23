var database = require("../database/config");

async function listar() {
    const instrucao = `SELECT * FROM categoria_base`;

    const resultado = await database.execute(instrucao);

    return resultado;
}

module.exports = {
    listar
}