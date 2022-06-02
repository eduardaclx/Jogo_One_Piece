var jump = false
var runFaster = false
var obstaculo = document.getElementById("obstaculo")
var obstaculoVoador = document.getElementById("obstaculoVoador")
var moeda = 0
var qntJump = 0
var qntBatidas = 0
var tamanho = 0
var controleBar = false


function jump1() {
    var player = document.getElementById("player")
    if(controleBar == true) {
        if (player.className != "jump") {
            player.innerHTML = `<img src="../pngFinalizadas/jump.gif"/>`
            jump = true
            player.classList.add("jump")
            setTimeout(() => {
                player.classList.remove("jump")
                jump = false
                player.innerHTML = `<img src="../pngFinalizadas/run.gif"/>`
                qntJump++
                if(tamanho < 20){
                    for(var i = 0; i < qntJump; i++){
                        barraCheia.style.display = "flex"
                        tamanho = tamanho + 2
                        barraCheia.style.width = `${tamanho}vw`
                    }
                }
            }, 1000)
        }
    }
}
function dead() {
    var obstaculo1 = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"))
    console.log("aaa");
    if (obstaculo1 < 270 && jump == false) {
        if(qntBatidas == 0){
            alert("game over")
            vida.innerHTML = `<img id="coracao1" src="./imagens/coracaoVazio.png" alt="">
            <img id="coracao2" src="./imagens/coracaoCheio.png" alt="">
            <img id="coracao3" src="./imagens/coracaoCheio.png" alt="">`
            qntBatidas ++
        } else if (qntBatidas == 1) {
            vida.innerHTML = `<img id="coracao1" src="./imagens/coracaoVazio.png" alt="">
            <img id="coracao2" src="./imagens/coracaoVazio.png" alt="">
            <img id="coracao3" src="./imagens/coracaoCheio.png" alt="">`
            qntBatidas ++
        } else if (qntBatidas == 2) {
            vida.innerHTML = `<img id="coracao1" src="./imagens/coracaoVazio.png" alt="">
            <img id="coracao2" src="./imagens/coracaoVazio.png" alt="">
            <img id="coracao3" src="./imagens/coracaoVazio.png" alt="">`
            qntBatidas ++
        } else {
            alert("game over")
            moeda = 0
            qntJump = 0
            qntBatidas = 0
            tamanho = 0
            vida.innerHTML = `<img id="coracao1" src="./imagens/coracaoCheio.png" alt="">
            <img id="coracao2" src="./imagens/coracaoCheio.png" alt="">
            <img id="coracao3" src="./imagens/coracaoCheio.png" alt="">`
        }
    }
}

function dindin() {
    var obstaculoVoador1 = parseInt(window.getComputedStyle(obstaculoVoador).getPropertyValue("left"))
    if (jump == true && obstaculoVoador1 < 600) {
            moeda++
            divMoeda.innerHTML = `quantidade de moedas: ${moeda}`
    }
}

function iniciar() {
    barra.style.display = "flex"
    container.style.filter = "none"
    controleBar = true
    backgroundDinamico.innerHTML = `
    <img class="first" src="./imagens/imagensEditar/cenario.jpg" alt="" />
    <img src="./imagens/imagensEditar/cenario.jpg" alt="" />
    <img src="./imagens/imagensEditar/arvore.jpg" alt="" />
    <img src="./imagens/imagensEditar/cenario.jpg" alt="" />
    <img src="./imagens/imagensEditar/cenario.jpg" alt="" />`
    player.innerHTML =` <img id="luffyCorrendo" src="../pngFinalizadas/run.gif" />`
    obstaculo.innerHTML = `<img src="../pngFinalizadas/turtle.gif" />`
    obstaculoVoador.innerHTML = `<img src="../pngFinalizadas/moeda.gif" />`
    setInterval(dindin, 800)
    setInterval(dead, 700)
}
