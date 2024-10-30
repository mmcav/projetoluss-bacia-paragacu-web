const express = require('express');
const renderMunicipio = require('../controllers/cidadeController');
const renderDoisMunicipios = require('../controllers/duasCidadesController')

const router = express.Router();

router.get('/municipios/:municipio', renderMunicipio);

router.get('/municipios/:municipio/:municipioadicional', renderDoisMunicipios);

module.exports = router;
