let cronometro=contador_segundos = contador_minutos = contador_centesimas = contador_horas = 0;

function detener() {
	clearInterval(cronometro);
}

function reanudar() {
	iniciar();
}

function reiniciar() {
	clearInterval(cronometro);
	contador_segundos = 0;
	contador_minutos = 0;
	contador_centesimas = 0;
	contador_horas = 0;
	inpCentecimas.innerHTML = ':00';
	inpSegundos.innerHTML = ':00';
	inpMinutos.innerHTML = ':00';
	inpHoras.innerHTML = '00';
}

function iniciar() {
	inpCentecimas = document.getElementById('dvCentesimas');
	inpSegundos = document.getElementById("dvSegundos");
	inpMinutos = document.getElementById("dvMinutos");
	inpHoras = document.getElementById('dvHoras');
	cronometro = setInterval(
		function () {
			if (contador_centesimas == 100) {
				contador_centesimas = 0;
				contador_segundos++;
				if (contador_segundos == 60) {
					contador_segundos = 0;
					contador_minutos++;
					if (contador_minutos == 60) {
						contador_minutos = 0;
						contador_horas++;
					}
				}
			}

			if (contador_centesimas < 10)
				inpCentecimas.innerHTML = ':0' + contador_centesimas;
			else
				inpCentecimas.innerHTML = ':' + contador_centesimas;

			if (contador_segundos < 10)
				inpSegundos.innerHTML = ':0' + contador_segundos;
			else
				inpSegundos.innerHTML = ':' + contador_segundos;

			if (contador_minutos < 10)
				inpMinutos.innerHTML = ':0' + contador_minutos;
			else
				inpMinutos.innerHTML = ':' + contador_minutos;

			if (contador_horas < 10)
				inpHoras.innerHTML = '0' + contador_horas;
			else
				inpHoras.innerHTML = contador_horas;
			contador_centesimas++;
		}
		, 10);

}