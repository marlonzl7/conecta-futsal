var database = require("./../database/config");

async function cadastrar(id_usuario) {
    const instrucao = `INSERT INTO jogador (id_usuario) VALUES (?)`;

    const parametros = [id_usuario];

    await database.execute(instrucao, parametros);
}

async function listar() {
    const instrucao = `
        SELECT
            j.id_jogador,
            CONCAT(u.nome, ' ', u.sobrenome) AS nome_completo,
            j.posicao,
            CONCAT(e.cidade, ' - ', e.uf) AS cidade
        FROM jogador j
        JOIN usuario u ON j.id_usuario = u.id_usuario
        JOIN endereco e ON u.id_endereco = e.id_endereco
    `;

    return await database.execute(instrucao);
}

async function buscarPorId(id_jogador) {
    const instrucao = `
        SELECT * 
        FROM jogador j
        JOIN usuario u ON j.id_usuario = u.id_usuario
        JOIN endereco e ON u.id_endereco = e.id_endereco
        WHERE id_jogador = ?
    `;

    const parametro = [id_jogador];

    return await database.execute(instrucao, parametro);
}

async function pesquisar(q) {
    const instrucao = `
        SELECT
            j.id_jogador,
            CONCAT(u.nome, ' ', u.sobrenome) AS nome_completo,
            j.posicao,
            CONCAT(e.cidade, ' - ', e.uf) AS cidade
        FROM jogador j
        JOIN usuario u ON j.id_usuario = u.id_usuario
        JOIN endereco e ON u.id_endereco = e.id_endereco
        WHERE 
            u.nome LIKE CONCAT('%', ?, '%') OR 
            u.sobrenome LIKE CONCAT('%', ?, '%') OR
            j.posicao LIKE CONCAT('%', ?, '%') OR
            e.cidade LIKE CONCAT('%', ?, '%')
    `;

    const parametro = [q, q, q, q];
    
    return await database.execute(instrucao, parametro);
}

module.exports = {
    cadastrar,
    listar,
    pesquisar,
    buscarPorId
}