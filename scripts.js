var jugadores = []; 
  // planteo para login



  function guardarJugador (){
    var nombre = $("#nombre").val();
    var nivel =$()
    var intentos= $(".intentos").val();
  
    var jugador =  {
      nombre: nombre,
      nivel: nivel,
      intentos: intentos
      }
  
      nivel = $(".facil").on("click", function() { 
        nivel = 18
      
    });
    nivel = $(".intermedio").on("click", function() { 
        nivel = 12
    });
    nivel =  $(".experto").on("click", function() { 
        nivel = 9
    });


    jugadores.push(jugador);
 console.log(jugadores);
  }


function guardarNivel(){

}

    





/// agregarlo a la table de posicionesDESPUES
//botones segun niveles => modifican el nro disponible de intentos



// ordena las cartas de manera random
const imagenes = [
{src: "img/epelante.jpg", id:"epelante1"},
{src: "img/alce.jpg", id:"alce1"},
{src: "img/nena.jpg", id:"nena2"},
{src: "img/peces.jpg", id:"peces2"},
{src: "img/unichancho.jpg", id:""},
{src: "img/zapas.jpg", id:"zapas2"},
{src: "img/epelante.jpg", id:"epelante2"},
{src: "img/nena.jpg", id:"nena1"},
{src: "img/peces.jpg", id:"peces1"},
{src: "img/unichancho.jpg", id:"unichancho1"},
{src: "img/zapas.jpg", id:"zapas1"},
{src: "img/alce.jpg", id:"alce2"}
];
var LosDivCard= $(".carta");

for (let i = 0; i < LosDivCard.length; i++) {
var ruta = imagenes[i].src;
var id = imagenes[i].id;
   var imgDestapada= $("<img class='destapada front' src="+ ruta +" id="+id+">");
   LosDivCard.eq(i).append(imgDestapada);
}

imagenes.sort(function(){
    return Math.random() - 0,5;
});

// PLANTEO PARA COMPARAR CARTAS
var clicks = 0;
var carta1 = null;
var carta2 = null;
var intentos = clicks ++
$(".carta").on('click', function(){


 const imgSrc = $('this').children($(".front")).attr('src')
    

    const id = $('this').attr('id')
    if (clicks == 1){
        carta1 = {
            src: imgSrc,
            id: id
        }
    }
    else {
        carta2 = {
            src: imgSrc,
            id: id
        }
   
    if (carta1.src == carta2.src && carta1.id != carta2.id){
        console.log("iguales")
    }
    else{
        console.log('distintos')
    }
    clicks = 0
}

});


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









// planteo para contar intentos


/// consultar tengo que crear una variable que me aumente por cada click = Click++
//entonces los intentos van a bajar de dos en dos segun los clicks que yo haga (ver ejercicio que iba iterando de a dos)








function verCarta(){
    $(".tapada").on("click", function(){
        $(this).children().toggleClass("destapada");
    })
}


verCarta();
