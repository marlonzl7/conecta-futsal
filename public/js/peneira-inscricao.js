// const { application } = require("express");

async function carregarPeneira() {
    try {
        const params = new URLSearchParams(window.location.search);
        const idPeneira = params.get("id");
        console.log(idPeneira);

        const resposta = await fetch(`/peneiras/${idPeneira}`);
        const dados = await resposta.json();
        const idUsuario = sessionStorage.ID_USUARIO;

        let data = dados.resultado[0].data_hora_realizacao;
        let horario = dados.resultado[0].data_hora_realizacao;
        let endereco = dados.resultado[0].logradouro;
        endereco += dados.resultado[0].numero;
        endereco += dados.resultado[0].bairro;
        endereco += dados.resultado[0].cidade;
        endereco += dados.resultado[0].uf;

        document.getElementById("titulo").innerHTML = dados.resultado[0].titulo;
        document.getElementById("status").innerHTML = (dados.resultado[0].status == true) ? "Aberta" : "Fechada"; 
        document.getElementById("categoria").innerHTML = dados.resultado[0].nome;
        // document.getElementById("data").innerHTML = data;
        // document.getElementById("horario").innerHTML = horario;
        // document.getElementById("endereco").innerHTML = endereco;
        document.getElementById("data-inicio-inscricao").innerHTML = dados.resultado[0].data_inicio_inscricao;
        document.getElementById("data-final-inscricao").innerHTML = dados.resultado[0].data_final_inscricao;
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
            window.location.href="./../peneiras.html";
        })
    })
    .catch (function (erro) {
        console.error("Erro: ", erro);
        alert("Ocorreu um erro ao realizar inscrição: ");
    });
}