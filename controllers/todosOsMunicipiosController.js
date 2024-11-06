const getTodosOsMunicipios = require('../models/todosOsMunicipiosModel');

const renderTodosOsMunicipios = (req, res) => {
    getTodosOsMunicipios((err, dados) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.render('todosOsMunicipios', {
                dados: dados
            });
        }
    });
}

module.exports = renderTodosOsMunicipios;
