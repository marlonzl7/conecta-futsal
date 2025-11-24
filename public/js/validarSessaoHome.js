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
    } else {
        buttonsHome.style.display = "flex";
        usuarioLogado.style.display = "none";
    }
}