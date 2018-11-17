$(document).ready(function(){
      // planteo para login

   
  var nombre;

/// ponerle un on.click 
    $(".botondificultad").on("click", function(){
/// tengo que llamar al valor del input $("#nombre").val() 

        nombre = $("#nombre").val();
        console.log(nombre);
        //agrego en tabla de saludo
        $(".jugador").push(nombre);
    });



/// agregarlo al span class $(".nombre")
    





/// agregarlo a la table de posicionesDESPUES
//botones segun niveles => modifican el nro disponible de intentos
//le pido que agregue las imagenes ordenandolas de manera random y asignandoles un data carta 


// Agregar objetos cartas al array con el data que se repita para compararlas
const imagenes = [
{src: "img/epelante.jpg"},
{src: "img/alce.jpg"},
{src: "img/nena.jpg"},
{src: "img/peces.jpg"},
{src: "img/unichancho.jpg"},
{src: "img/zapas.jpg"},
{src: "img/epelante.jpg"},
{src: "img/nena.jpg"},
{src: "img/peces.jpg"},
{src: "img/unichancho.jpg"},
{src: "img/zapas.jpg"},
{src: "img/alce.jpg"}
];
var LosDivCard= $(".carta");

for (let i = 0; i < LosDivCard.length; i++) {
var ruta = imagenes[i].src;
   var imgDestapada= $("<img class='destapada' src="+ ruta +">");
   LosDivCard.eq(i).append(imgDestapada);
}

imagenes.sort(function(){
    return Math.random() - 0,5;
});


///Cuando click ver apunte en cuaderno!
var clicks = 0
$(".tapada").on("click", function(){
    console.log($(this).children().attr('src'))
})
// metodo onclick 
// -dar vuelta la carta
// si length esta en 0 
// guardar data carta 
// -guardar ese data carta en un array 






// si lenght esta en 1
// comparar data carta
//     si son iguales: hacer gris   
//     falso: dar vuelta




// cambio la clase del div tablero para que se muestre(podria usar toggle)




// planteo para contar intentos
/// consultar tengo que crear una variable que me aumente por cada click = Click++
//entonces los intentos van a bajar de dos en dos segun los clicks que yo haga (ver ejercicio que iba iterando de a dos)



// metodo data index es para comparar las cartas y saber si son iguales

});

