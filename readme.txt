
Planteo para login
tengo el objeto jugador con propiedades: nombre, nivel, intentos
al clickear boton $(".nombre) 
==>agregar valor del input dentro de la propiedad nombre del jugador
==> agregar el valor del input $("#nombre") dentro del saludo
  "<p>Hola+"jugador.nombre+"!</p>"


defino el nivel
tengo un array con los tres niveles
segun el boton que clickee, voy a agregar el nivel a la propiedad nivel de jugador

al clickear boton 
==>cambio class modal a display block









Planto para juego 
    inicia si: 
    input != a null / undefined (REVISAR CUAL)
    + clik de cualquiera de los tres botones de nivel 

    al iniciar:
    -muestra tablero 
    -ordena random las fichas
    -descuenta cada intento (le resto uno al salir del if comparador)

    INTENTOS:
    cuento clicks
    1er click, guardar ruta en una variable (carta1)
    2do click, guarda ruta en otra variable (carta2)

    si clicks = 2 --> comparar carta1 <=> carta2
            si == {cambio class a grisada, limpio cliks}
            si != {flipeo, limpio clicks }

    FINAL DE JUEGO:
    si intentos == 0 ==>    muestra mensaje de GAME OVER

    GANAR JUEGOa
    si todas las cartas tienen class grisada: 
        muestra mensaje ganador
        guarda la cantidad de intentos dentro de jugador
        guarda jugador dentro de jugadores
        sube jugadores[] a la tabla de posiciones 
            1)limpia la tabla
            2) ordena el array de menos a mas intentos
            3) appendea todo el array con un for
            4)muestra la tabla