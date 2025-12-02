async function carregarPeneiras() {
    try {
        const resposta = await fetch(`/peneiras?idTecnico=${sessionStorage.ID_TECNICO}`);
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
                    <span class="titulo"><span class="negrito">${peneiras[i].time} - ${peneiras[i].categoria_de_base}</span></span>
                    <span class="local"><span class="negrito">Local:</span>${peneiras[i].local}</span>
                    <span class="data"><span class="negrito">Data:</span> ${peneiras[i].dia}/${peneiras[i].mes}/${peneiras[i].ano} - ${peneiras[i].horario}</span>
                    <button class="btn btn-inscrever" onclick="redirecionarParaDetalhesPeneira(${peneiras[i].id_peneira})">Ver detalhes</button>
                </div>
            `;
        }
    } catch (erro) {
        console.error("Falha na requisição: ", erro);
    }
}