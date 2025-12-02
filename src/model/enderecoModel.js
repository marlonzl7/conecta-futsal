var database = require("../database/config");

async function cadastrar(idUsuario, cep, logradouro, numero, complemento, bairro, cidade, uf) {
    const existe = await verificarCadastro(idUsuario);

    if (existe) {
        throw "ENDERECO_EXISTENTE";
    }

    const instrucaoCadastrar = `
        INSERT INTO endereco (cep, logradouro, numero, complemento, bairro, cidade, uf)
            VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const parametros = [cep, logradouro, numero, complemento, bairro, cidade, uf];

    const resultadoCadastro = await database.execute(instrucaoCadastrar, parametros);

    const idEndereco = resultadoCadastro.insertId;

    const vinculo = await inserirIdEnderecoUsuario(idEndereco, idUsuario);

    if (vinculo.affectedRows === 0) {
        throw "ERRO_AO_VINCULAR_ENDERECO";
    }

    return resultadoCadastro;
}

async function verificarCadastro(idUsuario) {
    const sql = `SELECT id_endereco FROM usuario WHERE id_usuario = ?`;

    const linhas = await database.execute(sql, [idUsuario]);

    if (!linhas || linhas.length === 0) {
        return false;
    }

    return linhas[0].id_endereco !== null;
}

async function inserirIdEnderecoUsuario(idEndereco, idUsuario) {
    const instrucao = `
        UPDATE usuario SET id_endereco = ? WHERE id_usuario = ?
    `;

    return await database.execute(instrucao, [idEndereco, idUsuario]);
}

async function buscarPorIdEndereco(idEndereco) {
    const instrucao = `
        SELECT * FROM endereco WHERE id_endereco = ?
    `;

    return await database.execute(instrucao, [idEndereco]);
}

async function buscarPorIdUsuario(idUsuario) {
    const instrucao = `
        SELECT e.* FROM endereco e JOIN usuario u ON e.id_endereco = u.id_endereco WHERE u.id_usuario = ?
    `;

    return await database.execute(instrucao, [idUsuario]);
}

async function obterCidadePorIdUsuario(idUsuario) {
    const instrucao = `
        SELECT e.cidade 
        FROM endereco e 
        JOIN usuario u 
            ON e.id_endereco = u.id_endereco 
        WHERE u.id_usuario = ?
    `;

    return await database.execute(instrucao, [idUsuario]);
}

module.exports = {
    cadastrar,
    buscarPorIdEndereco,
    buscarPorIdUsuario,
    obterCidadePorIdUsuario
}