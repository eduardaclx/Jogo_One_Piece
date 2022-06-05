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
var controleJogando = false

var personagem = 0
let runPersonagem = ["../pngFinalizadas/run1.gif"]
let jumpPersonagem = ["../pngFinalizadas/jump.gif"]
let danoPersonagem = ["../pngFinalizadas/arvore.gif"]
let obstaculoPersonagem = ["../pngFinalizadas/bola.gif"]
let enemys = ["../pngFinalizadas/canhao.gif"]
let obstaculoVoadorPersonagem = ["../pngFinalizadas/carne.png"]
let backgroundPersonagem = ["../introBackground/areia.png"]
let cor = ["#D00000"]
let imagensDecoracao = ["../pngFinalizadas/tubarao.gif", "../introBackground/papagaio.gif", "../introBackground/ship.png", "../introBackground/passaroChao.gif"]

function iniciar() {
    inseto.innerHTML = `<img src="../introBackground/crab.gif">`
    papagaio.innerHTML = `<img src="${imagensDecoracao[1]}"/>`
    nuvem.innerHTML = `<img src="../introBackground/nuvem.png"><img src="../introBackground/nuvem.png">`
    backgroundDinamico.innerHTML = `
    <img id="primeiroBanner" class="first" src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>`

    if(controleJogando == false){
        primeiroBanner.style.animation = "bannermove 0s linear infinite"
    }
}

function jogar() {
    controleJogando = true
    heart(3, 0)
    container.style.filter = "none"
    containerJogar.style.display = "none"
    barra.style.display = "flex"
    obstaculoVoador.style.display = "flex"
    obstaculo.style.display = "flex"
    controleBar = true
    barraCheia.style.backgroundColor = cor[personagem]
    primeiroBanner.style.animation = "bannermove 7s linear infinite"

    player.innerHTML = ` <img id="luffyCorrendo" src="${runPersonagem[personagem]}" />`
    obstaculo.innerHTML = `<img src="${obstaculoPersonagem[personagem]}" />`
    obstaculoVoador.innerHTML = `<img src="${obstaculoVoadorPersonagem[personagem]}" />`
    tubarao.innerHTML = `<img src="${imagensDecoracao[0]}"/>`
    ship.innerHTML = `<img src="${imagensDecoracao[2]}"/>`
    arvore.innerHTML = `<img src="../introBackground/coqueiro.png">`
    enemy.innerHTML = `<img src="${enemys[personagem]}"/>`
    setInterval(dindin, 800)
    setInterval(dead, 200)
}

function jump1() {
    var player = document.getElementById("player")
    if (controleBar == true) {
        if (player.className != "jump") {
            player.innerHTML = `<img src="${jumpPersonagem[personagem]}"/>`
            jump = true
            player.classList.add("jump")
            if (tamanho < 1) {
                tamanho++
                barraCheia.style.width = `0vw`
            } else
                if (tamanho <= 20) {
                    barraCheia.style.display = "flex"
                    tamanho++
                    barraCheia.style.width = `${tamanho}vw`
                }
            setTimeout(() => {
                player.classList.remove("jump")
                jump = false
                player.innerHTML = `<img class="geral" src="${runPersonagem[personagem]}"/>`
            }, 1000)
        }
    }
}

function heart(coracao, preto) {
    vida.innerHTML = ""
    for (var i = 0; i < coracao; i++) {
        vida.innerHTML += `
        <img id="coracao[i+1]" src="./imagens/coracaoCheio.png">`
    }
    for (var i = 0; i < preto; i++) {
        vida.innerHTML += `
        <img id="coracao[i+1]" src="./imagens/coracaoVazio.png">`
    }
}

function dead() {
    var obstaculo1 = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"));
    if (obstaculo1 < 400 && jump == false) {
        if (qntBatidas == 0) {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            primeiroBanner.style.animation = "bannermove 20s linear infinite"
            player.innerHTML = `
            <img src="${danoPersonagem[personagem]}"/>`
            heart(2, 1)
            qntBatidas++
            setTimeout(() => {
                obstaculoVoador.style.display = "flex"
                obstaculo.style.display = "flex"
                player.innerHTML = `<img src="${runPersonagem[personagem]}"/>`
                primeiroBanner.style.animation = "bannermove 7s linear infinite"
            }, 800)
        } else if (qntBatidas == 1) {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            primeiroBanner.style.animation = "bannermove 20s linear infinite"
            player.innerHTML = `
            <img src="${danoPersonagem[personagem]}"/>`
            heart(1, 2)
            qntBatidas++
            setTimeout(() => {
                obstaculoVoador.style.display = "flex"
                obstaculo.style.display = "flex"
                player.innerHTML = `
                <img src="${runPersonagem[personagem]}"/>`
                primeiroBanner.style.animation = "bannermove 7s linear infinite"
            }, 800)
        } else {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            player.innerHTML = `<img src="${danoPersonagem[personagem]}"/>`
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
    if (jump == true && obstaculoVoador1 < 800) {
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

function especial1() {
    if (controleEspecial == false) {
        if (tamanho > 2) {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            player.innerHTML = `<img src="${danoPersonagem[personagem]}"/>`
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

function especial2() {
    if (controleEspecial == false) {
        if (tamanho > 4) {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            player.innerHTML = `<img src="${danoPersonagem[personagem]}"/>`
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

function especial3() {
    if (controleEspecial == false) {
        if (tamanho > 10) {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            player.innerHTML = `<img src="${danoPersonagem[personagem]}"/>`
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

document.addEventListener('keypress', function (event) {
    if (event.code == "Space") {
        jump1()
    }
    if (event.code == "Digit1") {
        especial1()
    }
    if (event.code == "Digit2") {
        especial2()
    }
    if (event.code == "Digit3") {
        especial3()
    }
});
