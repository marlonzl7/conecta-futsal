var database = require("../database/config");

async function cadastrar(id_usuario, cep, logradouro, numero, complemento, bairro, cidade, uf) {
    const instrucaoCadastrar = `
        INSERT INTO endereco (cep, logradouro, numero, complemento, bairro, cidade, uf)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

    const parametros = [cep, logradouro, numero, complemento, bairro, cidade, uf];

    const resultadoCadastro = await database.execute(instrucaoCadastrar, parametros);

    if (!inserirIdEnderecoUsuario(resultadoCadastro.insertId, id_usuario)) {
        throw "ERRO_AO_VINCULAR_ENDERECO";
    }

    return resultadoCadastro;
}

async function inserirIdEnderecoUsuario(id_endereco, id_usuario) {
    const instrucao = `
        UPDATE usuario SET id_endereco = ? WHERE id_usuario = ?
    `;
    
    const parametro = [id_endereco, id_usuario];

    const resultado = await database.execute(instrucao, parametro);

    return resultado;
}

module.exports = {
    cadastrar
}