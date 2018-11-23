  // planteo para login
  $(document).ready(function () {  
//  mostrar tablero al hacer click en el boton con clase nombre
$(".nombre").on("click", function(){
    if ($("#nombre").val() == '') {
        console.log("entro al validador")
        $("#error").removeClass("hide");
    } else {
   
    $(".tablero").css("display", "block");
    $(".login").css("display", "none");
    var nombreJug = $("#nombre").val();
    $(".jugador").append(nombreJug); 
}
    
});

// planteo para guardar propiedades del jugador y el jugador en jugadores
var jugadores = []; 
var niveles = [{id:"facil", intentosQ: "18"}, 
    {id: "intermedio", intentosQ: "12"}, 
    {id: "experto", intentosQ: "9"}];
const jugador =  {
    nombre: '',
    nivel: '',
    intentos: 0
    };

  

    

// // Modifica las propiedades del objeto jugador al clickear 
    $(".facil").on("click", function() { 
        if ($("#nombre").val() != '') {            
        
        var nombre = $("#nombre").val();
        jugador.nombre = nombre;
        jugador.nivel = niveles[0].id;
        jugador.intentos = niveles[0].intentosQ;
        $('.nivel').append(jugador.nivel);
        $('.intentos').append(jugador.intentos);
        jugadores.push(jugador);//esto seguramente cambiara para tener los resultados finales
        }
    });
    $(".intermedio").on("click", function() {
        if ($("#nombre").val() != '') { 
        var nombre = $("#nombre").val();
        jugador.nombre = nombre;
        jugador.nivel = niveles[1].id;
        jugador.intentos = niveles[1].intentosQ;
        $('.nivel').append(jugador.nivel);
        $('.intentos').append(jugador.intentos);
        jugadores.push(jugador);//esto seguramente cambiara para tener los resultados finales
        }
    });
    $(".experto").on("click", function() { 
        if ($("#nombre").val() != '') { 
        var nombre = $("#nombre").val();
        jugador.nombre = nombre;
        jugador.nivel = niveles[2].id;
        jugador.intentos = niveles[2].intentosQ;
        $('.nivel').append(jugador.nivel);
        $('.intentos').append(jugador.intentos);
        jugadores.push(jugador);//esto seguramente cambiara para tener los resultados finales
        }
    });
});

    





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

imagenes.sort(function(a, b){
    return Math.random() - Math.random(0,5);
});
var LosDivCard= $(".carta");

for (let i = 0; i < LosDivCard.length; i++) {
var ruta = imagenes[i].src;
var id = imagenes[i].id;
   var imgDestapada= $("<div class='destapada front face'><img  src="+ ruta +" id="+id+"></div>");
   LosDivCard.eq(i).append(imgDestapada);
}
//no funcionaria el random VER


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
    $(".carta").on("click", function(){
        $(this).addClass("flip");
        $(this).children().toggleClass("destapada");
        
    })
}


verCarta();