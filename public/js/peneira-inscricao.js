async function carregarPeneira() {
    try {
        const params = new URLSearchParams(window.location.search);
        const idPeneira = params.get("id");
        console.log(idPeneira);

        const resposta = await fetch(`/peneiras/${idPeneira}`);
        const dados = await resposta.json();
        const idUsuario = sessionStorage.ID_USUARIO;

        const ano = dados.resultado[0].ano;
        const mes = dados.resultado[0].mes;
        const dia = dados.resultado[0].dia;
        const data = `${dia}/${mes}/${ano}`;
        const horario = dados.resultado[0].horario;

        document.getElementById("titulo").innerHTML = dados.resultado[0].time;
        document.getElementById("status").innerHTML = (dados.resultado[0].status == true) ? "Aberta" : "Fechada"; 
        document.getElementById("categoria").innerHTML = dados.resultado[0].categoria_de_base;
        document.getElementById("data-realizacao").innerHTML = data;
        document.getElementById("horario").innerHTML = horario;
        document.getElementById("endereco").innerHTML = dados.resultado[0].local;
        document.getElementById("button").innerHTML += `<button class="btn btn-inscrever" id="btnInscrever" onclick="inscreverUsuario(${idPeneira}, ${idUsuario})">Inscrever-se</button>`;
    } catch (erro) {
        console.error("Erro ao buscar a peneira:", erro);
    }
}

async function inscreverUsuario(idPeneira, idUsuario) {
    const dados = {
        "idPeneira": idPeneira,
        "idUsuario": idUsuario
    }

    fetch("/inscricoes/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }) 
    .then (function (resposta) {
        if (!resposta.ok) {
            throw "Erro ao realizar inscrição.";
        }

        resposta.json().then(json => {
            alert("Inscrição realizada com sucesso!");
            window.location.href="./index.html";
        })
    })
    .catch (function (erro) {
        console.error("Erro: ", erro);
        alert("Ocorreu um erro ao realizar inscrição: ");
    });
}