  // planteo para login
  const jugador =  {
    nombre: '',
    nivel: '',
    intentos: 0,
    jugadas: 0,
    pares: 0
    };
    var jugadores= []; 
$(document).ready(function () {  
    //  mostrar tablero al hacer click en el boton con clase nombre

    $(".nombre").on("click", function(){
        if ($("#nombre").val() == '') {
            $("#error").removeClass("hide");
        } else {
    
        $(".tablero").css("display", "block");
        $(".login").css("display", "none");
        var nombreJug = $("#nombre").val();
        $(".jugador").append(nombreJug); 
    }
        
    });

// Guarda propiedades del jugador  y modifican el nro disponible de intentos

var niveles = [{id:"facil", intentosQ: "18"}, 
    {id: "intermedio", intentosQ: "12"}, 
    {id: "experto", intentosQ: "9"}];

 
    

    $(".facil").on("click", function() { 
        if ($("#nombre").val() != '') {            
        var nombre = $("#nombre").val();
        jugador.nombre = nombre;
        jugador.nivel = niveles[0].id;
        jugador.intentos = niveles[0].intentosQ;
        $('.nivel').append(jugador.nivel);
        $('.intentos').append(jugador.intentos);
     
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
        }
    });

});

    








// ordena las cartas de manera random
const imagenes = [
{src: "./img/epelante.jpg", id:"epelante1"},
{src: "./img/alce.jpg", id:"alce1"},
{src: "./img/nena.jpg", id:"nena2"},
{src: "./img/peces.jpg", id:"peces2"},
{src: "./img/unichancho.jpg", id:"unichancho2"},
{src: "./img/zapas.jpg", id:"zapas2"},
{src: "./img/epelante.jpg", id:"epelante2"},
{src: "./img/nena.jpg", id:"nena1"},
{src: "./img/peces.jpg", id:"peces1"},
{src: "./img/unichancho.jpg", id:"unichancho1"},
{src: "./img/zapas.jpg", id:"zapas1"},
{src: "./img/alce.jpg", id:"alce2"}
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
let pares = 0;
var contador = 0
function contarClicks(that){
    console.log("entro a contar clicks")
    let imgSrc = $(that).children(".front").children().attr('src')
    let imgId = $(that).children(".front").children().attr('id')
    clicks = clicks + 1
    if (clicks == 1){
        carta1 = {
            src: imgSrc,
            id: imgId
        }
    }
    else if (clicks == 2)  {
        carta2 = {
            src: imgSrc,
            id: imgId
        }
        compararCartas(carta1, carta2);
    }
}
function compararCartas(carta1, carta2){
    if (carta1.src == carta2.src && carta1.id != carta2.id){
        pares = pares + 1;
        $('#'+carta1.id).addClass("greyscale");
        $('#'+carta2.id).addClass("greyscale");
        clicks = 0;
        youWin(pares);
    }
    else{
        console.log('distintos')
        jugador.intentos = jugador.intentos-1
        jugador.jugadas = jugador.jugadas + 1
        $(".contador").children($('.intentos')).html(jugador.jugadas);
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
                gameOver();
        
    } 
};

// Ver si es posible unificar estas dos funciones
function gameOver(){
    if ( jugador.intentos == 0){
        verificarLocalStorage()
     console.log("perdiste");

     $('#resultado').html("PERDISTE &#x1F615 ");
     $('.contador').html(jugador.jugadas);
    mostrarRanking(jugadores);
    $(".posiciones").toggleClass("hide");
    $(".tablero").css("display", "none");
    }
   
};
function verificarLocalStorage() {
    const jugadoresGuardados = localStorage.getItem("players");
    if (jugadoresGuardados) {
      jugadores = JSON.parse(jugadoresGuardados);
      console.log(jugadores);
    }
  }
function youWin(pares){
    if(pares == 6){
        verificarLocalStorage()
        console.log("ganaste")
        
        jugadores.push(jugador);

        JSON.parse(JSON.stringify(jugadores));
        localStorage.setItem("players", JSON.stringify(jugadores));
  
        
        console.log(jugadores)
        $('#resultado').html("GANASTE &#x1F490 ");
        $('.contador').html(jugador.jugadas);
          mostrarRanking(jugadores);
          $(".posiciones").toggleClass("hide");
        $(".tablero").css("display", "none");

    }

   
}


function mostrarRanking(jugadores) {
    var tableRanking = $("<table id='tablaRanking'><th>Nombre</th><th>Nivel</th><th>Intentos</th></table>");
    var container = $(".posiciones");
     
    for (let i = 0; i < jugadores.length; i++) {
      var fila = $('<tr class="fila"></tr>');
  
      var tdNombre = "<td>" + jugadores[i].nombre + "</td>";
      var tdNivel = "<td>" + jugadores[i].nivel + "</td>";
      var tdIntentos = "<td>" + jugadores[i].jugadas + "</td>";
  
      fila.append(tdNombre);
      fila.append(tdNivel);
      fila.append(tdIntentos);
  
      
  
      tableRanking.append(fila);
    }
  
    container.append(tableRanking);
  }
   
    

function verCarta(){
    $(".carta").on("click",  function(){
        contarClicks($(this));
        $(this).children(".tapada").addClass("nonea");
        $(this).addClass("flip");
        $(this).children(".face").toggleClass("destapada");
    })
}


function playAgain(){
    $("#reload").on("click", function(){
        console.log("click on reload button")
        location.reload();
        })
}



verCarta();
playAgain();

