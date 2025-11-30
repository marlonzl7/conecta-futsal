async function carregarTecnicos() {
    try {
        const resposta = await fetch("/tecnicos");
        const dados = await resposta.json();
        const tecnicos = dados.resultado;

        const div = document.getElementById("secao-principal");

        div.innerHTML = "";

        if (!tecnicos || tecnicos.length === 0) {
            div.innerHTML = "<p>Nenhum tecnico encontrado.</p>";
        }

        for (let i = 0; i < tecnicos.length; i++) {
            div.innerHTML += `
                <div class="item">
                    <img src="./assets/images/padrao-sem-foto.png" alt="Foto do Técnico">
                    <span class="titulo"><span class="negrito">${tecnicos[i].nome_completo}</span></span>
                    <span class="time"><span>Time: ${tecnicos[i].time}</span></span>
                    <span class="local"><span>Local: ${tecnicos[i].local}</span></span>
                    <button class="btn btn-inscrever" onclick="redirecionarParaTecnico(${tecnicos[i].id_tecnico})">Ver detalhes</button>
                </div>
            `;
        }
    } catch (erro) {
        console.error("Falha na requisição: ", erro);
    }
}

async function pesquisarTecnicos(q) {
    const resultado = await fetch(`/tecnicos?q=${q}`);
    const dados = await resultado.json();
    const tecnicos = dados.resultado;

    const div = document.getElementById("secao-principal");
    div.innerHTML = "";

    if (!tecnicos || tecnicos.length === 0) {
        div.innerHTML = "<p>Nenhum tecnico encontrado.</p>";
        return;
    }

    for (let i = 0; i < tecnicos.length; i++) {
        div.innerHTML += `
            <div class="item">
                <img src="./assets/images/padrao-sem-foto.png" alt="Foto do Técnico">
                <span class="titulo"><span class="negrito">${tecnicos[i].nome_completo}</span></span>
                <span class="time"><span>Time: ${tecnicos[i].time}</span></span>
                <span class="local"><span>Local: ${tecnicos[i].local}</span></span>
                <button class="btn btn-inscrever" onclick="redirecionarParaTecnico(${tecnicos[i].id_tecnico})">Ver detalhes</button>
            </div>
        `;
    }
}