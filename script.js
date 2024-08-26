const watchDocument = document.querySelector("#watch");
let segundos = 0;
let minutos = 0;
let horas = 0;
let interval;

function init(){
    watch();
    interval = setInterval(watch, 10000);
}
const digtZero = (digit)=> {
    if(digit<10){
        return  0${digit};
         }else {
            return digit;
         }
}
// funcão pause
const pause = () => {
    clearInterval(interval);
    segundos = 0;
    minutos = 0;
    watchDocument.innerHTML = "00:00:00";
}

//funcão zerar
const clearAll = () =>{
    clearInterval(interval);
}

function watch(){
    segundos;
    if (segundos === 60) {
    minutos = minutos + 1;
    segundos = 0;
    }
    if (minutos === 60) {
    horas = horas + 1;
    segundos = 0;
    minutos = 0;
    }

watchDocument.innerHtml = horas + ":" + minutos +":" + segundos;

watchDocument.innerHtml = digitZero(horas) + ":" + digitZero(minutos) +":" +
digitZero(segundos);
}