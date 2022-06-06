var obstaculo = document.getElementById("obstaculo")
var obstaculoVoador = document.getElementById("obstaculoVoador")
var moeda = 0
var qntBatidas = 0
var tamanho = 0
var somaXP = 0
var runFaster = false
var jump = false
var controleBar = false
var controleMoeda = false
var controleEspecial = false
var controleJogando = false

sessionStorage.xpPartida = 0

var personagem = 0
let runPersonagem = ["./imagens/gifs/personagemGifs/run1.gif"]
let jumpPersonagem = ["./imagens/gifs/personagemGifs/jump.gif"]
let obstaculoPersonagem = ["./imagens/imgEstatica/game/bola.gif"]
let enemys = ["./imagens/imgEstatica/game/canhao.gif"]
let obstaculoVoadorPersonagem = ["./imagens/imgEstatica/game/carne.png"]
let backgroundPersonagem = ["./imagens/imgEstatica/game/areia.png"]

let cor = ["#D00000"]
let especialGif1 = []
let especialGif2 = []
let decoracaoFase = ["./imagens/gifs/backgroundGifs/tubarao.gif", "./imagens/gifs/backgroundGifs/papagaio.gif", "./imagens/imgEstatica/game/ship.png", "./imagens/imgEstatica/game/nuvem.png", "./imagens/imgEstatica/game/coqueiro.png", "./imagens/gifs/backgroundGifs/crab.gif"]

function iniciar() {
    inseto.innerHTML = `<img src="${decoracaoFase[5]}">`
    papagaio.innerHTML = `<img src="${decoracaoFase[1]}"/>`
    nuvem.innerHTML = `<img src="${decoracaoFase[3]}"><img src="${decoracaoFase[3]}">`
    backgroundDinamico.innerHTML = `
    <img id="primeiroBanner" class="first" src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>
    <img src="${backgroundPersonagem[personagem]}"/>`

    if (controleJogando == false) {
        primeiroBanner.style.animation = "bannermove 0s linear infinite"
    }
}

// 0 tubarao, 1 papagaio, 2 navio, 3 nuvem, 4 coqueiro, 5 crab
function jogar() {
    controleJogando = true
    heart(3, 0)
    container.style.filter = "none"
    containerJogar.style.display = "none"
    imagemContainerJogar.style.display = "none"
    barra.style.display = "flex"
    obstaculoVoador.style.display = "flex"
    obstaculo.style.display = "flex"
    controleBar = true
    barraCheia.style.backgroundColor = cor[personagem]
    primeiroBanner.style.animation = "bannermove 7s linear infinite"

    player.innerHTML = ` <img id="luffyCorrendo" src="${runPersonagem[personagem]}" />`
    obstaculo.innerHTML = `<img src="${obstaculoPersonagem[personagem]}" />`
    obstaculoVoador.innerHTML = `<img src="${obstaculoVoadorPersonagem[personagem]}" />`
    tubarao.innerHTML = `<img src="${decoracaoFase[0]}"/>`
    ship.innerHTML = `<img src="${decoracaoFase[2]}"/>`
    arvore.innerHTML = `<img src="${decoracaoFase[4]}"/>`
    enemy.innerHTML = `<img src="${enemys[personagem]}"/>`
    setInterval(dindin, 800)
    setInterval(dead, 200)  
    setInterval(ganhar, 200)
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
        <img id="coracao[i+1]" src="./imagens/imgEstatica/game/coracaoCheio.png">`
    }
    for (var i = 0; i < preto; i++) {
        vida.innerHTML += `
        <img id="coracao[i+1]" src="./imagens/imgEstatica/game/coracaoVazio.png">`
    }
}

function dead() {
    var obstaculo1 = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"));
    if (obstaculo1 < 400 && jump == false) {
        if(somaXP >= 100){
            somaXP -= 50
            sessionStorage.xpPartida = somaXP
        }
        if(obstaculo1 > 50){
            if (qntBatidas == 0) {
                obstaculoVoador.style.display = "none"
                obstaculo.style.display = "none"
                primeiroBanner.style.animation = "bannermove 20s linear infinite"
                player.style.filter = "drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.19)) brightness(0) invert(1)"
                heart(2, 1)
                qntBatidas++
                setTimeout(() => {
                    obstaculoVoador.style.display = "flex"
                    obstaculo.style.display = "flex"
                    player.style.filter = "drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.19))"
                    primeiroBanner.style.animation = "bannermove 7s linear infinite"
                }, 800)
            } else if (qntBatidas == 1) {
                obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            primeiroBanner.style.animation = "bannermove 20s linear infinite"
            player.style.filter = "drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.19)) brightness(0) invert(1)"
            heart(1, 2)
            qntBatidas++
            setTimeout(() => {
                obstaculoVoador.style.display = "flex"
                obstaculo.style.display = "flex"
                player.style.filter = "drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.19))"
                primeiroBanner.style.animation = "bannermove 7s linear infinite"
            }, 800)
        } else {
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            heart(0, 3)
            // moeda = 0
            qntJump = 0
            qntBatidas = 0
            tamanho = 0

            player.innerHTML = ` <img id="luffyCorrendo" src="${jumpPersonagem[personagem]}" />`
            controleJogando = false
            barra.style.display = "none"
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            controleBar = false
            barraCheia.style.backgroundColor = "none"
            primeiroBanner.style.animation = "bannermove 0s linear infinite"
            
            obstaculo.innerHTML = ``
            obstaculoVoador.innerHTML = ``
            tubarao.innerHTML = ``
            ship.innerHTML = ``
            arvore.innerHTML = ``
            enemy.innerHTML = ``
            barraCheia.style.display = ``
            setInterval(dindin, 800)
            setInterval(dead, 200)

            setTimeout(() => {
                containerJogar.innerHTML = `
                <div id="boxTexto">
                <h1 style="left: 15vw;">---GAME OVER---</h1> 
                <h2>XP GANHO: ${sessionStorage.xpPartida}</h2>
                <span>VOCÊ PEGOU: ${moeda}</span>
                </div>
                <button id="btnJogar" onclick="jogar()">RETRY</button>
                <a href="instrucoes.html"><button id="btnComo">COMO JOGAR</button></a>`
                container.style.filter = "brightness(0.7) blur(4px)"
                containerJogar.style.display = "flex"
                imagemContainerJogar.style.display = "flex"
            }, 2000)
        }
    }
}
}

function dindin() {
    var obstaculoVoador1 = parseInt(window.getComputedStyle(obstaculoVoador).getPropertyValue("left"))
    if (jump == true && obstaculoVoador1 < 700) {
        if (controleMoeda == false) {
            somaXP += 200
            sessionStorage.xpPartida = somaXP
            obstaculoVoador.innerHTML = ``
            moeda = moeda + 1
            divMoeda.innerHTML = `<img id="imgMoeda" src="${obstaculoVoadorPersonagem[personagem]}"/><span>X ${moeda}</span>`
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

function ganhar() {
    if (personagem == 0){
        if(moeda == 5){
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"

            player.innerHTML = ` <img id="luffyCorrendo" src="${jumpPersonagem[personagem]}"/>`
            controleJogando = false
            barra.style.display = "none"
            obstaculoVoador.style.display = "none"
            obstaculo.style.display = "none"
            controleBar = false
            barraCheia.style.backgroundColor = "none"
            primeiroBanner.style.animation = "bannermove 0s linear infinite"
            
            obstaculo.innerHTML = ``
            obstaculoVoador.innerHTML = ``
            tubarao.innerHTML = ``
            ship.innerHTML = ``
            arvore.innerHTML = ``
            enemy.innerHTML = ``
            barraCheia.style.display = ``
            setInterval(dindin, 800)
            setInterval(dead, 200)

            setTimeout(() => {
                containerJogar.innerHTML = `
                <div id="boxTexto">
            <h1>---PARABÉNS---</h1> 
            <h2>VOCÊ DESBLOQUEOU A FASE 2!</h2>
            <span>APERTE EM CONTINUAR PARA JOGAR</span>
        </div>
        <button id="btnMudar" onclick="mudarPersonagem()">CONTINUAR</button>
        <a href="index.html"><button id="btnInicio">INÍCIO</button></a>
        <a href="JOGO.html"><button id="btnRetry">RETRY</button></a>
                `
                container.style.filter = "brightness(0.7) blur(4px)"
                containerJogar.style.display = "flex"
                imagemContainerJogar.style.display = "flex"
                containerJogar.style.display = "flex"
            }, 2000)
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

function mudarPersonagem() {
    alert("a fazer")
}