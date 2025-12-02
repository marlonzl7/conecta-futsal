var database = require("../database/config");

async function listar() {
    const instrucao = `SELECT * FROM categoria_base`;

    return await database.execute(instrucao);
}

async function obterIdCategoriaBasePorNome(nome) {
    const instrucao = `
        SELECT id_categoria_base 
        FROM categoria_base 
        WHERE nome = ?
    `;

    return await database.execute(instrucao, [nome]);
}

module.exports = {
    listar,
    obterIdCategoriaBasePorNome
}