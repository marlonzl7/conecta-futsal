function validarSessao() {
    let idUsuario = sessionStorage.ID_USUARIO;
    let nome = sessionStorage.NOME;
    let email = sessionStorage.EMAIL;

    if (idUsuario != null && nome != null) {
        let spanNome = document.getElementById("nomeUsuarioLogado");
        let spanEmail = document.getElementById("emailUsuarioLogado");

        spanNome.innerHTML = nome;
        spanEmail.innerHTML = email;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../../login.html";
}