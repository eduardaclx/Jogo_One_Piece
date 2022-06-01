var jump = false
var runFaster = false
var obstaculo = document.getElementById("obstaculo")
var obstaculoVoador = document.getElementById("obstaculoVoador")
var moeda = 0
var qntJump = 0

function contadorJump() {
    if (qntJump > 2) {

        obstaculo.style.animation = "obstaculo 2.4s infinite linear"
        console.log("aaaaaaaaaaaaaa")
    }
}

function jump1() {
    var player = document.getElementById("player")
    if (player.className != "jump") {
        player.innerHTML = `<img src="../pngFinalizadas/jump.gif"/>`
        jump = true
        player.classList.add("jump")
        setTimeout(() => {
            player.classList.remove("jump")
            jump = false
            player.innerHTML = `<img src="../pngFinalizadas/run.gif"/>`
            qntJump++
        }, 1000)

    }
}
function dead() {
    var obstaculo1 = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"))
    console.log("aaa");
    if (obstaculo1 < 270 && jump == false) {
        alert("game over")
        moeda = 0
        qntJump = 0
    }
}
function dindin() {
    var obstaculoVoador1 = parseInt(window.getComputedStyle(obstaculoVoador).getPropertyValue("left"))
    if (jump == true && obstaculoVoador1 < 280) {
            moeda++
            divMoeda.innerHTML = `quantidade de moedas: ${moeda}`
    }
}

// setInterval(dead, 30)
setInterval(contadorJump, 20)
setInterval(dindin, 800)