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
            
            alert("Login realizado com sucesso!");

            location.href="/dashboard/index.html";
        })
    })
    .catch (function (erro) {
        console.error("Erro: ", erro);
        alert("Ocorreu um erro ao autenticar. Tente novamente.");
    });
}