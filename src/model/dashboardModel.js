var database = require("../database/config");

async function listarPorUf(uf) {
    const instrucao = `
        SELECT * FROM peneira p JOIN endereco e ON p.id_endereco = e.id_endereco WHERE e.uf = ?
    `;

    const parametro = [uf];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

module.exports = {
    listarPorUf
}
