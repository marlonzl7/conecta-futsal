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
    const instrucao = `SELECT * FROM vw_listar_peneiras`;
                
    const resultado = await database.execute(instrucao);

    return resultado;
}

async function listarQuantidadePorCidade(cidade) {
    const instrucao = `
        SELECT * FROM vw_listar_peneiras_por_cidade
    `;

    const resultado = await database.execute(instrucao);

    return resultado;
}

async function listarQuantidadePorUf() {
    const instrucao = `
        SELECT * FROM vw_listar_peneiras_por_estado
    `;

    const resultado = await database.execute(instrucao);

    return resultado;
}

async function buscarPorIdPeneira(id) {
    const instrucao = `
        SELECT *, c.nome
        FROM peneira p
        JOIN time t
            ON p.id_time = t.id_time
        JOIN endereco e
            ON p.id_endereco = e.id_endereco
        JOIN categoria_base c
            ON p.id_categoria_base = c.id_categoria_base
        WHERE p.id_peneira = ?
    `;

    const parametro  = [id];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

async function filtrarPeneirasAbertasPorCidade(cidade) {
    const instrucao = `
        SELECT * 
        FROM peneira p 
        JOIN endereco e ON p.id_endereco = e.id_endereco 
        WHERE e.cidade 
        LIKE CONCAT('%', ?, '%') AND p.status = TRUE;
    `;

    const parametro  = [cidade];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

async function filtrarPeneirasAbertasPorUf(uf) {
    const instrucao = `
        SELECT * 
        FROM peneira p 
        JOIN endereco e ON p.id_endereco = e.id_endereco 
        WHERE e.uf = ? AND p.status = TRUE;
    `;

    const parametro = [uf];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

async function pesquisar(q) {
    const instrucao = `
        SELECT
            p.id_peneira,
            p.titulo,
            p.descricao,
            t.nome AS time,
            c.nome AS categoria_de_base,
            CONCAT(e.logradouro, ', ', e.numero,  ' - ', e.cidade, ' ', e.uf) AS local,
            p.data_hora_realizacao AS data
        FROM peneira p
        JOIN time t
            ON p.id_time = t.id_time
        JOIN categoria_base c
            ON p.id_categoria_base = c.id_categoria_base
        JOIN endereco e
            ON p.id_endereco = e.id_endereco
        WHERE 
            p.titulo LIKE CONCAT('%', ?, '%') OR 
            p.descricao LIKE CONCAT('%', ?, '%')
    `;

    const parametro = [q, q];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

module.exports = {
    cadastrar,
    listar,
    buscarPorIdPeneira,
    listarQuantidadePorCidade,
    listarQuantidadePorUf,
    filtrarPeneirasAbertasPorCidade,
    filtrarPeneirasAbertasPorUf,
    pesquisar
}