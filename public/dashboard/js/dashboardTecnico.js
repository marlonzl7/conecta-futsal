async function carregarGraficos() {
    const inscricoes = await obterInscricoesPorPeneira();
    const inscricoesPorMes = await obterTaxaInscricoesPorMes();

    plotarGraficoInscricoesPorPeneira(inscricoes);
    plotarGraficoTaxaInscricoesPorMes(inscricoesPorMes);
}

async function obterInscricoesPorPeneira() {
    const resultado = await fetch(`/dashboards/tecnico/graficos/inscricoes-por-peneira?idTecnico=${sessionStorage.ID_TECNICO}`);
    const dados = await resultado.json();
    return dados.resultado;
}

async function obterTaxaInscricoesPorMes() {
    const resultado = await fetch(`/dashboards/tecnico/graficos/taxa-crescimento-inscricoes?idTecnico=${sessionStorage.ID_TECNICO}`);
    const dados = await resultado.json();
    return dados.resultado;
}

async function plotarGraficoInscricoesPorPeneira(inscricoes) {
    const ctx = document.getElementById('graficoInscricoesPorPeneira');

    const labels = [];
    const valores = [];

    for(let i = 0; i < inscricoes.length; i++) {
        const item = inscricoes[i];

        labels.push(item.peneira);
        valores.push(item.inscricoes);
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Inscrições',
                data: valores,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

async function plotarGraficoTaxaInscricoesPorMes(inscricoes) {
    const ctx = document.getElementById('graficoTaxaInscricoesPorMes');

    const meses = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];
    const labels = [];
    const valores = [];

    for (let i = 0; i < inscricoes.length; i++) {
        labels.push(meses[inscricoes[i].mes - 1]);
        valores.push(inscricoes[i].inscricoes);
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Inscrições',
                data: valores,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

async function carregarKPIs() {
    const totalInscricoes = await buscarTotalInscricoes();
    const posicaoComMaiorDemanda = await buscarPosicaoComMaiorDemanda();

    preencherKPITotalInscricoes(totalInscricoes);
    preencherKPIPosicaoComMaiorDemanda(posicaoComMaiorDemanda);
}

async function buscarTotalInscricoes() {
    const resultado = await fetch(`/dashboards/tecnico/kpis/total-jogadores-inscritos-peneiras?idTecnico=${sessionStorage.ID_TECNICO}`);
    const dados = await resultado.json();
    return dados.resultado;
}

async function buscarPosicaoComMaiorDemanda() {
    const resultado = await fetch(`/dashboards/tecnico/kpis/posicao-com-maior-demanda?idTecnico=${sessionStorage.ID_TECNICO}`);
    const dados = await resultado.json();
    return dados.resultado;
}

function preencherKPITotalInscricoes(valor) {
    const kpi = document.getElementById("kpi-total-inscricoes");

    if (!valor || valor.length === 0) {
        kpi.innerHTML = 0;
        return;
    }

    kpi.innerHTML = valor[0].totalInscricoes;
}

function preencherKPIPosicaoComMaiorDemanda(valor) {
    const kpi = document.getElementById("kpi-posicao-maior-demanda");

    if (!valor || !valor.posicao) {
        kpi.innerHTML = "Nenhuma";
        return;
    }

    kpi.innerHTML = valor.posicao + " - " + valor.demanda + "%";
}