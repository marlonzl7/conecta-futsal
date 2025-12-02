var database = require("../database/config");

async function cadastrar(
    titulo, descricao, dataFinalInscricao, dataHoraRealizacao, idTecnico, idUsuario, idCategoriaBase
) {
    const timeModel = require("./timeModel");
    
    const resultadoTime = await timeModel.obterIdTimeComIdTecnico(idTecnico);
    const idTime = resultadoTime[0]?.id_time;

    const resultado = await timeModel.obterIdEndereco(idTime);
    const idEndereco = resultado[0]?.id_endereco;

    const dataInicioInscricao = new Date();

    const instrucao = `
        INSERT INTO peneira (titulo, descricao, data_inicio_inscricao, data_final_inscricao, data_hora_realizacao, id_time, id_endereco, id_categoria_base)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const parametros = [titulo, descricao, dataInicioInscricao, dataFinalInscricao, dataHoraRealizacao, idTime, idEndereco, idCategoriaBase];

    return await database.execute(instrucao, parametros);
}

async function listar() {
    const instrucao = `SELECT * FROM vw_peneiras_detalhadas`;
                
    return await database.execute(instrucao);
}

async function listarQuantidadePorCidade() {
    const instrucao = `
        SELECT * FROM vw_peneiras_por_cidade
    `;

    return await database.execute(instrucao);
}

async function listarQuantidadePorUf() {
    const instrucao = `
        SELECT * FROM vw_peneiras_por_estado
    `;
                
    return await database.execute(instrucao);
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

    return await database.execute(instrucao, [id]);
}

async function filtrarPeneirasAbertasPorCidade(cidade) {
    const instrucao = `
        SELECT * 
        FROM peneira p 
        JOIN endereco e ON p.id_endereco = e.id_endereco 
        WHERE e.cidade 
        LIKE CONCAT('%', ?, '%') AND p.status = TRUE;
    `;

    return await database.execute(instrucao, [cidade]);
}

async function filtrarPeneirasAbertasPorUf(uf) {
    const instrucao = `
        SELECT * 
        FROM peneira p 
        JOIN endereco e ON p.id_endereco = e.id_endereco 
        WHERE e.uf = ? AND p.status = TRUE;
    `;

    return await database.execute(instrucao, [uf]);
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
            YEAR(p.data_hora_realizacao) AS ano,
            MONTH(p.data_hora_realizacao) AS mes,
            DAY(p.data_hora_realizacao) AS dia,
            TIME(p.data_hora_realizacao) AS horario
        FROM peneira p
        JOIN time t ON p.id_time = t.id_time
        JOIN categoria_base c ON p.id_categoria_base = c.id_categoria_base
        JOIN endereco e ON p.id_endereco = e.id_endereco
        WHERE 
            p.titulo LIKE CONCAT('%', ?, '%') OR 
            p.descricao LIKE CONCAT('%', ?, '%') OR
            t.nome LIKE CONCAT('%', ?, '%') OR
            c.nome LIKE CONCAT('%', ?, '%') OR
            e.cidade LIKE CONCAT('%', ?, '%') OR
            e.uf LIKE CONCAT('%', ?, '%')
    `;

    const parametro = [q, q, q, q, q, q];

    return await database.execute(instrucao, parametro);
}

async function buscarPorIdTecnico(idTecnico) {
    const instrucao = `
        SELECT
            p.id_peneira,
            p.titulo,
            p.descricao,
            t.nome AS time,
            c.nome AS categoria_de_base,
            CONCAT(e.logradouro, ', ', e.numero,  ' - ', e.cidade, ' ', e.uf) AS local,
            YEAR(p.data_hora_realizacao) AS ano,
            MONTH(p.data_hora_realizacao) AS mes,
            DAY(p.data_hora_realizacao) AS dia,
            TIME(p.data_hora_realizacao) AS horario
        FROM peneira p
        JOIN time t ON p.id_time = t.id_time
        JOIN categoria_base c ON p.id_categoria_base = c.id_categoria_base
        JOIN endereco e ON p.id_endereco = e.id_endereco
        WHERE t.id_tecnico = ?
    `;

    return await database.execute(instrucao, [idTecnico])
}

module.exports = {
    cadastrar,
    listar,
    buscarPorIdPeneira,
    listarQuantidadePorCidade,
    listarQuantidadePorUf,
    filtrarPeneirasAbertasPorCidade,
    filtrarPeneirasAbertasPorUf,
    pesquisar,
    buscarPorIdTecnico
}