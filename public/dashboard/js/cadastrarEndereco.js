async function cadastrar(cep, logradouro, numero, complemento, bairro, cidade, uf) {
    const cepValido = validarCep(cep);
    const logradouroValido = validarLogradouro(logradouro);
    const numeroValido = validarNumero(numero);
    const complementoValido = validarComplemento(complemento);
    const bairroValido = validarBairro(bairro);
    const cidadeValida = validarCidade(cidade);
    const ufValido = validarUf(uf);

    console.log(cep, logradouro, numero, complemento, bairro, cidade, uf);

    if (!cepValido || !logradouroValido || !numeroValido || !bairroValido || !cidadeValida || !complementoValido || !ufValido) {
        alert("Formulário com erros, corrija antes de enviar.");
        return;
    }

    console.log("ID USUÁRIO NO FRONT:", sessionStorage.ID_USUARIO);

    const dados = {
        idTecnico: sessionStorage.ID_TECNICO,
        nome: sessionStorage.NOME_TIME,
        descricao: sessionStorage.DESCRICAO_TIME,
        cep: document.getElementById("cep").value,
        logradouro: document.getElementById("logradouro").value,
        numero: document.getElementById("numero").value,
        complemento: document.getElementById("complemento").value || null,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        uf: document.getElementById("uf").value,
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
            throw "Erro ao cadastrar endereço.";
        }

        resposta.json().then(json => {
            alert("Cadastro realizado com sucesso!");
            
            if (sessionStorage.TIPO_USUARIO === 'tecnico') {
                window.location.href="/dashboard/tecnico/index.html";
            } else if (sessionStorage.TIPO_USUARIO === 'jogador') {
                window.location.href="/dashboard/jogador/index.html";
            }

        })
    })
    .catch (function (erro) {
        console.error("Erro: ", erro);
        alert("Ocorreu um erro ao cadastrar. Tente novamente.");
    });
}