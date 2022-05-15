// <!-- ANIMAÇÃO DA BARRA DE PESQUISA -->
    function pesquisar() {
        pesquisarInput.style.visibility = "visible";
        pesquisarInput.style.width = "135vw";
        pesquisarInput.style.height = "7vh";
        pesquisarInput.style.border = "none";
        pesquisarBtn.style.borderRadius = "0px";
        iconeCoracao.style.marginLeft = "10%";
        pesquisarBtn.style.borderEndEndRadius = "20px";
        pesquisarBtn.style.borderTopRightRadius = "20px";
    }

// <!-- BANNER PASSANDO NO AUTOMÁTICO -->
    var imagens = ["../imagens/banner-luffy-crianca.png", "../imagens/banner-nico.png"];
    var imagemAtual = 0;

    function trocaImagemBanner() {
        imagemAtual = (imagemAtual + 1) % 2;
        document.querySelector('.banner img').src = imagens[imagemAtual];
    }
    setInterval(trocaImagemBanner, 3500);