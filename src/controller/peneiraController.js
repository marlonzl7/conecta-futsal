var peneiraModel = require("../model/peneiraModel");

async function cadastrar(req, res) {
    try {
        const { 
            titulo, descricao, dataFinalInscricao, dataHoraRealizacao, idTecnico, idUsuario, idCategoriaBase 
        } = req.body;

        console.log(req.body);

        const resultado = await peneiraModel.cadastrar(
            titulo, descricao, dataFinalInscricao, dataHoraRealizacao, idTecnico, idUsuario, idCategoriaBase
        );

        res.status(201).json({ message: "Peneira cadastrada com sucesso!", resultado });
    } catch (erro) {
        console.error("Erro ao cadastrar peneira: ", erro);
        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}

async function listar(req, res) {
    try {
        const { q, idTecnico } = req.query;
        
        if (q) {
            const resultado = await peneiraModel.pesquisar(q);
            return res.status(200).json({ resultado });
        }

        if (idTecnico) {
            const resultado = await peneiraModel.buscarPorIdTecnico(idTecnico);
            return res.status(200).json({ resultado });
        }

        const resultado = await peneiraModel.listar();

        return res.status(200).json({ resultado });
        
    } catch (erro) {
        console.error("Erro ao listar peneiras: ", erro);

        res.status(500).json({ error: "Erro interno no servidor. "});
    }
}

async function listarQuantidadePorFiltro(req, res) {
    try {
        const { cidade, uf } = req.query;
    
        if (cidade) {
            const resultado = await peneiraModel.listarQuantidadePorCidade();
            return res.status(200).json({ resultado });
        }

        if (uf) {
            const resultado = await peneiraModel.listarQuantidadePorUf();
            return res.status(200).json({ resultado });
        }

        return res.status(400).json({ error: "Nenhum filtro enviado" });

    } catch (erro) {
        console.error("Erro ao listar quantidade de peneiras por cidade: ", erro);

        res.status(500).json({ error: "Erro interno no servidor. "});
    }
}

async function filtrar(req, res) {
    try {
        const { cidade, uf, q } = req.query;

        if (cidade) {
            const resultado = await peneiraModel.filtrarPeneirasAbertasPorCidade(cidade);

            return res.status(200).json({ resultado });
        }

        if (uf) {
            const resultado = await peneiraModel.filtrarPeneirasAbertasPorUf(uf);

            return res.status(200).json({ resultado });
        }   
        
        if (q) {
            const resultado = await peneiraModel.pesquisar(q);

            return res.status(200).json({ resultado });
        }

        return listar(req, res);
    } catch (erro) {
        console.error("Erro ao listar peneiras: ", erro);

        return res.status(500).json({ error: "Erro interno no servidor. "});
    }
}

async function buscarPorId(req, res) {
    try {
        const { idPeneira } = req.params;

        const resultado = await peneiraModel.buscarPorIdPeneira(idPeneira);

        return res.status(200).json({ resultado });
    } catch (erro) {
        console.error("Erro ao listar peneira: ", erro);

        return res.status(500).json({ error: "Erro interno no servidor. "});
    }       
}

async function obterQuantidadePeneirasPorCidadePorIdUsuario(req, res) {
    try {
        const { idUsuario } = req.params;

        const resultado = await peneiraModel.quantidadePeneirasPorCidadePorIdUsuario(idUsuario);

        return res.status(200).json({ resultado });
    } catch (erro) {
        console.error("Erro ao buscar peneiras na cidade do usuário: ", erro);

        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}

module.exports = {
    cadastrar,
    listar,
    listarQuantidadePorFiltro,
    buscarPorId,
    obterQuantidadePeneirasPorCidadePorIdUsuario,
    filtrar
}