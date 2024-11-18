const incrementadorDeDados = (dados) => {
    const resultados = {};

    dados.forEach(item => {
        const { NOME, ANO } = item;

        if (!resultados[NOME]) {
            resultados[NOME] = {};
        }

        resultados[NOME][ANO] = item;
    });

    const resultadosFinais = [];

    Object.keys(resultados).forEach(NOME => {
        const anos = Object.keys(resultados[NOME]).sort((a, b) => a - b);
        
        const dadosPrimeiroAno = resultados[NOME][anos[0]];

        resultadosFinais.push({
            MUNICIPIO: dadosPrimeiroAno.MUNICIPIO,
            ANO: dadosPrimeiroAno.ANO,
            CODIGO: dadosPrimeiroAno.CODIGO,
            "AREA (HA)": dadosPrimeiroAno['AREA (HA)'],
            NOME: NOME,
            BACIA: dadosPrimeiroAno.BACIA,
            ABSOLUTO: "",
            RELATIVO: "",
        });

        anos.forEach((ano, idx) => {
            if (idx > 0) {
                const dadosAnoAnterior = resultados[NOME][anos[idx - 1]];
                const dadosAnoAtual = resultados[NOME][ano];

                const mudancaAbsoluta = dadosAnoAtual['AREA (HA)'] - dadosAnoAnterior['AREA (HA)'];
                const mudancaRelativa = ((mudancaAbsoluta / dadosAnoAnterior['AREA (HA)']) * 100);
                
                resultadosFinais.push({
                    MUNICIPIO: dadosAnoAtual.MUNICIPIO,
                    ANO: dadosAnoAtual.ANO,
                    CODIGO: dadosAnoAtual.CODIGO,
                    "AREA (HA)": dadosAnoAtual['AREA (HA)'],
                    NOME: NOME,
                    BACIA: dadosAnoAtual.BACIA,
                    ABSOLUTO: mudancaAbsoluta,
                    RELATIVO: mudancaRelativa,
                });
            }
        });
    });

    return resultadosFinais;
}

module.exports = incrementadorDeDados;