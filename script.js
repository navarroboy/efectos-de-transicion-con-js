const leerMasButton = document.querySelector('.leer-mas');
const textoAdicional = document.querySelector('.texto-adicional');

leerMasButton.addEventListener('click', () => {
	if (textoAdicional.style.display === 'block') {
		textoAdicional.style.display = 'none';
		leerMasButton.textContent = 'Leer más';
	} else {
		textoAdicional.style.display = 'block';
		leerMasButton.textContent = 'Ocultar';
	}
});