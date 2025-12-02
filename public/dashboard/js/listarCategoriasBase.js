async function listarCategoriasBase() {
    const selectCategoriaBase = document.getElementById("categoriaBase");

    selectCategoriaBase.innerHTML = `<option value="#">Selecione...</option>`;

    const categoriasBase = await buscarCategoriasBase();

    for (let i = 0; i < categoriasBase.length; i++) {
        selectCategoriaBase.innerHTML += `
            <option value="${categoriasBase[i].id_categoria_base}">${categoriasBase[i].nome}</option>
        `;
    }
}

async function buscarCategoriasBase() {
    try {
        const resposta = await fetch("/categorias-de-base/listar");
        const dados = await resposta.json();
        const categoriasBase = dados.resultado;
        console.log(categoriasBase);

        if (resposta.ok) {
            return categoriasBase;
        } else {
            console.error("Erro ao buscar Categorias de Base");
            return [];
        }
    } catch (erro) {
        console.error("Erro:", erro);
        return [];
    }
}