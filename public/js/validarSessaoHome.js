function validarSessaoHome() {
    const idUsuario = sessionStorage.ID_USUARIO;
    const buttonsHome = document.getElementById("buttonsHome");
    const usuarioLogado = document.getElementById("usuarioLogado");
    const nomeSpan = document.getElementById("nomeUsuarioLogado");
    const emailSpan = document.getElementById("emailUsuarioLogado");

    if(idUsuario) {
        nomeSpan.innerHTML = sessionStorage.NOME;
        emailSpan.innerHTML = sessionStorage.EMAIL;

        buttonsHome.style.display = "none";
        usuarioLogado.style.display = "flex";

        const tipo = sessionStorage.TIPO_USUARIO;

        if (tipo === "jogador") {
            usuarioLogado.href = "./dashboard/jogador/index.html";
        } else if (tipo === "tecnico") {
            usuarioLogado.href = "./dashboard/tecnico/index.html";
        } else {
            usuarioLogado.href = "#";
        }

    } else {
        buttonsHome.style.display = "flex";
        usuarioLogado.style.display = "none";
    }
}
