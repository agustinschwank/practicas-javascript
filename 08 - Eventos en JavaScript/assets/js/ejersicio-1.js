/*
    Dado el HTML del ejersicio se pide:
    1 - Asegurarse de que javascript se ejecute correctamente despues de ser cargado el dom
    2 - Mediante un boton ejecutar un ingreso de datos donde el usuario puede agregar nombre y apellido (almacenarlos) * no es necesario validar
    3 - Mediante un boton ejecutar cuando el usuario desee el listado de los datos ingresados 
    4 - Un boton que mermita intercambiar entre el modo nocturano y diario de una web

*/
'use strict'
window.addEventListener('load', function(){
    
    var users = [];
    //igreso de datos
    var ingresar = document.querySelector('#ingresar');
    ingresar.addEventListener('click',()=>{
        var _user = prompt('Ingresar Nombre y Apellido');
        if(_user.length>=1) {
            users.push(_user);
        }
    });

    //muestra de datos
    var listar = document.querySelector('#listar');
    var boxlist = document.querySelector('.boxlist');
    var ul = document.createElement('ul');
    listar.addEventListener('click',()=>{
        if(users.length>=1) {
            for(let i=0; i<users.length; i++){
                var li = document.createElement('li');
                li.textContent = users[i];
                ul.append(li);
            }
            boxlist.append(ul);
        }
    });

    //modo nocturno
    var modo = document.querySelector('#modo');
    var body = document.querySelector('body');
    modo.addEventListener('click',()=>{
        if(body.hasAttribute('class')){
            if(body.classList == 'night') {
                body.classList.remove('night');
            } else {
                body.classList.add('night');
            }
        } else {
            body.setAttribute('class','night');
        }
    });
    // Nota el modo nocturno no se realiza asi esto es practica, se realiza en la oja de stylos y se cambia la ruta

});