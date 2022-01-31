/*
    Crear un programa que imprima los números de 0 a 100 indicando en cada uno de ellos si el número es divisible por 3 o no.
    El listado de debera ser mostrados en el documento.
*/

document.write('<h2>Ejersicio 2 - Listado de numero 0 a 100 indicando divisibilidad de 3</h2><hr>');
document.write('<table border=1 style="border: 2px solid black; padding:2px;"><tr><th style="background:black;"></th><th style="padding-left:15px;padding-right:15px;">Divisible</th></tr>');
for(let x=0; x<=100; x++) {
    if ((x%3)==0) {
        //console.log('El Numero "'+x+'" es DIVICIBLE por 3');
        //document.write('<p>El Numero <b style="color:red;">'+x+'</b> ES DIVISIBLE</p>');
        document.write('<tr><th style="color:white; background-color:red;">'+x+'</th><th style="color:white; background-color:red;">SI</th></tr>');
    } else {
        //console.log('El Numero "'+x+'" NO ES DIVICIBLE por 3');
        //document.write('<p>El Numero <b style="color:black;">'+x+'</b> NO ES DIVISIBLE</p>');
        document.write('<tr><th>'+x+'</th><th>NO</th></tr>');
    }
}
document.write('</table>');

//NOTA: Mas adelante veremos como crear clases con css desde JS cuando veamos DOM