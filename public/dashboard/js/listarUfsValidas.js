async function listarUfsValidas() {
    const selectUF = document.getElementById("uf");

    selectUF.innerHTML = `<option value="#">Selecione...</option>`;

    const UFS = await buscarUfsValidas();

    console.log("UFs recebidas:", UFS);

    for (let i = 0; i < UFS.length; i++) {
        selectUF.innerHTML += `<option value="${UFS[i]}">${UFS[i]}</option>`;
    }
}

async function buscarUfsValidas() {
    try {
        const resposta = await fetch("/enderecos/listar/ufs-validas");

        if (resposta.ok) {
            return resposta.json();
        } else {
            console.error("Erro ao buscar UFs válidas");
            return [];
        }
    } catch (erro) {
        console.error("Erro:", erro);
        return [];
    }
}