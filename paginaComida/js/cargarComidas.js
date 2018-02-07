 var $buscarComida = $("#buscarComida");
 $buscarComida.on("click",filtrarIngredientes);//ejecuta la funcion al momento de hacer click en el boton
function filtrarIngredientes(e){
e.preventDefault();
var $ingredientes=$("#buscador").val();//obtiene el valor del textBox del index
$ingredientes=$ingredientes.split(" ")//convierte el string obtenido en array separado por espacio
buscarReceta($ingredientes);
}
function buscarReceta(ingredientesComida){
    
    
    
}
function cargarComida(platillo){
console.log(platillo);
}