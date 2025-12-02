function cadastrar(titulo, descricao, horarioPeneira, categoriaBase) {
    const tituloValido = validarTitulo(titulo);
    const descricaoValida = validarDescricaoPeneira(descricao);
    const horarioValido = validarHorario(horarioPeneira);

    if (!tituloValido || !descricaoValida || !horarioValido) {
        alert("Formulário com erros, corrija antes de enviar.");
        return;
    }

    const dataHora = `${document.getElementById("dataRealizacao").value} ${document.getElementById("horarioPeneira").value}`;

    const dados = {
        titulo: document.getElementById("titulo").value,
        descricao: document.getElementById("descricaoPeneira").value,
        dataFinalInscricao: document.getElementById("dataLimiteInscricao").value || null,
        dataHoraRealizacao: dataHora,
        idTecnico: sessionStorage.ID_TECNICO,
        idUsuario: sessionStorage.ID_USUARIO,
        idCategoriaBase: Number(document.getElementById("categoriaBase").value)
    };

    fetch("/peneiras", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }) 
    .then (function (resposta) {
        if (!resposta.ok) {
            throw "Erro ao cadastrar usuário.";
        }

        resposta.json().then(json => {
            alert("Cadastro realizado com sucesso!");
            window.location.href="/dashboard/tecnico/index.html";
        })
    })
    .catch (function (erro) {
        console.error("Erro: ", erro);
        alert("Ocorreu um erro ao cadastrar. Tente novamente.");
    });
}