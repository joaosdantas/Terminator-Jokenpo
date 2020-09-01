/* <p id="result">Pedra (user) ganha de Tesoura (comp) </p>*/

// let textoResultado_p = document.querySelector("#result");

// let userScore_span = document.getElementById("userScore");

// let scoreLabel_class = document.querySelectorAll(".scoreLabel")

// let scoreLabel_class = document.getElementsByClassName("scoreLabel");

let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
const userScore_span = document.querySelector("#userScore");
const compScore_span = document.querySelector("#compScore");
const result_p = document.querySelector("#result")
const paperButton_img = document.querySelector("#paperButton");
const rockButton_img = document.querySelector("#rockButton");
const scissorsButton_img = document.querySelector("#scissorsButton");

//3 tipos de variaveis;
//Let pode usar sempre;
//var pode evitar para regras simples;
// const pode usar, quando não for alterar o valor;

//FUNÇÃO JS
//declarada: function nomeDaFuncao(parametro)
//
//ARROW FUNCTION
//não declarada, sintaxe:
//() =>{
// CODIGO FUNÇÃO
//}
//() =>codigo função se for uma linha só
cliqueDoComputador = ["rock", "paper", "scissors"];


function jogo(cliqueDoUsuario) {

    jogadasPossiveisComputador = ["rock", "paper", "scissors"];
    n = Math.floor(Math.random() * 3);
    cliqueDoComputador = jogadasPossiveisComputador[n];
    console.log(cliqueDoUsuario + cliqueDoComputador);

    switch (cliqueDoUsuario + cliqueDoComputador) {
        //vitória do usuário
        case "paperButtonrock":
        case "rockButtonscissors":
        case "scissorsButtonpaper":
            pontuacaoUsuario++;

            userScore_span.innerHTML = pontuacaoUsuario;

            result_p.innerHTML = "Point for humanity!";
            break;
            //derrota do usuário
        case "paperButtonscissors":
        case "rockButtonpaper":
        case "scissorsButtonrock":
            pontuacaoComputador++;
            compScore_span.innerHTML = pontuacaoComputador;

            result_p.innerHTML = "Oh no, point for Skynet!";

            break;

            //empate
        case "paperButtonpaper":
        case "rockButtonrock":
        case "scissorsButtonscissors":



            result_p.innerHTML = "The dispute is fierce, it was a draw!";

            break;

            //default para algum erro
        default:
            result_p.innerHTML = "Aconteceu algum Erro, jogue novamente!";
            break

    }

}

function principal() {

    paperButton_img.addEventListener("click", () => jogo("paperButton"));
    rockButton_img.addEventListener("click", () => jogo("rockButton"));
    scissorsButton_img.addEventListener("click", () => jogo("scissorsButton"));
}

resetButton.onclick = () => {

    pontuacaoUsuario = 0;
    pontuacaoComputador = 0;
    userScore_span.innerHTML = 0;
    compScore_span.innerHTML = 0;
    result_p.innerHTML = "The future of humanity is in your hands!";

}

principal();