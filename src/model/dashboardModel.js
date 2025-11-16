var database = require("../database/config");

async function listarPeneirasPorUf(uf) {
    const instrucao = `
        SELECT * FROM peneira p JOIN endereco e ON p.id_endereco = e.id_endereco WHERE e.uf = ?
    `;

    const parametro = [uf];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

async function listarTimesPorCidade(cidade) {
    const instrucao = `
        SELECT * FROM time t JOIN endereco e ON t.id_endereco = e.id_endereco WHERE cidade = ?
    `;

    const parametro = [cidade];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

module.exports = {
    listarPeneirasPorUf,
    listarTimesPorCidade
}
