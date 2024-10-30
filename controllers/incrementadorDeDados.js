const incrementadorDeDados = (data) => {
    const results = {};

    data.forEach(item => {
        const { NOME, ANO } = item;

        if (!results[NOME]) {
            results[NOME] = {};
        }

        results[NOME][ANO] = item;
    });

    const mergedResults = [];

    Object.keys(results).forEach(NOME => {
        const years = Object.keys(results[NOME]).sort((a, b) => a - b);
        
        const firstYearData = results[NOME][years[0]];

        mergedResults.push({
            MUNICIPIO: firstYearData.MUNICIPIO,
            ANO: firstYearData.ANO,
            CODIGO: firstYearData.CODIGO,
            "AREA (HA)": firstYearData['AREA (HA)'],
            NOME: NOME,
            BACIA: firstYearData.BACIA,
            ABSOLUTO: "",
            RELATIVO: "",
        });

        years.forEach((year, index) => {
            if (index > 0) {
                const previousYearData = results[NOME][years[index - 1]];
                const currentYearData = results[NOME][year];

                const absoluteChange = currentYearData['AREA (HA)'] - previousYearData['AREA (HA)'];
                const relativeChange = ((absoluteChange / previousYearData['AREA (HA)']) * 100);
                
                mergedResults.push({
                    MUNICIPIO: currentYearData.MUNICIPIO,
                    ANO: currentYearData.ANO,
                    CODIGO: currentYearData.CODIGO,
                    "AREA (HA)": currentYearData['AREA (HA)'],
                    NOME: NOME,
                    BACIA: currentYearData.BACIA,
                    ABSOLUTO: absoluteChange,
                    RELATIVO: relativeChange,
                });
            }
        });
    });

    return mergedResults;
}

module.exports = incrementadorDeDados;