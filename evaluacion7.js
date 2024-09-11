var pregunta1 = prompt("Cuantos perros tenes?");
var pregunta2 = prompt("Cuantos gatos tenes?");
var pregunta3 = prompt("Vivis con ellos?");
var pregunta4 = prompt("Cuanto gastas en comida por mes?");
var pregunta5 = prompt("Compraste animales?");

var animales = parseInt(pregunta1) + parseInt(pregunta2);

var dolares = Math.round(pregunta4 / 260);

if(pregunta5 == "si"){
    var sugerencia = "Adopta, alguien te necesita ! "
}else {
    var sugerencia = "Te felicito, gracias por adoptar !"
}
