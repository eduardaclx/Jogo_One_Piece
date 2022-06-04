var obstaculo = document.getElementById("obstaculo")
var obstaculoVoador = document.getElementById("obstaculoVoador")
var moeda = 0
var qntBatidas = 0
var tamanho = 0
var runFaster = false
var jump = false
var controleBar = false
var controleMoeda = false
var controleEspecial = false

var personagem = 0
let runPersonagem = ["../pngFinalizadas/run.gif"]
let jumpPersonagem = ["../pngFinalizadas/jump.gif"]
let danoPersonagem = ["../pngFinalizadas/luffyDano.gif"]
let obstaculoPersonagem = ["../pngFinalizadas/turtle.gif"]
let obstaculoVoadorPersonagem = ["../pngFinalizadas/carne.gif"]
let backgroundPersonagem = ["./imagens/imagensEditar/cenario.jpg"]


function jump1() {
    var player = document.getElementById("player")
    if (controleBar == true) {
        if (player.className != "jump") {
            player.innerHTML = `<img src="${jumpPersonagem[personagem]}"/>`
            jump = true
            player.classList.add("jump")
            if (tamanho < 1){
                tamanho ++
                barraCheia.style.width = `0vw`
            } else
            if (tamanho <= 20) {
                    barraCheia.style.display = "flex"
                    tamanho ++
                    barraCheia.style.width = `${tamanho}vw`
            }
            setTimeout(() => {
                player.classList.remove("jump")
                jump = false
                player.innerHTML = `<img src="${runPersonagem[personagem]}"/>`
            }, 1000)
        }
    }
}

function heart(coracao, preto){
    vida.innerHTML = ""
    for(var i = 0; i < coracao; i++){
        vida.innerHTML += `
        <img id="coracao[i+1]" src="./imagens/coracaoCheio.png">`
    }
    for(var i = 0; i < preto; i++){
        vida.innerHTML += `
        <img id="coracao[i+1]" src="./imagens/coracaoVazio.png">`
    }
}

function dead() {
    var obstaculo1 = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"));
    if (obstaculo1 < 400 && jump == false) {
        if (qntBatidas == 0) {
            a.style.animation = "bannermove 20s linear infinite"
            player.innerHTML = `
            <img id="imagemLuffyDano" src="${danoPersonagem[personagem]}"/>`
            heart(2, 1)
            qntBatidas++
            setTimeout(() => {
                player.innerHTML = `<img src="${runPersonagem[personagem]}"/>`
                a.style.animation = "bannermove 7s linear infinite"
            }, 800)
        } else if (qntBatidas == 1) {
            a.style.animation = "bannermove 20s linear infinite"
            player.innerHTML = `
            <img id="imagemLuffyDano" src="${danoPersonagem[personagem]}"/>`
            heart(1, 2)
            qntBatidas++
            setTimeout(() => {
                player.innerHTML = `
                <img src="${runPersonagem[personagem]}"/>`
                a.style.animation = "bannermove 7s linear infinite"
            }, 800)
        } else {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            player.innerHTML = `<img id="imagemLuffyDano" src="${danoPersonagem[personagem]}"/>`
            heart(0, 3)
            moeda = 0
            qntJump = 0
            qntBatidas = 0
            tamanho = 0

            setTimeout(() => {
                alert("game over")
                iniciar()
            }, 600)
        }
    }
}

function dindin() {
    var obstaculoVoador1 = parseInt(window.getComputedStyle(obstaculoVoador).getPropertyValue("left"))
    if (jump == true && obstaculoVoador1 < 600) {
        if (controleMoeda == false) {
            obstaculoVoador.innerHTML = ``
            divMoeda.innerHTML = `<img id="imgMoeda" src="${obstaculoVoadorPersonagem[personagem]}"/><span>X ${moeda}</span>`
            moeda++
            controleMoeda = true
            setTimeout(controleMoeda = false, 1000)
            setTimeout(() => {
                obstaculoVoador.innerHTML = `<img src="${obstaculoVoadorPersonagem[personagem]}" />`
            }, 800)
        }
    }
}

function iniciar() {
    heart(3, 0)
    barra.style.display = "flex"
    container.style.filter = "none"
    containerJogar.style.display = "none"
    controleBar = true
    obstaculoVoador.style.display = "flex"
    obstaculo.style.display = "flex"

    backgroundDinamico.innerHTML = `
    <img id="a" class="first" src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>`
    player.innerHTML = ` <img id="luffyCorrendo" src="${runPersonagem[personagem]}" />`
    obstaculo.innerHTML = `<img src="${obstaculoPersonagem[personagem]}" />`
    obstaculoVoador.innerHTML = `<img src="${obstaculoVoadorPersonagem[personagem]}" />`
    arvore.innerHTML = `<img src="../pngFinalizadas/arvore.gif">`
    abelha.innerHTML = `<img src="../pngFinalizadas/abelha.gif">`
    setInterval(dindin, 900)
    setInterval(dead, 500)
}

function especial() {
    if (controleEspecial == false) {
        if (tamanho > 2 && tamanho <= 6) {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            tamanho = tamanho - 2
            barraCheia.style.width = `${tamanho}vw`
            player.innerHTML = `<img id="imagemLuffyDano" src="${danoPersonagem[personagem]}"/>`
            controleEspecial = true
            
            setTimeout(() => {
                obstaculoVoador.style.display = "flex"
                obstaculo.style.display = "flex"
                controleEspecial = false
                player.innerHTML = `<img  src="${runPersonagem[personagem]}"/>`
            }, 900)
        } else if (tamanho > 6 && tamanho <= 10) {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            player.innerHTML = `<img id="imagemLuffyDano" src="${danoPersonagem[personagem]}"/>`
            tamanho = tamanho - 4
            barraCheia.style.width = `${tamanho}vw`
            
            setTimeout(() => {
                obstaculoVoador.style.display = "flex"
                obstaculo.style.display = "flex"
                controleEspecial = false
                player.innerHTML = `<img src="${runPersonagem[personagem]}"/>`
            }, 900)
        } else if (tamanho > 10 && tamanho <= 15) {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            player.innerHTML = `<img id="imagemLuffyDano" src="${danoPersonagem[personagem]}"/>`
            tamanho = tamanho - 6
            barraCheia.style.width = `${tamanho}vw`
            
            setTimeout(() => {
                obstaculoVoador.style.display = "flex"
                obstaculo.style.display = "flex"
                controleEspecial = false
                player.innerHTML = `<img src="${runPersonagem[personagem]}"/>`
            }, 900)
        } else if (tamanho > 15 && tamanho <= 21) {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            player.innerHTML = `<img id="imagemLuffyDano" src="${danoPersonagem[personagem]}"/>`
            tamanho = tamanho - 10
            barraCheia.style.width = `${tamanho}vw`

            setTimeout(() => {
                obstaculoVoador.style.display = "flex"
                obstaculo.style.display = "flex"
                controleEspecial = false
                player.innerHTML = `<img src="${runPersonagem[personagem]}"/>`
            }, 900)
        }

    }
}