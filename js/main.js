var highscore = document.cookie.split('; ').find(row => row.startsWith('highscore=')).split('=')[1]
var partida

var intervalo
var blanco = new Blanco(0, 0, 0)

var vMostrar = 2000
var vOcultar = 1800


function empezar() {
    $("#campo").html("")
    highscore = document.cookie.split('; ').find(row => row.startsWith('highscore=')).split('=')[1]
    partida = new Partida()
    partida.highscore = parseInt(highscore)
    partida.iniciada = 1
    if (partida.iniciada == 1) {
        $("#empezar").css("display", "none")
        var hud = "<div class='puntuacion'><h2>PUNTUACIÓN</h2><h1 id='puntuacion' >0</h1></div><div class='vidas'><h2>VIDAS</h2><h1 id='vidas'>3</h1></div><div class='highscore'><h2>HIGH SCORE</h2><h1 id='highscore'>0</h1></div>"
        var ehud = $("#hud")
        ehud.html(hud)
        ehud.css("justify-content", "space-around")
        partida.actualizar()
        intervalo = setInterval(mostrarObjetivos, vMostrar)
    }
}

function mostrarObjetivos() {
    if (partida.iniciada == 0) {
        detener()
    } else if ((partida.puntuacion > 0) && (partida.puntuacion % 7 == 0)) {
        // aumentarVelocidad()
    } else {
        var campo = $('#campo')
        var x = Math.floor(Math.random() * ((campo[0].clientWidth - 30) - 30)) + 1
        var y = Math.floor(Math.random() * ((campo[0].clientHeight - 30) - 30)) + 1
        var radio = Math.floor(Math.random() * (15 - 5)) + 5
        blanco = new Blanco(x, y, radio)
        blanco.mostrar()
        return new Promise(function() {
            setTimeout(function() {
                try {
                    blanco.fallo()
                } catch (error) {}
            }, vOcultar)
        })
    }
}

function detener() {
    clearInterval(intervalo)
    $("#campo").html("<h1>GAME OVER</h1><p>PUNTUACIÓN " + partida.puntuacion + "</p>")
    $("#hud").html("<button onclick='empezar()'>JUGAR DE NUEVO</button>")
    if (partida.puntuacion > parseInt(partida.highscore)) {
        $("#campo").html("<h1>GAME OVER</h1><p>PUNTUACIÓN " + partida.puntuacion + "<p>¡¡¡ NUEVO RÉCORD !!!</p></p>")
        document.cookie = "highscore=" + partida.puntuacion + ";"
    }

}

function aumentarVelocidad() {}