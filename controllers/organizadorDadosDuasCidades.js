const refereciaNomes = require('../utils/referenciaNomes');
const referenciaAnos = require('../utils/referenciaAnos');

const organizadorDadosDuasCidades = (dados, dadosAdicionais) => {
    const municipio1 = dados[0]['MUNICIPIO'];
    const municipio2 = dadosAdicionais[0]['MUNICIPIO'];
  
    const listaFinal = [];
    for (const nome of refereciaNomes) {
        for (const ano of referenciaAnos) {
            const dadoFinal = {
                NOME: nome,
                ANO: ano,
                "AREA (HA)": "",
                ABSOLUTO: "",
                RELATIVO: "",
                "AREA (HA) ADICIONAL": "",
                ABSOLUTOADICIONAL: "",
                RELATIVOADICIONAL: ""
            }
            const dadoEncontrado = dados.find(dado => dado['NOME'] === nome && dado['ANO'] === ano);
            if (dadoEncontrado) {
                dadoFinal["AREA (HA)"] = dadoEncontrado["AREA (HA)"];
                dadoFinal["ABSOLUTO"] = dadoEncontrado["ABSOLUTO"];
                dadoFinal["RELATIVO"] = dadoEncontrado["RELATIVO"];
            }
            const dadoAdicionalEncontrado = dadosAdicionais.find(dado => dado['NOME'] === nome && dado['ANO'] === ano);
            if (dadoAdicionalEncontrado) {
                dadoFinal["AREA (HA) ADICIONAL"] = dadoAdicionalEncontrado["AREA (HA)"];
                dadoFinal["ABSOLUTOADICIONAL"] = dadoAdicionalEncontrado["ABSOLUTO"];
                dadoFinal["RELATIVOADICIONAL"] = dadoAdicionalEncontrado["RELATIVO"];
            }
            listaFinal.push(dadoFinal);
        }
    }

    return listaFinal;
}

module.exports = organizadorDadosDuasCidades;