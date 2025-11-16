function cadastrar(nome, sobrenome, telefone, email, senha, tipoUsuario) {
    const nomeValido = validarNome(nome);
    const sobrenomeValido = validarSobrenome(sobrenome);
    const telefoneValido = validarTelefone(telefone);
    const emailValido = validarEmail(email);
    const senhaValida = validarSenha(senha);
    const tipoUsuarioValido = validarTipoUsuario(tipoUsuario);

    if (!nomeValido || !sobrenomeValido || !emailValido || !senhaValida || !telefoneValido || !tipoUsuarioValido) {
        alert("Formulário com erros, corrija antes de enviar.");
        return;
    }

    const dados = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        tipoUsuario: document.getElementById("tipoUsuario").value
    };

    fetch("/usuarios/cadastrar", {
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
            location.href="login.html";
        })
    })
    .catch (function (erro) {
        console.error("Erro: ", erro);
        alert("Ocorreu um erro ao cadastrar. Tente novamente.");
    });
}