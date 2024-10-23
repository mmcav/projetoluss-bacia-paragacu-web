function normalizarTexto(texto) {
    return texto.toLowerCase()
                .replace(/á|à|â|ã/g, 'a')
                .replace(/é|è|ê/g, 'e')
                .replace(/í|ì|î/g, 'i')
                .replace(/ó|ò|ô|õ/g, 'o')
                .replace(/ú|ù|û/g, 'u')
                .replace(/ç/g, 'c')
                .replace(/ñ/g, 'n');
}

module.exports = normalizarTexto;