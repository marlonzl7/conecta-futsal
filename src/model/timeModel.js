var database = require("../database/config");

async function cadastrar(nome, descricao, idTecnico, idEndereco) {
    const instrucao = `
        INSERT INTO time (nome, descricao, id_tecnico, id_endereco)
            VALUES (?, ?, ?, ?)
    `;

    const parametros = [nome, descricao, idTecnico, idEndereco];
    
    const resultado = database.execute(instrucao, parametros);

    return resultado;
}

async function listar(req, res) {
    const instrucao = `SELECT * FROM time`;

    const resultado = await database.execute(instrucao);

    return resultado;
}

async function filtrarPorCidade(cidade) {
    const instrucao = `
        SELECT * FROM time t JOIN endereco e ON t.id_endereco = e.id_endereco WHERE cidade LIKE CONCAT('%', ?, '%')
    `;

    const parametro = [cidade];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

async function filtrarPorUf(uf) {
    const instrucao = `
        SELECT * FROM time t JOIN endereco e ON t.id_endereco = e.id_endereco WHERE uf = ?
    `;

    const parametro = [uf];

    console.log(uf);
    console.log(parametro);

    const resultado = await database.execute(instrucao, parametro);

    console.log(resultado);

    return resultado;
}

async function pesquisar(q) {
    const instrucao = `
        SELECT * FROM time WHERE nome LIKE CONCAT('%', ?, '%') OR descricao LIKE CONCAT('%', ?, '%')
    `;

    const parametro = [q, q];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

async function quantidadeTimePorCidadePorUsuario(idUsuario) {
    const enderecoModel = require("../model/enderecoModel");
    const cidade = await enderecoModel.obterCidadePorIdUsuario(idUsuario);

    if (!cidade) {
        throw "ENDERECO_NAO_REGISTRADO";
    }

    const instrucao = `
        SELECT
            COUNT(*) AS quantidade
        FROM time t
        JOIN endereco e
            ON t.id_endereco = e.id_endereco
        WHERE
            e.cidade = ?
    `;

    const parametro = [cidade];

    return await database.execute(instrucao, parametro);
}

module.exports = {
    cadastrar,
    listar,
    filtrarPorCidade,
    filtrarPorUf,
    quantidadeTimePorCidadePorUsuario,
    pesquisar
}