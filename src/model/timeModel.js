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

async function listar() {
    const instrucao = `
        SELECT 
            t.nome,
            t.descricao,
            CONCAT(e.cidade, ' ', e.uf) AS local
        FROM time t
        JOIN endereco e ON t.id_endereco = e.id_endereco
    `;

    return await database.execute(instrucao);
}

async function pesquisar(q) {
    const instrucao = `
        SELECT
            t.nome,
            t.descricao,
            CONCAT(e.cidade, ' ', e.uf) AS local
        FROM time t
        JOIN endereco e ON t.id_endereco = e.id_endereco
        WHERE 
            t.nome LIKE CONCAT('%', ?, '%') OR 
            t.descricao LIKE CONCAT('%', ?, '%') OR
            e.cidade LIKE CONCAT('%', ?, '%') OR
            e.uf LIKE CONCAT('%', ?, '%')
    `;

    const parametro = [q, q, q, q];
    
    return await database.execute(instrucao, parametro);
}

// async function filtrarPorCidade(cidade) {
//     const instrucao = `
//         SELECT * 
//         FROM time t 
//         JOIN endereco e ON t.id_endereco = e.id_endereco 
//         WHERE cidade LIKE CONCAT('%', ?, '%')
//     `;

//     const parametro = [cidade];

//     return await database.execute(instrucao, parametro);
// }

// async function filtrarPorUf(uf) {
//     const instrucao = `
//         SELECT * FROM time t 
//         JOIN endereco e ON t.id_endereco = e.id_endereco 
//         WHERE uf = ?
//     `;

//     const parametro = [uf];

//     return await database.execute(instrucao, parametro);
// }

module.exports = {
    cadastrar,
    listar,
    pesquisar
}