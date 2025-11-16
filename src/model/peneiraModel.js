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

module.exports = {
    cadastrar
}