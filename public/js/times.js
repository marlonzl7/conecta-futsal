async function carregarTimes() {
    try {
        const resposta = await fetch("/times");
        const dados = await resposta.json();
        const times = dados.resultado;

        const div = document.getElementById("secao-principal");

        div.innerHTML = "";

        if (!times || times.length === 0) {
            div.innerHTML = "<p>Nenhum time encontrado.</p>";
        }

        for (let i = 0; i < times.length; i++) {
            div.innerHTML += `
                <div class="item">
                    <img src="./assets/images/padrao-sem-foto.png" alt="Escudo do Time">
                    <span class="nome"><span class="negrito">${times[i].nome}</span></span>
                    <span class="descricao"><span>Descrição: ${times[i].descricao}</span></span>
                    <span class="local"><span>Local: ${times[i].local}</span></span>
                    <button class="btn btn-inscrever" onclick="redirecionarParaTime(${times[i].id_time})">Ver detalhes</button>
                </div>
            `;
        }
    } catch (erro) {
        console.error("Falha na requisição: ", erro);
    }
}

async function pesquisarTimes(q) {
    const resultado = await fetch(`/times?q=${q}`);
    const dados = await resultado.json();
    const times = dados.resultado;

    const div = document.getElementById("secao-principal");
    div.innerHTML = "";

    if (!times || times.length === 0) {
        div.innerHTML = "<p>Nenhum time encontrado.</p>";
        return;
    }

    for (let i = 0; i < times.length; i++) {
        div.innerHTML += `
            <div class="item">
                <img src="./assets/images/padrao-sem-foto.png" alt="Escudo do Time">
                <span class="nome"><span class="negrito">${times[i].nome}</span></span>
                <span class="descricao"><span>Descrição: ${times[i].descricao}</span></span>
                <span class="local"><span>Local: ${times[i].local}</span></span>
                <button class="btn btn-inscrever" onclick="redirecionarParaTime(${times[i].id_time})">Ver detalhes</button>
            </div>
        `;
    }
}