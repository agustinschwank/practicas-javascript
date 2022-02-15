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
        if($('.boxcl').html() != 'Hola'){
            $('.boxcl').html('Hola')
                        .css('background', 'lightblue');
        } else {
            $('.boxcl').html('Texto')
                        .css('background', 'lightgreen');
        }
    });

    // Selector de Atributo
    $('[type="text"]').css('border','3px solid blue')
                      .css('background', 'lightpink');


    /* Eventos

        ademas del click, visto anteriormente tenemos los mismos que en js vainilla
        mouseover, mouserout, click, dbclick, focus, blur
    */

    // Animaciones
    $('.boxcl').fadeIn('slow');

});


