'use strict'

fetch('')
    .then(provincias => provincias.json())
    .then(provincias => {
        console.log(provincias);
    });