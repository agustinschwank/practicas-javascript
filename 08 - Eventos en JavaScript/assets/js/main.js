/*
    EVENTOS EN JAVASCRIPT
*/

// Eventos de Mouse (click, mouseover, mouseout)
var _open = document.querySelector('#button');
_open.addEventListener('click', function(){
    console.log('Alerta fue Clickeado');
    alert('Clickeo el boton');
});

_open.addEventListener('mouseover', function(){
    console.log('Ingreso al Boton');
    _open.style.background = 'green';
    _open.style.transition = 'all 500ms';
    _open.style.cursor = 'pointer';
    _open.style.padding = '10px';
});

_open.addEventListener('mouseout', function(){
    console.log('Salio del Boton');
    this.style.background = 'yellow'; // this ase referencia a este objeto _open
});

// Eventos de Teclado (focus, blur, keydown, keypress, keyup)
var input = document.querySelector('#name');
input.addEventListener('focus',function(){
    console.log('Realizo focus en el campo input');
});

input.addEventListener('blur',function(){
    console.log('Salio del focus en campo input');
});

input.addEventListener('keypress',function(evento){
    console.log('Preciono la tecla '+String.fromCodePoint(evento.keyCode)+' en el campo input');
});

// NOTA se utiliza el evento load cuando se carga primero el script y luego el html
window.addEventListener('load',function(){
    // AQUI TODO EL CODIGO JS
});


//funcion numero aleatorio
function aleatorio(min=0,max=6) {
    var num = Math.random()*(max-min);
    num = Math.round(num);
    return (num+min);
}


//Cambiando el Fondo
const colores = ['lightblue','lightseagreen','lightcyan','lightsalmon','lightslategrey','lightpink'];
// TIMER
var fondo = document.querySelector('#background');
var body = document.querySelector('body');
fondo.addEventListener('click',function(){
    setInterval(function(){
        body.style.background = colores[aleatorio()];
    },1000);
});