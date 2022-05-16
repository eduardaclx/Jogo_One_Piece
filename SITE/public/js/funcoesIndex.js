// <!-- BANNER PASSANDO NO AUTOMÁTICO -->
    var imagens = ["../imagens/banner-luffy-crianca.png", "../imagens/banner-nico.png"];
    var imagemAtual = 0;

    function trocaImagemBanner() {
        imagemAtual = (imagemAtual + 1) % 2;
        document.querySelector('.banner img').src = imagens[imagemAtual];
    }
    setInterval(trocaImagemBanner, 3500);