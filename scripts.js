
  // planteo para login

  var jugadores = []; 
  var nombre;
  var intentos;
  var nivel; 

  var jugador =  {
  nombre: nombre.val(),
  nivel: nivel.val(),
  intentos: intentos.val()
}

// agregar contenido a la propiedad nombre de la variable jugador
  function guardarNombre (){

    // $("#nombre").on("click", function(){
        nombre = $("#nombre").val();

        jugador.push(nombre)
   

        // Modificar el contenido de <span class="jugador">

   
  
        
        
    // })
 };



    





/// agregarlo a la table de posicionesDESPUES
//botones segun niveles => modifican el nro disponible de intentos



// ordena las cartas de manera random
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
var clicks = 0


///Cuando clickea la carta 


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





function verCarta(){
    $(".tapada").on("click", function(){
        $(this).children().toggleClass("destapada");
    })
}

// guardarNombre();
verCarta();
