// sessão


    if (sessionStorage.ID_USUARIO == undefined || sessionStorage.ID_USUARIO == "" ){
        iconeSair.style.display = "none";
        
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
//     function testar() {
//         aguardar();

//         var formulario = new URLSearchParams(new FormData(document.getElementById("form_postagem")));

//         var divResultado = document.getElementById("div_feed");

//         divResultado.appendChild(document.createTextNode(formulario.get("descricao")));
//         divResultado.innerHTML = formulario.get("descricao");

//         finalizarAguardar();

//         return false;
//     }
