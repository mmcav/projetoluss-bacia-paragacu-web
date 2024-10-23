const express = require('express');
const renderMunicipio = require('../controllers/cidadeController');

const router = express.Router();

router.get('/:municipio', renderMunicipio);

module.exports = router;
