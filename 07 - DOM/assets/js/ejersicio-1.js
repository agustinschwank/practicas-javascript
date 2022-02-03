/*
    Dado el HTML anterior, se solicita, cambiar el color de fondo de la pagina "body",
    modificar el texto contenido en las cajas "BOX" por "CAJA N° X", tambien se solicita modificar su
    color de fondo almacenados en un array de tres colores.
    Luego muestre al usuario los elaces de la lista en el documento, tomando los que ya se encuentran en href,
    a su vez agregue al tributo target en html (para que se abran en pestaña nueva)
*/

const colores = ['#FFB233','#48AAC4','#ADD224'];

// cambiamos color del documento por #f2f2f2
var body = document.querySelector('body');
body.style.background = '#f2f2f2';

// modificando las cajas
var box = document.getElementsByClassName('box');
for(let i=0; i<box.length; i++){
    box[i].textContent = 'CAJA N° '+(i+1);
    box[i].style.background = colores[i];
}

// Mostramos los enlaces (manera 1)
/*
var links = document.getElementById('links');
li = links.querySelectorAll('li');
for(let i=0; i<li.length; i++){
    var a = li[i].querySelector('a');
    //var link = a.getAttribute('href');
    a.textContent = a.href;
    a.setAttribute('target','_blanck');
}
*/

// mostrar los enlaces (manera 2)

var a = document.querySelectorAll('#links li a');
for(let i=0; i<a.length; i++) {
    //a[i].textContent = a[i].getAttribute('href');
    a[i].textContent = a[i].href;
    a[i].setAttribute('target','_blanck');
}


