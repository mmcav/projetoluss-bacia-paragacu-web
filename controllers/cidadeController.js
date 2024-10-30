const getDadosMunicipio = require('../models/cidadeModel');
const referenciaMunicipios = require('../utils/referenciaMunicipios');
const normalizarTexto = require('../utils/normalizarTexto');
const incrementadorDeDados = require('./incrementadorDeDados');

const renderMunicipio = (req, res) => {
    const municipioParametro = req.params.municipio;
    let municipioBuscar;
    for (const municipio of referenciaMunicipios) {
        if (normalizarTexto(municipio) === normalizarTexto(municipioParametro)) {
            municipioBuscar = municipio;
            break;
        }
    }
    if (municipioBuscar) {
        getDadosMunicipio(municipioBuscar, (err, dados) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                const dadosFinais = incrementadorDeDados(dados);
                res.render('cidade', {
                    municipio: municipioBuscar,
                    codigo: dadosFinais[0]['CODIGO'],
                    bacia: dadosFinais[0]['BACIA'],
                    dados: dadosFinais
                });
            }
        });
    } else {
        res.status(404).send('município não encontrado');
    }
}

module.exports = renderMunicipio;
