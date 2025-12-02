function cadastrar(nome, descricao, uf, logradouro, numero, complemento, cidade, uf) {
    const nomeValido = validarNomeTime(nome);
    const descricaoValido = validarDescricaoTime(descricao);
    const logradouroValido = validarLogradouro(logradouro);
    const numeroValido = validarNumero(numero);
    const complementoValido = validarComplemento(complemento);
    const cidadeValida = validarCidade(cidade);
    const ufValida = validarUf(uf);
    
    if (!nomeValido || !descricaoValido || !logradouroValido || !numeroValido || !complementoValido || !cidadeValida || !ufValida) {
        alert("Formulário com erros, corrija antes de enviar.");
        return;
    }

    const dados = {
        idTecnico: sessionStorage.ID_TECNICO,
        nome: document.getElementById("nome").value,
        descricao: document.getElementById("descricao").value,
        cep: document.getElementById("cep").value,
        logradouro: document.getElementById("logradouro").value,
        numero: document.getElementById("numero").value,
        complemento: document.getElementById("complemento").value || null,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        uf: document.getElementById("uf").value
    };

    fetch("/times/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }) 
    .then (function (resposta) {
        if (!resposta.ok) {
            throw "Erro ao cadastrar time.";
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