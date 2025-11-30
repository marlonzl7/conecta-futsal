var database = require("./../database/config");

async function cadastrar(id_usuario) {
    const instrucao = `INSERT INTO tecnico (id_usuario) VALUES (?)`;

    const parametros = [id_usuario];

    await database.execute(instrucao, parametros);
}

async function listar() {
    const instrucao = `
        SELECT
            t.id_tecnico,
            CONCAT(u.nome, ' ', u.sobrenome) AS nome_completo,
            ti.nome AS time,
            CONCAT(e.cidade, ' - ', e.uf) AS local
        FROM tecnico t
        JOIN time ti ON t.id_tecnico = ti.id_tecnico
        JOIN usuario u ON t.id_usuario = u.id_usuario
        JOIN endereco e ON u.id_endereco = e.id_endereco
    `;

    return await database.execute(instrucao);
}

async function buscarPorId(idTecnico) {
    const instrucao = `
        SELECT * FROM tecnico WHERE id_tecnico = ?
    `;

    return await database.execute(instrucao);
}

async function pesquisar(q) {
    const instrucao = `
        SELECT
            t.id_tecnico,
            CONCAT(u.nome, ' ', u.sobrenome) AS nome_completo,
            u.nome,
            ti.nome AS time,
            CONCAT(e.cidade, ' - ', e.uf) AS local
        FROM tecnico t
        JOIN time ti ON t.id_tecnico = ti.id_tecnico
        JOIN usuario u ON t.id_usuario = u.id_usuario
        JOIN endereco e ON u.id_endereco = e.id_endereco
        WHERE 
            u.nome LIKE CONCAT('%', ?, '%') OR 
            ti.nome LIKE CONCAT('%', ?, '%') OR
            e.cidade LIKE CONCAT('%', ?, '%')
    `;

    const parametro = [q, q, q];

    return await database.execute(instrucao, parametro);
}

module.exports = {
    cadastrar,
    listar,
    pesquisar,
    buscarPorId
}