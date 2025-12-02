var database = require("../database/config");

async function cadastrar(nome, descricao, idTecnico, cep, logradouro, numero, complemento, bairro, cidade, uf) {
    const instrucaoCadastrarEndereco = `
        INSERT INTO endereco (cep, logradouro, numero, complemento, bairro, cidade, uf) VALUES
            (?, ?, ?, ?, ?, ?, ?)
    `;

    const resultadoCadastro = await database.execute(instrucaoCadastrarEndereco, [cep, logradouro, numero, complemento, bairro, cidade, uf]) 

    const idEndereco = resultadoCadastro.insertId;

    const instrucao = `
        INSERT INTO time (nome, descricao, id_tecnico, id_endereco)
            VALUES (?, ?, ?, ?)
    `;
    
    return await database.execute(instrucao, [nome, descricao, idTecnico, idEndereco]);
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

async function obterIdTimeComIdTecnico(idTecnico) {
    const instrucao = `
        SELECT id_time
        FROM time
        WHERE id_tecnico = ?
    `;

    return await database.execute(instrucao, [idTecnico]);
}

async function obterIdEndereco(idTime) {
    const instrucao = `
        SELECT id_endereco
        FROM time
        WHERE id_time = ?
    `;

    return await database.execute(instrucao, [idTime]);
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
    pesquisar,
    obterIdTimeComIdTecnico,
    obterIdEndereco
}