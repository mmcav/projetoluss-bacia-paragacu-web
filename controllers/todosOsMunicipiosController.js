const getTodosOsMunicipios = require('../models/todosOsMunicipiosModel');
const getGraficoTodosOsMuncipiosModel = require('../models/graficoTodosOsMuncipiosModel');

const renderTodosOsMunicipios = (req, res) => {
    getTodosOsMunicipios((err, dados) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            getGraficoTodosOsMuncipiosModel((err, dadosGrafico) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.render('todosOsMunicipios', {
                        dados: dados,
                        dadosGrafico: dadosGrafico
                    });
                }
            });
        }
    });
}

module.exports = renderTodosOsMunicipios;
