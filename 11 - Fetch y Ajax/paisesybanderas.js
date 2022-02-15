'use strict'

//https://flagcdn.com/es/codes.json
//https://flagcdn.com/256x192/ar.png



fetch('https://flagcdn.com/es/codes.json')
    .then(paises => paises.json())
    .then(paises => {
        console.log(paises.ar);
    })
    .catch(warning =>{
        console.log(warning);
    });

var template = '';
var countrie = document.querySelector('#countries');
var codesCountries = [];
getPaises()
    .then(paises => paises.json())
    .then(paises=>{
        for(let pais in paises){
            template += `<div class="pais">
                            <h4>${paises[pais]}</h4>
                            <img src="https://flagcdn.com/256x192/${pais}.png" width="80">
                        </div>`;
        };
        countrie.innerHTML = template;
        //var gif = document.querySelector('#gif4');
        //gif.style.display = 'none';
    });

function getPaises(){return (fetch('https://flagcdn.com/es/codes.json'))};

