var dashboardModel = require("../model/dashboardModel");

async function listarPeneirasAbertasNoEstadoComIdUsuario(req, res) {
    try {
        const { idUsuario } = req.query;

        const resultado = await dashboardModel.listarPeneirasAbertasNoEstadoComIdUsuario(idUsuario);

        return res.status(200).json({ resultado });
    } catch (erro) {
        if (erro == "ENDERECO_NAO_REGISTRADO") {
            res.status(400).json({ error: "Usuário não possuí nenhum endereço cadastrado. " });
        } else {
            res.status(500).json({ error: "Erro interno no servidor. "});
        }
    }
}

async function listarQuantidadePeneirasAbertasNaCidadeComIdUsuario(req, res) {
    try {
        const { idUsuario } = req.query;

        const resultado = await dashboardModel.listarQuantidadePeneirasAbertasNaCidadeComIdUsuario(idUsuario);

        return res.status(200).json({ resultado });
    } catch (erro) {
        if (erro == "ENDERECO_NAO_REGISTRADO") {
            res.status(400).json({ error: "Usuário não possuí nenhum endereço cadastrado. " });
        } else {
            res.status(500).json({ error: "Erro interno no servidor. "});
        }
    }
}

async function listarQuantidadeTimesNaCidadeComIdUsuario(req, res) {
    try {
        const { idUsuario } = req.query;

        const resultado = await dashboardModel.listarQuantidadeTimesNaCidadeComIdUsuario(idUsuario);

        return res.status(200).json({ resultado });
    } catch (erro) {
        if (erro == "ENDERECO_NAO_REGISTRADO") {
            res.status(400).json({ error: "Usuário não possuí nenhum endereço cadastrado. " });
        } else {
            res.status(500).json({ error: "Erro interno no servidor. "});
        }
    }
}

async function obterInscricoesPorPeneira(req, res) {
    const { idTecnico } = req.query;
    
    const resultado = await dashboardModel.obterInscricoesPorPeneira(idTecnico);

    return res.status(200).json({ resultado });
}

async function obterQuantidadePeneirasInscritas(req, res) {
    const { idJogador } = req.query;

    const resultado = await dashboardModel.obterQuantidadePeneirasInscritas(idJogador);

    return res.status(200).json({ resultado });
}

async function obterTaxaInscricoesPorMes(req, res) {
    try {
        const { idTecnico } = req.query;
                
        const resultado = await dashboardModel.obterTaxaInscricoesPorMes(idTecnico);

        return res.status(200).json({ resultado });
    } catch (erro) {
        return res.status(500).json({ error: "Erro interno no servidor. " });
    }
}

async function obterPeneiraComMaisInscricoesPorCidade(req, res) {
    try {
        const { idTecnico } = req.query;

        const resultado = await dashboardModel.obterPeneiraComMaisInscricoesPorCidade(idTecnico);

        return res.status(200).json({ resultado });
    } catch (erro) {
        return res.status(500).json({ error: "Erro interno no servidor. "});
    }
}

async function obterTotalInscricoesPorTecnico(req, res) {
    const { idTecnico } = req.query;

    const resultado = await dashboardModel.obterTotalInscricoesPorTecnico(idTecnico);

    return res.status(200).json({ resultado });
}

async function obterPosicaoComMaiorDemanda(req, res) {
    const { idTecnico } = req.query;

    const resultado = await dashboardModel.obterPosicaoComMaiorDemanda(idTecnico);

    return res.status(200).json({ resultado });
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