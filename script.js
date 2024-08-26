const watchDocument = document.querySelector("#watch");
let segundos = 0;
let minutos = 0;
let horas = 0;
let interval;

function init() {
    interval = setInterval(watch, 1000);
}

const digitZero = (digit) => {
    return digit < 10 ? '0' + digit : digit;
}

// Função pausar
const pause = () => {
    clearInterval(interval);
}

// Função zerar
const clearAll = () => {
    clearInterval(interval);
    segundos = 0;
    minutos = 0;
    horas = 0;
    watchDocument.innerHTML = "00:00:00";
}

function watch() {
    segundos++;
    if (segundos === 60) {
        minutos++;
        segundos = 0;
    }
    if (minutos === 60) {
        horas++;
        minutos = 0;
    }

    watchDocument.innerHTML = digitZero(horas) + ":" + digitZero(minutos) + ":" + digitZero(segundos);
}
