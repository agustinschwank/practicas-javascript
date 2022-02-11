'use strict'


const form = document.querySelector('form');

const inputs = document.getElementsByClassName('form_input');

const theme = document.getElementById('theme');
theme.addEventListener('click',()=>{
    var cssthemes = document.querySelector('#cssthemes');
    if(theme.value == 1) {
        cssthemes.setAttribute('href','./assets/css/ejersicio-formulario-dark.css');
    } else {
        cssthemes.setAttribute('href','./assets/css/ejersicio-formulario.css');
    }
});



function tiene_numeros(texto){
    var numeros = '0123456789';
    for(let i=0; i<texto.length; i++){
       if (numeros.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }


function validation(input) {
    switch (input.id) {
        case 'user':
                    if((input.value.length>=5) && (tiene_numeros(input.value) == 0)){
                        input.style.background = 'green';
                        return(true);
                    } else {
                        input.style.background= 'red';
                        return(false);
                    }
            break;
        case 'pass':
                if((input.value.length>=10) && (input.value.length<=20)){
                    input.style.background = 'green';
                } else {
                    input.style.background= 'red';
                };
            break;

    }
}

var span = document.querySelector('span'); 
for(let i=0; i<inputs.length; i++) {
    inputs[i].addEventListener('keyup',function(){
        if(this.value.length>0){
            this.nextElementSibling.style.marginTop = '-25px';
            if(validation(this)==false){
                span.append('Mayor a 5 Caracteres y sin Numeros');
            } else {
                span.remove();
            }
        } else {
            this.nextElementSibling.style.marginTop = '10px';
            validation(this);
        }
    });
}
