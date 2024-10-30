const getDadosMunicipio = require('../models/cidadeModel');
const referenciaMunicipios = require('../utils/referenciaMunicipios');
const normalizarTexto = require('../utils/normalizarTexto');
const incrementadorDeDados = require('./incrementadorDeDados');
const organizadorDadosDuasCidades = require('./organizadorDadosDuasCidades');

const renderDoisMunicipios = (req, res) => {
    const municipioParametro = req.params.municipio;
    const municipioParametroAdicional = req.params.municipioadicional;
    let municipioBuscar, municipioBuscarAdicional;
    for (const municipio of referenciaMunicipios) {
        if (normalizarTexto(municipio) === normalizarTexto(municipioParametro)) {
            municipioBuscar = municipio;
        }
        if (normalizarTexto(municipio) === normalizarTexto(municipioParametroAdicional)) {
            municipioBuscarAdicional = municipio;
        }
        if (municipioBuscar && municipioBuscarAdicional) {
            break;
        }
    }
    if (municipioBuscar && municipioBuscarAdicional) {
        getDadosMunicipio(municipioBuscar, (err, dados) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                getDadosMunicipio(municipioBuscarAdicional, (err, dadosAdicionais) => {
                    if (err) {
                        res.status(500).send(err.message);
                    } else {
                        const dadosFinais = incrementadorDeDados(dados);
                        const dadosFinaisAdicionais = incrementadorDeDados(dadosAdicionais);
                        const dadosTabela = organizadorDadosDuasCidades(dadosFinais, dadosFinaisAdicionais);
                        res.render('doisMunicipios', {
                            municipio: municipioBuscar,
                            codigo: dadosFinais[0]['CODIGO'],
                            bacia: dadosFinais[0]['BACIA'],
                            dados: dadosFinais,
                            municipioadicional: municipioBuscarAdicional,
                            codigoadicional: dadosFinaisAdicionais[0]['CODIGO'],
                            baciaadicional: dadosFinaisAdicionais[0]['BACIA'],
                            dadosadicionais: dadosFinaisAdicionais,
                            dadostabela: dadosTabela,
                            voltar: `/municipios/${municipioParametro}`
                        });
                    }
                });
            }
        });
    } else {
        res.status(404).send('município não encontrado');
    }
}

module.exports = renderDoisMunicipios;
