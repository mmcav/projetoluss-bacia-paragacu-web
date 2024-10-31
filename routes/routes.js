const express = require('express');
const renderMunicipio = require('../controllers/municipioController');
const renderDoisMunicipios = require('../controllers/doisMunicipiosController')

const router = express.Router();

router.get('/municipios/:municipio', renderMunicipio);

router.get('/municipios/:municipio/:municipioadicional', renderDoisMunicipios);

module.exports = router;
