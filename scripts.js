  // planteo para login
  const jugador =  {
    nombre: '',
    nivel: '',
    intentos: 0
    };
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
{src: "img/unichancho.jpg", id:"unichancho2"},
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



// PLANTEO PARA COMPARAR CARTAS
let clicks = 0;
let carta1 = null;
let carta2 = null;
let intentos = 0
function contarClicks(that){
 
    let imgSrc = $(that).children(".front").children().attr('src')
     let imgId = $(that).children(".front").children().attr('id')
    
     clicks = clicks + 1
      
     
        if (clicks == 1){
     
            carta1 = {
                src: imgSrc,
                id: imgId
                
            }
          
 
            
        }
        else  {
           
            carta2 = {
                src: imgSrc,
                id: imgId
            }
            
            compararCartas(carta1, carta2); 
            
        }
            

    }
function compararCartas(carta1, carta2){

    if (carta1.src == carta2.src && carta1.id != carta2.id){
        console.log("iguales")

        clicks = 0;
    }
    else{
        console.log('distintos')
        jugador.intentos = jugador.intentos-1
        $('.intentos').html(jugador.intentos);
        console.log(jugador.intentos)
        clicks = 0;
       
        setTimeout(function() {
            $('#'+carta1.id).parent().siblings().toggleClass("nonea");
            $('#'+carta1.id).parent().parent().removeClass("flip");
            $('#'+carta1.id).parent().toggleClass("destapada");
            $('#'+carta2.id).parent().siblings().toggleClass("nonea");
            $('#'+carta2.id).parent().parent().removeClass("flip");
            $('#'+carta2.id).parent().toggleClass("destapada");
             
        }, 1300)
        
      
     
    }
   
    
    


};


///Cuando clickea la carta 

// si lenght esta en 1
// comparar data carta
//     si son iguales: hacer gris   
//     falso: dar vuelta


// planteo para contar intentos


/// consultar tengo que crear una variable que me aumente por cada click = Click++
//entonces los intentos van a bajar de dos en dos segun los clicks que yo haga (ver ejercicio que iba iterando de a dos)



// function ocultarCarta(){  
   
//     $('#'+carta1.id).parent().siblings().toggleClass("nonea");
//     $('#'+carta1.id).parent().parent().removeClass("flip");
//     $('#'+carta1.id).parent().toggleClass("destapada");
//     $('#'+carta2.id).parent().siblings().toggleClass("nonea");
//     $('#'+carta2.id).parent().parent().removeClass("flip");
//     $('#'+carta2.id).parent().toggleClass("destapada");
  
    
    
   
    
// }
function verCarta(){
    
    $(".carta").on("click",  function(){
        contarClicks($(this));
        $(this).children(".tapada").addClass("nonea");
        $(this).addClass("flip");
        $(this).children(".face").toggleClass("destapada");
    })
    
}




// function verCarta(){
    
//     $(".carta").on("click",  function(){
//         contarClicks($(this));
//         $(this).children(".tapada").toggleClass("nonea");
//         $(this).addClass("flip");
//         $(this).children(".face").toggleClass("destapada");
//     })
    
// }


verCarta();

$(".reload").on("click"), function(){
location.reload()
}