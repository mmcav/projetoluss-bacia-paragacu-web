document.addEventListener('DOMContentLoaded', () => {
    const buscaMunicipio = document.getElementById('buscaMunicipio');
    const listaMunicipios = document.getElementById('listaMunicipios');

    if (window.municipios && Array.isArray(window.municipios)) {
        buscaMunicipio.addEventListener('input', () => {
            const busca = normalizarTexto(buscaMunicipio.value);
            
            listaMunicipios.innerHTML = '';

            if (busca.length === 0) {
                listaMunicipios.style.display = 'none';
                return;
            }

            const resultados = window.municipios.filter(municipio => normalizarTexto(municipio).includes(busca));
            
            if (resultados.length === 0) {
                listaMunicipios.style.display = 'none';
                return;
            }

            const cincoResultados = resultados.slice(0, 5);

            listaMunicipios.style.display = 'block';
            cincoResultados.forEach(resultado => {
                const li = document.createElement('li');
                li.textContent = resultado;
                li.addEventListener('click', () => {
                    if (window.location.pathname === '/') {
                        window.location.href = `/municipios/${resultado}`;
                    } else if (window.location.pathname.slice(0, 12) === '/municipios/') {
                        window.location.href = window.location.pathname + `/${resultado}`;
                    }
                });
                listaMunicipios.appendChild(li);
            });
        });
    }
});