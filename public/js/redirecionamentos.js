function redirecionarParaLogin() {
    window.location.href="/login.html";
}

function redirecionarParaCadastro() {
    window.location.href="/cadastro.html";
}

function redirecionarParaPeneira(id) {
    window.location.href=`/peneira-inscricao.html?id=${id}`;
}

function redirecionarParaTime(id) {
    window.location.href=`/time-detalhes?id=${id}`;
}

function redirecionarParaCadastroEndereco(nomeTime, descricaoTime, categoriaBase) {
    sessionStorage.NOME_TIME = nomeTime;
    sessionStorage.DESCRICAO_TIME = descricaoTime;
    sessionStorage.CATEGORIA_BASE = categoriaBase;

    window.location.href="/dashboard/cadastro-endereco-time.html";
}