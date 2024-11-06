const db = require('../config/db');

const getTodosOsMunicipios = (callback) => {
    const query = 'SELECT * FROM tabela_dados';
    db.all(query, (err, rows) => {
        callback(err, rows);
    });
}

module.exports = getTodosOsMunicipios;
