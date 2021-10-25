class Blanco {
    constructor(x, y, radio) {
        this.x = x
        this.y = y
        this.radio = radio

    }
    mostrar() {
        var campo = document.getElementById("campo")
        var div = document.createElement("div")
        div.style.backgroundColor = "red"
        div.style.position = "absolute"
        div.style.left = this.x + "px"
        div.style.top = this.y + "px"
        div.style.width = this.radio * 2 + "px"
        div.style.height = this.radio * 2 + "px"
        div.style.borderRadius = "50%"
        div.id = "blanco"
        div.onclick = function() {
            var campo = document.getElementById("campo")
            campo.removeChild(div)
            console.log("BUEN DISPARO")
            partida.puntuacion += 100
            partida.actualizar()
        }
        this.div = div
        campo.appendChild(div)
    }
    fallo() {
        var campo = document.getElementById("campo")
        campo.removeChild(this.div)
        partida.vidas--;
        partida.actualizar()
    }

}