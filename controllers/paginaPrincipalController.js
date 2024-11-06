const referenciaMunicipios = require('../utils/referenciaMunicipios');

const renderPaginaPrincipal = (req, res) => {
    res.render('paginaPrincipal', {
        municipios: referenciaMunicipios.slice().sort()
    });
}

module.exports = renderPaginaPrincipal;