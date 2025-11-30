async function carregarGraficosDashboardJogador() {
    const peneirasPorCidadeNoEstado = await buscarPeneirasPorCidadeNoEstado();
    plotarGraficoPeneirasPorCidadeNoEstado(peneirasPorCidadeNoEstado);
}

async function buscarPeneirasPorCidadeNoEstado() {
    const resultado = await fetch(`/dashboards/jogador/graficos/peneiras-abertas-estado?idUsuario=${sessionStorage.ID_USUARIO}`);
    const dados = await resultado.json();
    return dados.resultado;
}

function plotarGraficoPeneirasPorCidadeNoEstado(peneiras) {
    plotarTituloGrafico(peneiras[0].uf);

    const ctx = document.getElementById('graficoPeneirasPorCidadeEstado');

    const labels = [];
    const valores = [];

    for (let i = 0; i < peneiras.length; i++) {
        labels.push(peneiras[i].cidade);
        valores.push(peneiras[i].quantidade);
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Peneiras',
                data: valores,
                backgroundColor: 'rgba(101, 161, 240, 1)',
                borderColor: 'rgba(50, 128, 229, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: { y: { beginAtZero: true } }
        }
    });
}

function plotarTituloGrafico(uf) {
    const titulo = document.getElementById("estado-peneiras-abertas");
    titulo.innerHTML += uf;
}

async function carregarKPIsDashboardJogador() {
    const peneirasNaCidade = await buscarPeneirasNaCidadeDoUsuario();
    const timesNaCidade = await buscarTimesNaCidadeDoUsuario();
    const peneirasInscritas = await buscarPeneirasInscritas();

    preencherKPIPeneirasNaCidade(peneirasNaCidade);
    preencherKPITimesNaCidade(timesNaCidade);
    preencherKPIPeneirasInscritas(peneirasInscritas);
}

async function buscarPeneirasNaCidadeDoUsuario() {
    const resultado = await fetch(`/dashboards/jogador/kpis/peneiras-abertas-cidade?idUsuario=${sessionStorage.ID_USUARIO}`);
    const dados = await resultado.json();
    return dados.resultado;
}

async function buscarTimesNaCidadeDoUsuario() {
    const resultado = await fetch(`/dashboards/jogador/kpis/times-cidade?idUsuario=${sessionStorage.ID_USUARIO}`);
    const dados = await resultado.json();
    return dados.resultado;
}

async function buscarPeneirasInscritas() {
    const resultado = await fetch(`/dashboards/jogador/kpis/quantidade-peneiras-inscritas?idJogador=${sessionStorage.ID_JOGADOR}`);
    const dados = await resultado.json();
    return dados.resultado;
}

function preencherKPIPeneirasNaCidade(valor) {
    const kpi = document.getElementById("kpi-peneiras-na-minha-cidade");
    kpi.innerHTML = valor.length > 0 ? valor[0].quantidade : 0;
}

function preencherKPITimesNaCidade(valor) {
    const kpi = document.getElementById("kpi-times-na-minha-cidade");
    kpi.innerHTML = valor.length > 0 ? valor[0].quantidade : 0;
}


function preencherKPIPeneirasInscritas(valor) {
    const kpi = document.getElementById("kpi-peneiras-inscritas");
    kpi.innerHTML = valor.length > 0 ? valor[0].inscricoes : 0;
}