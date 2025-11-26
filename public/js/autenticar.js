function autenticar() {
    const dados = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
    };

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }) 
    .then (function (resposta) {
        if (!resposta.ok) {
            throw "Erro ao autenticar";
        }

        resposta.json().then(json => {                
            sessionStorage.ID_USUARIO = json.idUsuario;
            sessionStorage.NOME = json.nome;
            sessionStorage.EMAIL = json.email;
            sessionStorage.TIPO_USUARIO = json.tipoUsuario;

            console.log(json);

            alert("Login realizado com sucesso!");

            if (sessionStorage.TIPO_USUARIO == 'tecnico') {
                sessionStorage.ID_TECNICO = json.idTecnico;
                location.href="/dashboard/tecnico/index.html";
            } else if (sessionStorage.TIPO_USUARIO == 'jogador') {
                sessionStorage.ID_JOGADOR = json.idJogador;
                location.href="/dashboard/jogador/index.html";
            }
        })
    })
    .catch (function (erro) {
        console.error("Erro: ", erro);
        alert("Ocorreu um erro ao autenticar. Tente novamente.");
    });
}