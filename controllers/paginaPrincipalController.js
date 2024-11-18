const referenciaMunicipios = require('../utils/referenciaMunicipios');
const referenciaMunicipiosComCodigo = require('../utils/referenciaMunicipiosComCodigo');

const renderPaginaPrincipal = (req, res) => {
    res.render('paginaPrincipal', {
        municipios: referenciaMunicipios.slice().sort(),
        municipiosComCodigo: referenciaMunicipiosComCodigo
    });
}

module.exports = renderPaginaPrincipal;