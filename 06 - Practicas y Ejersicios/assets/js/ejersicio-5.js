/*

    Escribir un programa que almacene en una lista los siguientes precios, 50, 75, 46, 22, 80, 65, 8, y muestre 
    por consola el menor y el mayor de los precios.

*/
var _price, _prices = [], min, max;
do {
    _price = parseInt(prompt('Ingrese precio'));
    if(_price!=0){
        _prices.push(_price);
    } 
} while (_price!=0);
min = max = _prices[0];
for(let i=0; i<_prices.length; i++){
    if(_prices[i]>max) {max = _prices[i]};
    if(_prices[i]<min) {min = _prices[i]};
}
console.log('Precio Mayor es: '+max+' y el menor es: '+min);