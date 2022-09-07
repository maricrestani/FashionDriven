/*const nome = prompt("Qual é o seu nome?")*/

let modelo, gola, tecido, imagem;


function selecionarModelo(modeloSelecionado) {

    const modeloSelecionadoAntes = document.querySelector('.modelo .borda-selecionado');

    if (modeloSelecionadoAntes !== null) {
        modeloSelecionadoAntes.classList.remove('borda-selecionado');
    }

    modeloSelecionado.classList.add('borda-selecionado');

    modelo = modeloSelecionado

    ativarBotaoFecharPedido();
}


function selecionarGola(golaSelecionada) {

    const golaSelecionadaAntes = document.querySelector('.gola .borda-selecionado');

    if (golaSelecionadaAntes !== null) {
        golaSelecionadaAntes.classList.remove('borda-selecionado');
    }

    golaSelecionada.classList.add('borda-selecionado');

    gola = golaSelecionada

    ativarBotaoFecharPedido();
}


function selecionarTecido(tecidoSelecionado) {

    const tecidoSelecionadoAntes = document.querySelector('.tecido .borda-selecionado');

    if (tecidoSelecionadoAntes !== null) {
        tecidoSelecionadoAntes.classList.remove('borda-selecionado');
    }

    tecidoSelecionado.classList.add('borda-selecionado');

    tecido = tecidoSelecionado

    ativarBotaoFecharPedido();
}

function salvarImagem() {

    //preciso que tenha um value no Input e esse value precisa ser uma URL

    let image = document.querySelector('.image');

    imagem = image.value;

    console.log(imagem);
}


function ativarBotaoFecharPedido() {

    if (modelo !== undefined && gola !== undefined && tecido !== undefined) {

        const button = document.querySelector('.botao')

        button.classList.add('pedido-confirmado')
    }

}