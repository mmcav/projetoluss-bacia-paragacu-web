document.addEventListener('DOMContentLoaded', () => {
    const helpButton = document.getElementById('help-button');
    const balloon = document.getElementById('balloon');
    const closeButton = document.getElementById('balloon-close');

    helpButton.addEventListener('click', () => {
        balloon.style.display = 'block';
    });
  
    closeButton.addEventListener('click', () => {
        balloon.style.display = 'none';
    });
  
    document.addEventListener('click', (event) => {
        if (!balloon.contains(event.target) && event.target !== helpButton) {
            balloon.style.display = 'none';
        }
    });
});