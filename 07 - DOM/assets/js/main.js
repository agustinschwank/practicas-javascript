'use strict'

// seleccionamos un elemento de html
var div1 = document.getElementsByTagName('div'); // entrega un HTML Collection, seleccionado por etiqueta 
var div2 = document.getElementsByClassName('box'); // entrega un HTML Collection, seleccionado por clase
var div3 = document.getElementById('box'); // entrega el elemento seleccionamos por id
console.log(div1);
console.log(div2);
console.log(div3);

// Podemos apreciar que getElementById nos entrega el primer elemento con id, el resto una coleccion

var h1 = document.createElement('h1'); // creamos un elemento <h1></h1>
h1.textContent = 'Agregamos nuestro primer texto desde JS';
console.log(h1);
div3.append(h1); // dentro de las estiquetas div meteme el contenido de h1

// agregamos un atributo
div3.setAttribute('class','activo muestras'); // agregamos el valor activo a class
div3.setAttribute('href','https://milink.com'); // agregamos un enlace (no click)

console.log(div3.getAttribute('class')); // me entrega el valor del atributo
console.log(div3.hasAttribute('class')); // me devuelve un booleano true si esta o false si no esta el atributo

//div3.removeAttribute('class'); // removemos el atributo class
div3.classList.add('warning');
div3.classList.remove('activo');
console.log(div3.hasAttribute('class')); // retorna false porque lo quitamos anteiormente

// estylos, style podemos cambiar todo el css
div3.style.color = 'blue';
div3.style.background = 'yellow';
div3.style.fontFamily = 'Arial';
