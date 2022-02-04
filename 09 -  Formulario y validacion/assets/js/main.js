/*
    Practica de muestra sensilla, hay que validar muchas csosas que veremos mas adelante
    esto fue una muestra
*/


'use strict'


var formulary = document.querySelector('#formulary');
var _name = document.querySelector('#name');
var _lastname = document.querySelector('#lastname');
var _email = document.querySelector('#email');

formulary.addEventListener('submit',function(){
    
    var error = false;

    //validamos nombre
    if(_name.value.length>=1){
        var nombre = _name.value.trim();
        nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
        _name.style.border = '2px solid lightgreen';
    } else {
        error = true;
        _name.style.border = '2px solid red';
    }

    //validamos apellido
    if(_lastname.value.length>=1){
        var apellido = _lastname.value.trim();
        apellido = apellido[0].toUpperCase() + apellido.slice(1).toLowerCase();
        _lastname.style.border = '2px solid lightgreen';
    } else {
        error = true;
        _lastname.style.border = '2px solid red';
    }

    //validamos email (lo consideramos valido)


    // hay error
    if(error != true) {
        var mostrar = document.getElementsByClassName('mostrar');
        mostrar[0].innerHTML = `<p>Nombre: <b>${nombre}</b> <br> Apellido: <b>${apellido}</b> <br> Email: <b>${_email.value}</b></p>`;
        _name.style.border = '';
        _lastname.style.border = '';
        _name.value = '';
        _lastname.value = '';
        _email.value = '';
    } 


});