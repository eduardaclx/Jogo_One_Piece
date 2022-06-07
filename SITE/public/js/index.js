var nome = sessionStorage.NOME_USUARIO;
if (nome == "Eduarda") {
  sessionStorage.xpPartida = 4100;
} else {
  sessionStorage.xpPartida = 0;
}

function qntPlayers() {
  //aguardar();
  fetch("/avisos/listar")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          console.log("NENHUM PLAYER CADASTRADO");
        }

        resposta.json().then(function (resposta) {
          console.log(resposta[0]);

          var tablePlayer = resposta[0];

          // criando e manipulando elementos do HTML via JavaScript
          var metricas = "";
          if (nome == undefined) {
            metricas = `
            TOTAL DE PLAYERS ${tablePlayer.quantidadePlayer}
            `;
          } else {
            metricas = `
            XP TOTAL ${sessionStorage.xpPartida}<br />
            TOTAL DE PLAYERS ${tablePlayer.quantidadePlayer}
            `;
          }
          textoTotalPlayer.innerHTML = metricas;

        //   finalizarAguardar();
        });
      } else {
        throw "Houve um erro na API!";
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
    //   finalizarAguardar();
    });
}
