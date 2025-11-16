var database = require("../database/config");

async function cadastrar(
    titulo, descricao, dataInicioInscricao, dataFinalInscricao, dataHoraRealizacao, idTime, idEndereco, idCategoriaBase
) {
    const instrucao = `
        INSERT INTO peneira (titulo, descricao, data_inicio_inscricao, data_final_inscricao, data_hora_realizacao, id_time, id_endereco, id_categoria_base)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const parametros = [titulo, descricao, dataInicioInscricao, dataFinalInscricao, dataHoraRealizacao, idTime, idEndereco, idCategoriaBase];

    const resultado = await database.execute(instrucao, parametros);

    return resultado;
}

async function listar() {
    const instrucao = `SELECT * FROM peneira`;

    const resultado = await database.execute(instrucao);

    return resultado;
}

async function listarPorId(id) {
    const instrucao = `
        SELECT * FROM peneira WHERE id_peneira = ?
    `;

    const parametro  = [id];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

async function listarPorUf(uf) {
    const instrucao = `
        SELECT * FROM peneira p JOIN endereco e ON p.id_endereco = e.id_endereco WHERE e.uf = ?
    `;

    const parametro = [uf];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}


async function pesquisar(q) {
    const instrucao = `
        SELECT * FROM peneira WHERE titulo LIKE CONCAT('%', ?, '%') OR descricao LIKE CONCAT('%', ?, '%')
    `;

    const parametro = [q, q];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

module.exports = {
    cadastrar,
    listar,
    listarPorId,
    listarPorUf,
    pesquisar
}