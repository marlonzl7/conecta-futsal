async function carregarPeneiras() {
    try {
        const resposta = await fetch("/peneiras/listar");
        const dados = await resposta.json();
        const peneiras = dados.resultado;

        const div = document.getElementById("secao-principal");

        div.innerHTML = "";

        if (!peneiras || peneiras.length === 0) {
            div.innerHTML = "<p>Nenhuma peneira encontrada.</p>";
            return;
        }

        for (let i = 0; i < peneiras.length; i++) {
            div.innerHTML += `
                <div class="item">
                    <img src="./assets/images/padrao-sem-foto.png" alt="Escudo do Time">
                    <span class="titulo"><span class="negrito">${peneiras[i].time} - ${peneiras[i].categoria_de_base}</span></span>
                    <span class="local"><span class="negrito">Local:</span> ${peneiras[i].local}</span>
                    <span class="data"><span class="negrito">Data:</span> ${peneiras[i].data}</span>
                    <button class="btn btn-inscrever" onclick="redirecionarParaPeneira(${peneiras[i].id_peneira})">Inscrever-se</button>
                </div>
            `;
        }
    } catch (erro) {
        console.error("Falha na requisição: ", erro);
    }
}

async function pesquisarPeneiras(q) {    
    const resultado = await fetch(`/peneiras/listar?q=${q}`);
    const dados = await resultado.json();
    const peneiras = dados.resultado;

    const div = document.getElementById("secao-principal");
    div.innerHTML = "";

    if (!peneiras || peneiras.length === 0) {
        div.innerHTML = "<p>Nenhuma peneira encontrada.</p>";
        return;
    }

    console.log(peneiras);

    for (let i = 0; i < peneiras.length; i++) {
        div.innerHTML += `
            <div class="item">
                <img src="./assets/images/padrao-sem-foto.png" alt="Escudo do Time">
                <span class="titulo"><span class="negrito">${peneiras[i].time} - ${peneiras[i].categoria_de_base}</span></span>
                <span class="local"><span class="negrito">Local:</span> ${peneiras[i].local}</span>
                <span class="data"><span class="negrito">Data:</span> ${peneiras[i].data}</span>
                <button class="btn btn-inscrever" onclick="redirecionarParaPeneira(${peneiras[i].id_peneira})">Inscrever-se</button>
            </div>
        `;
    }
}