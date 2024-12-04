document.addEventListener("DOMContentLoaded", () => {
    const celulasComparacao = document.querySelectorAll('.comparacao');
    
    celulasComparacao.forEach(celula => {
        if (celula.textContent === "") {
            celula.textContent = '\u2014';
        } else {
            const valor = parseFloat(celula.textContent);
            if (valor > 0) {
                celula.classList.add('positivo');
            } else {
                celula.classList.add('negativo');
            }
            celula.textContent = valor.toFixed(2).toString().replace('.', ',');
        }
    });

    document.querySelectorAll('td[name]').forEach(celula => {
        if (celula.textContent === "") {
            celula.textContent = '\u2014';
        } else {
            celula.textContent = parseFloat(celula.textContent).toFixed(2).toString().replace('.', ',');
        }
    });
});