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

async function pesquisar(input) {
    const instrucao = `
        SELECT * FROM time WHERE titulo LIKE CONCAT('%', ?, '%') OR descricao LIKE CONCAT('%', ?, '%')
    `;

    const parametro = [q];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

module.exports = {
    cadastrar,
    listar,
    pesquisar
}