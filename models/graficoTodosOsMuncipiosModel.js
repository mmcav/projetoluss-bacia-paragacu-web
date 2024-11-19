const db = require('../config/db');

const getGraficoTodosOsMunicipios = (callback) => {
    const query = 'SELECT NOME, ANO, SUM("AREA (HA)") AS "SOMA AREA" FROM tabela_dados GROUP BY NOME, ANO';
    db.all(query, (err, rows) => {
        callback(err, rows);
    });
}

module.exports = getGraficoTodosOsMunicipios;
