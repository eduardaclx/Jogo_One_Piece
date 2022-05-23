// sessão


    if (sessionStorage.ID_USUARIO == undefined || sessionStorage.ID_USUARIO == "" ){
        iconeSair.style.display = "none";
        iconeCoracao.style.display = "none";
        
    } else{
        iconeSair.style.display = "flex";
        iconeCoracao.style.display = "flex";
        mudarCarrinho.innerHTML = `<a href="carrinho.html"><img src="imagens/carrinho.png" class="icone" id="iconeCarrinho"></a>`

        trocaImagem.innerHTML = `<img src="./imagens/luffy-icon.jpg" class="icone" id="iconeUser">
        <style>
            #iconeUser{
                height: 10vh;
                width: 5vw;
                margin-right: 4vw;
                border-radius: 20vw;
            }
        </style>

        `
    }

    listaFavoritos = []

    sessionStorage.FAVORITOS_USUARIO = listaFavoritos;
    
    function favoritarFigureSabo() {
        var itemSelecionado = "Figure Action Sabo"

        listaFavoritos.push(itemSelecionado)

    }
    function favoritarFigureLuffy() {
        var itemSelecionado = "Figure Action Luffy"

        listaFavoritos.push(itemSelecionado)
    }
    function favoritarFigureAce() {
        var itemSelecionado = "Figure Action Ace"

        listaFavoritos.push(itemSelecionado)
    }


function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../index.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "block";
    div_erros_login.style.display = "none";
}
    

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        div_erros_login.style.display = "block";
        divErrosLogin.innerHTML = texto;
    }
}

// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

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





// function editar() {
//     fetch(`/avisos/editar/${sessionStorage.getItem("ID_POSTAGEM_EDITANDO")}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             descricao: textarea_descricao.value
//         })
//     }).then(function (resposta) {

//         if (resposta.ok) {
//             window.alert("Post atualizado com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
//             window.location = "/dashboard/mural.html"
//         } else if (resposta.status == 404) {
//             window.alert("Deu 404!");
//         } else {
//             throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
//         }
//     }).catch(function (resposta) {
//         console.log(`#ERRO: ${resposta}`);
//     });
// }
// _usuario.innerHTML = sessionStorage.NOME_USUARIO;


//     function editar(idAviso) {
//         sessionStorage.ID_POSTAGEM_EDITANDO = idAviso;
//         console.log("cliquei em editar - " + idAviso);
//         window.alert("Você será redirecionado à página de edição do aviso de id número: " + idAviso);
//         window.location = "/dashboard/edicao-aviso.html"

//     }

//     function deletar(idAviso) {
//         console.log("Criar função de apagar post escolhido - ID" + idAviso);
//         fetch(`/avisos/deletar/${idAviso}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then(function (resposta) {

//             if (resposta.ok) {
//                 window.alert("Post deletado com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
//                 window.location = "/dashboard/mural.html"
//             } else if (resposta.status == 404) {
//                 window.alert("Deu 404!");
//             } else {
//                 throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
//             }
//         }).catch(function (resposta) {
//             console.log(`#ERRO: ${resposta}`);
//         });
//     }
listarProdutos()
    function listarProdutos() {
        //aguardar();
        fetch("/avisos/listar").then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    cardErro.style.display = "block";
                    mensagem_erro.innerHTML = "Erro";
                    
                    cardErro.appendChild(mensagem);
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    var produto = document.getElementById("produtoSabo");
                    produto.innerHTML = "";
                    for (let i = 0; i < resposta.length; i++) {
                        var publicacao = resposta[i];

                        // criando e manipulando elementos do HTML via JavaScript
                        


                        produtoSabo.innerHTML = `"<div id="imagemCardVerticalSabo">
                        <img src="imagens/sabo-figure-action.png">
                        </div>
                        <div class="boxPrincipaisProdutos">
                        <h2>${json.nomeProduto}</h2>
                        <div class="tamanhoPrincipaisProdutos">
                        <span id="descricaoPrincipaisProdutos">figure action do<br> Sabo</span>
                        </div>
                        <div class="preco">
                        <span>${json.preco}</span>
                        <img src="./imagens/coracaoProduto.png" id="coracaoProduto" onclick="favoritarFigureSabo()">
                        </div>
                        </div>"`;
                        
                    }

                    finalizarAguardar();
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
            finalizarAguardar();
        });
    }

//     function testar() {
//         aguardar();

//         var formulario = new URLSearchParams(new FormData(document.getElementById("form_postagem")));

//         var divResultado = document.getElementById("div_feed");

//         divResultado.appendChild(document.createTextNode(formulario.get("descricao")));
//         divResultado.innerHTML = formulario.get("descricao");

//         finalizarAguardar();

//         return false;
//     }

function pegarValorDigitado() {
    var pesquisa = pesquisarInput.value;
    sessionStorage.PRODUTO = pesquisa;
    divBotao.innerHTML = `
    <style>
    .btnStyle{
        border-end-end-radius: 20px;
        border-top-rigt-radius: 20px;
    }
    </style>
    <a href="todosItens.html"><button id="pesquisarBtn" onclick="pesquisa()" class="btnStyle"><img src="imagens/lupa.png" id="iconeLupa"></button></a>
    `
    pesquisarInput.style.visibility = "visible";
    pesquisarInput.style.width = "135vw";
    pesquisarInput.style.height = "7vh";
    pesquisarInput.style.border = "none";
    pesquisarBtn.style.borderRadius = "0px";
    iconeCoracao.style.marginLeft = "10%";
    
}
