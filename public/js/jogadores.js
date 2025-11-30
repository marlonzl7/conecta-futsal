async function carregarJogadores() {
    try {
        const resposta = await fetch("/jogadores");
        const dados = await resposta.json();
        const jogadores = dados.resultado;

        const div = document.getElementById("secao-principal");

        div.innerHTML = "";

        if (!jogadores || jogadores.length === 0) {
            div.innerHTML = "<p>Nenhum jogador encontrado.</p>";
        }

        for (let i = 0; i < jogadores.length; i++) {
            div.innerHTML += `
                <div class="item">
                    <img src="./assets/images/padrao-sem-foto.png" alt="Foto do Jogador">
                    <span class="titulo"><span class="negrito">${jogadores[i].nome_completo}</span></span>
                    <span class="local"><span>Posição: ${jogadores[i].posicao}</span></span>
                    <span class="local"><span>Cidade: ${jogadores[i].cidade}</span></span>
                    <button class="btn btn-inscrever" onclick="redirecionarParaJogador(${jogadores[i].id_jogador})">Ver detalhes</button>
                </div>
            `;
        }
    } catch (erro) {
        console.error("Falha na requisição: ", erro);
    }
}

async function pesquisarJogadores(q) {
    const resultado = await fetch(`/jogadores?q=${q}`);
    const dados = await resultado.json();
    const jogadores = dados.resultado;

    const div = document.getElementById("secao-principal");
    div.innerHTML = "";

    if (!jogadores || jogadores.length === 0) {
        div.innerHTML = "<p>Nenhum jogador encontrado.</p>";
        return;
    }

    for (let i = 0; i < jogadores.length; i++) {
        div.innerHTML += `
            <div class="item">
                <img src="./assets/images/padrao-sem-foto.png" alt="Foto do jogador">
                <span class="titulo"><span class="negrito">${jogadores[i].nome_completo}</span></span>
                <span class="local"><span>Posição: ${jogadores[i].posicao}</span></span>
                <span class="local"><span>Cidade: ${jogadores[i].cidade}</span></span>
                <button class="btn btn-inscrever" onclick="redirecionarParaJogador(${jogadores[i].id_jogador})">Ver detalhes</button>
            </div>
        `;
    }
}