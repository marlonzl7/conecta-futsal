var database = require("../database/config");

async function listarPeneirasAbertasNoEstadoComIdUsuario(idUsuario) {
    const enderecoModel = require("../model/enderecoModel");
    const resultado = await enderecoModel.buscarPorIdUsuario(idUsuario);
    const endereco = resultado[0];

    if (!endereco) {
        throw "ENDERECO_NAO_REGISTRADO";
    }

    const uf = endereco.uf;

    const instrucao = `
        SELECT
            e.cidade,
            COUNT(p.id_peneira) AS quantidade
        FROM peneira p
        JOIN endereco e ON p.id_endereco = e.id_endereco
        WHERE e.uf = ? AND p.status = TRUE
        GROUP BY e.cidade;
    `;

    const parametro = [uf];

    return await database.execute(instrucao, parametro);
}

async function listarQuantidadePeneirasAbertasNaCidadeComIdUsuario(idUsuario) {
    const enderecoModel = require("../model/enderecoModel");
    const resultado = await enderecoModel.buscarPorIdUsuario(idUsuario);

    const endereco = resultado[0];

    if (!endereco) {
        throw "ENDERECO_NAO_REGISTRADO";
    }

    const cidade = endereco.cidade;

    const instrucao = `
        SELECT
            e.cidade,
            COUNT(*) AS quantidade
        FROM peneira p
        JOIN endereco e ON p.id_endereco = e.id_endereco
        WHERE e.cidade = ? AND p.status = TRUE;
    `;

    const parametro = [cidade];

    return await database.execute(instrucao, parametro);
}

async function listarQuantidadeTimesNaCidadeComIdUsuario(idUsuario) {
    const enderecoModel = require("../model/enderecoModel");
    const resultado = await enderecoModel.buscarPorIdUsuario(idUsuario);

    const endereco = resultado[0];

    if (!endereco) {
        throw "ENDERECO_NAO_REGISTRADO";
    }

    const cidade = endereco.cidade;

    const instrucao = `
        SELECT
            e.cidade,
            COUNT(t.id_time) AS quantidade
        FROM time t
        JOIN endereco e ON t.id_endereco = e.id_endereco
        WHERE e.cidade = ?;
    `;

    const parametro = [cidade];

    return await database.execute(instrucao, parametro);
}

async function obterInscricoesPorPeneira(idTecnico) {
    const instrucao = `
        SELECT
            p.titulo AS peneira,
            COUNT(*) AS inscricoes
        FROM inscricao i
        JOIN peneira p ON i.id_peneira = p.id_peneira
        JOIN time ti ON p.id_time = ti.id_time
        JOIN tecnico te ON ti.id_tecnico = te.id_tecnico
        WHERE te.id_tecnico = ?
        GROUP BY 
            p.titulo
    `;

    const parametro = [idTecnico];

    return await database.execute(instrucao, parametro);
}

async function obterTaxaInscricoesPorMes(idTecnico) {
    const instrucao = `
        SELECT
            COUNT(*) AS inscricoes,
            MONTH(p.data_inicio_inscricao) AS mes
        FROM inscricao i
        JOIN peneira p ON p.id_peneira = i.id_peneira
        JOIN time ti ON ti.id_time = p.id_time
        JOIN tecnico te ON te.id_tecnico = ti.id_tecnico
        JOIN usuario u ON te.id_usuario = u.id_usuario
        WHERE te.id_tecnico = 2
        GROUP BY MONTH(p.data_inicio_inscricao)
        ORDER BY MONTH(p.data_inicio_inscricao)
    `;

    const parametro = [idTecnico];

    return await database.execute(instrucao, parametro);
}

async function obterQuantidadePeneirasInscritas(idJogador) {
    const instrucao = `
        SELECT COUNT(*) AS inscricoes FROM inscricao WHERE id_jogador = ?
    `;

    const parametro = [idJogador];

    return await database.execute(instrucao, parametro);
}
       

module.exports = {
    listarPeneirasAbertasNoEstadoComIdUsuario,
    listarQuantidadePeneirasAbertasNaCidadeComIdUsuario,
    listarQuantidadeTimesNaCidadeComIdUsuario,
    obterInscricoesPorPeneira,
    obterPeneiraComMaisInscricoesPorCidade,
    obterTaxaInscricoesPorMes,
    obterQuantidadePeneirasInscritas,
    obterTotalInscricoesPorTecnico,
    obterPosicaoComMaiorDemanda
}