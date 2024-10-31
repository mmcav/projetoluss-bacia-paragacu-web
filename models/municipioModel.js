const db = require('../config/db');

const getDadosMunicipio = (municipio, callback) => {
    const query = 'SELECT * FROM tabela_dados WHERE municipio = ?';
    db.all(query, [municipio], (err, rows) => {
        callback(err, rows);
    });
}

module.exports = getDadosMunicipio;
