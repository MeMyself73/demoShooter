class Partida {
    constructor() {
        this.iniciada = 0
        this.puntuacion = 0
        this.vidas = 3
        this.highscore = 0
    }
    actualizar() {
        $("#puntuacion").html(this.puntuacion)
        $("#vidas").html(this.vidas)
        $("#highscore").html(this.highscore)
        if (this.vidas < 1) {
            this.iniciada = 0
        }

    }
}