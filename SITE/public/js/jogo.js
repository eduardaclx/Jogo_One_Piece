var jump = false
var obstaculo = document.getElementById("obstaculo")
var qntJump = 0

function contadorJump() {
    if(qntJump > 2){
        
        obstaculo.style.right = "200vw"
        obstaculo.style.animation = "obstaculo 2s infinite linear"
        obstaculoVoador.style.animation = "obstaculoVoador 10s infinite linear"
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
            qntJump ++
        }, 1000)
 
    }
}
function dead() {
    var obstaculo1 = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"))
    console.log("aaa");
    if (obstaculo1 < 190 && jump == false) {
        alert("game over")
    }
}
setInterval(dead, 30)
setInterval(contadorJump, 20)