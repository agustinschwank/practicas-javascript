'use strict'

/*
    Para utilizar Jquery debemos ingresar en: https://jquery.com/
    1. Podemos descargar la libreria (NOTA: jquery-3.6.0.min.js es lo mismo pero comprimida)
    2. Podemos utilizar una CDN

*/

// Cargamos Jquery
$(document).ready(() => {
    // Aqui ejecutamos el codigo

    //Selector por ID
        //var box = $('#boxid');
        //box.css('color','red');

        $('#boxid').css('font-size','30px')
                   .css('color', 'red')
                   .css('padding','10px')
                   .css('background','blue')
                   .css('display','block')
                   .css('float','left')
                   .css('border','4px solid black')
                   .css('cursor','pointer')
                   .css('font-weight','900');

    // Puedo agregar js pero dentro no fuera
    //document.getElementById('boxid').style.background = 'green';

    // Selector de clase
    $('.boxcl').click(()=>{
        if($('.boxcl').text() != 'Hola'){
            $('.boxcl').text('Hola')
                        .css('background', 'lightblue');
        } else {
            $('.boxcl').text('Texto')
                        .css('background', 'lightgreen');
        }
    });

    // Selector de Atributo
    $('[type="text"]').css('border','3px solid blue')
                      .css('background', 'lightpink');


    // Selector de Atiqueta
    // podriamos $('#box1 ul li'),


    /* Eventos

        ademas del click, visto anteriormente tenemos los mismos que en js vainilla
        mouseover, mouserout, click, dbclick, focus, blur
    */

    // Animaciones
    //$('.boxcl').fadeOut(1500);
    //$('.boxcl').slideToggle('slow');

    //Atributos
    $('[type="text"]').attr('class','color'); // agregamos en atributo class='color', no funciona porque no lo creamos en css
    $('[type="text"]').removeAttr('class'); // removemos todas las clases
    // tenemos html(), text(), mencionados anterioremente

    // Trabajamos con las clases
    $('[type="text"]').addClass('color visible'); // agregamos la clase, tambien se ccrea el atributo si no existe
    $('[type="text"]').removeClass('color'); // removemos color y queda visible
    $('[type="text"]').toggleClass('color visible'); // Obserbamos que si la clase esta la elimina, sino la crea

    // Podemos crear estylos css con utilizando JSON
    var styleJson = {
        background: 'blue',
        border: '5px solid yellow',
        padding: '10px'
    }

    // $('[type="text"]').css(styleJson);

});


