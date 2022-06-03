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


function jump1() {
    var player = document.getElementById("player")
    if (controleBar == true) {
        if (player.className != "jump") {
            player.innerHTML = `<img src="../pngFinalizadas/jump.gif"/>`
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
                player.innerHTML = `<img src="../pngFinalizadas/run.gif"/>`
            }, 1000)
        }
    }
}

function heart(coracao, preto){
    vida.innerHTML = ""
    for(var i = 0; i < coracao; i++){
        vida.innerHTML += `
        <img id="coracao[i+1]" src="./imagens/coracaoCheio.png" alt="">`
    }
    for(var i = 0; i < preto; i++){
        vida.innerHTML += `
        <img id="coracao[i+1]" src="./imagens/coracaoVazio.png" alt="">`
    }
}

function dead() {
    var obstaculo1 = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"));
    if (obstaculo1 < 400 && jump == false) {
        if (qntBatidas == 0) {
            a.style.animation = "bannermove 20s linear infinite"
            player.innerHTML = `
            <img id="imagemLuffyDano" src="../pngFinalizadas/luffyDano.gif"/>`
            heart(2, 1)
            qntBatidas++
            setTimeout(() => {
                player.innerHTML = `<img src="../pngFinalizadas/run.gif"/>`
                a.style.animation = "bannermove 7s linear infinite"
            }, 1000)
        } else if (qntBatidas == 1) {
            a.style.animation = "bannermove 20s linear infinite"
            player.innerHTML = `
            <img id="imagemLuffyDano" src="../pngFinalizadas/luffyDano.gif"/>`
            heart(1, 2)
            qntBatidas++
            setTimeout(() => {
                player.innerHTML = `
                <img src="../pngFinalizadas/run.gif"/>`
                a.style.animation = "bannermove 7s linear infinite"
            }, 1000)
        } else {
            player.innerHTML = `<img id="imagemLuffyDano" src="../pngFinalizadas/luffyDano.gif"/>`
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
            divMoeda.innerHTML = `<img id="imgMoeda" src="../pngFinalizadas/moeda.gif"/><span>X ${moeda}</span>`
            moeda++
            controleMoeda = true
            setTimeout(controleMoeda = false, 1000)
            setTimeout(() => {
                obstaculoVoador.innerHTML = `<img src="../pngFinalizadas/moeda.gif" />`
            }, 1000)
        }
    }
}

function iniciar() {
    heart(3, 0)
    barra.style.display = "flex"
    container.style.filter = "none"
    containerJogar.style.display = "none"
    controleBar = true

    backgroundDinamico.innerHTML = `
    <img id="a" class="first" src="./imagens/imagensEditar/cenario.jpg" alt="" />
    <img src="./imagens/imagensEditar/cenario.jpg" alt="" />
    <img src="./imagens/imagensEditar/cenario.jpg" alt="" />
    <img src="./imagens/imagensEditar/cenario.jpg" alt="" />
    <img src="./imagens/imagensEditar/cenario.jpg" alt="" />
    <img src="./imagens/imagensEditar/cenario.jpg" alt="" />`
    player.innerHTML = ` <img id="luffyCorrendo" src="../pngFinalizadas/run.gif" />`
    obstaculo.innerHTML = `<img src="../pngFinalizadas/turtle.gif" />`
    obstaculoVoador.innerHTML = `<img src="../pngFinalizadas/moeda.gif" />`
    arvore.innerHTML = `<img src="../pngFinalizadas/arvore.gif" alt="">`
    abelha.innerHTML = `<img src="../pngFinalizadas/abelha.gif" alt="">`
    setInterval(dindin, 900)
    setInterval(dead, 2000)
}

function especial() {
    if (controleEspecial == false) {
        if (tamanho > 2 && tamanho <= 6) {
            tamanho = tamanho - 2
            barraCheia.style.width = `${tamanho}vw`
            player.innerHTML = `<img id="imagemLuffyDano" src="../pngFinalizadas/luffyDano.gif"/>`
            controleEspecial = true
            
            setTimeout(() => {
                controleEspecial = false
                player.innerHTML = `<img  src="../pngFinalizadas/run.gif"/>`
            }, 900)
        } else if (tamanho > 6 && tamanho <= 10) {
            player.innerHTML = `<img id="imagemLuffyDano" src="../pngFinalizadas/luffyDano.gif"/>`
            tamanho = tamanho - 4
            barraCheia.style.width = `${tamanho}vw`
            
            setTimeout(() => {
                controleEspecial = false
                player.innerHTML = `<img src="../pngFinalizadas/run.gif"/>`
            }, 900)
        } else if (tamanho > 10 && tamanho <= 15) {
            player.innerHTML = `<img id="imagemLuffyDano" src="../pngFinalizadas/luffyDano.gif"/>`
            tamanho = tamanho - 6
            barraCheia.style.width = `${tamanho}vw`
            
            setTimeout(() => {
                controleEspecial = false
                player.innerHTML = `<img src="../pngFinalizadas/run.gif"/>`
            }, 900)
        } else if (tamanho > 15 && tamanho <= 21) {
            player.innerHTML = `<img id="imagemLuffyDano" src="../pngFinalizadas/luffyDano.gif"/>`
            tamanho = tamanho - 10
            barraCheia.style.width = `${tamanho}vw`

            setTimeout(() => {
                controleEspecial = false
                player.innerHTML = `<img src="../pngFinalizadas/run.gif"/>`
            }, 900)
        }

    }
}