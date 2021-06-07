
var sueldoDiario = parseInt(prompt('Ingrese el sueldo diario'));

var sueldoBrutoMensual = sueldoDiario * 30;
var sueldoBrutoQuincenal = sueldoDiario * 15;
var sueldoNetoMensual = sueldoBrutoMensual - (sueldoBrutoMensual * 0.10) - (sueldoBrutoMensual * 0.30);
var sueldoNetoQuincenal= sueldoBrutoQuincenal - (sueldoBrutoQuincenal *0.10) - (sueldoBrutoQuincenal *0.30);


alert('El sueldo bruto mensual es: ' + sueldoBrutoMensual); 
alert('El sueldo bruto quincenal es: ' + sueldoBrutoQuincenal); 
alert('El sueldo neto mensual es: ' + sueldoNetoMensual); 
alert('El sueldo neto quincenal es: ' + sueldoNetoQuincenal); 



