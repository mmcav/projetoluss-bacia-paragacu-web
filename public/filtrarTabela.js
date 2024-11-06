function filtrarTabela(filtroAno = '') {
    const input = document.getElementById('searchInput');
    const filter = normalizarTexto(input.value);
    const tabela = document.getElementById('data-table');
    const linhas = tabela.getElementsByTagName('tr');

    let coluna = 0;
    switch (document.getElementById('dropdownMenu').value) {
        case 'municipio':
            coluna = 0;
            break;
        case 'codigo':
            coluna = 1;
            break;
        case 'nome':
            coluna = 4;
            break;
        case 'bacia':
            coluna = 5;
            break;
        default:
            coluna = 0;
    }

    for (let i = 0; i < linhas.length; i++) {
        const colunaMunicipio = linhas[i].getElementsByTagName('td')[coluna];
        const colunaAno = linhas[i].getElementsByTagName('td')[2];

        if (colunaMunicipio && colunaAno) {
            const municipioValor = colunaMunicipio.textContent || colunaMunicipio.innerText;
            const anoValor = colunaAno.textContent || colunaAno.innerText;

            // Verifica se o valor do input está presente no município ou no código
            if (normalizarTexto(municipioValor).indexOf(filter) > -1 && (filtroAno === '' || filtroAno === anoValor)) {
                linhas[i].style.display = "";
            } else {
                linhas[i].style.display = "none";
            }
        }
    }
}

function mudarPlaceholder() {
    switch (document.getElementById('dropdownMenu').value) {
        case 'municipio':
            document.getElementById('searchInput').placeholder = 'Pesquisar por Município...';
            break;
        case 'codigo':
            document.getElementById('searchInput').placeholder = 'Pesquisar por Código do IBGE...';
            break;
        case 'nome':
            document.getElementById('searchInput').placeholder = 'Pesquisar por Nome...';
            break;
        case 'bacia':
            document.getElementById('searchInput').placeholder = 'Pesquisar por Bacia...';
            break;
        default:
            document.getElementById('searchInput').placeholder = 'Opção inválida!';
    }
}