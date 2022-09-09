const nome = prompt("Qual é o seu nome?")

const API = 'https://mock-api.driven.com.br/api/v4/shirts-api/shirts';

function getAPI() {

    const promise = axios.get(`${API}`);
    promise.then(confirmarEncomenda);
    //  promise.catch(erro);
}


let modelo, gola, tecido, imagem;

const model = ["t-shirt", "long", "top-tank"];
const neck = ["v-neck", "round", "polo"];
const material = ["silk", "cotton", "polyester"];


/*
function encomendarBlusa() {

    const promise = axios.post(`${API}`);
    promise.then(confirmarEncomenda);
    promise.catch(erro);

    {
        "model": "t-shirt" | "long" | "top-tank",
            "neck": "v-neck" | "round" | "polo",
                "material": "silk" | "cotton" | "polyester",
                    "image": string no formato de url,
                        "owner": string,
                            "author": string
    }

}

function entrarNaSala() {

    novoNome = {
        name: nome
    }

    const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', novoNome);

    promessa.then(pegarDadosChat);
    promessa.catch(pedirNovoNome);
}


function erro(error) {
    if (erro.response.status === 422) {
        alert('****detalhar erro aqui****');
    }
}


function erro(error) {
    if (erro.response.status === 422) {
        alert('****detalhar erro aqui****');
    }
}
*/


function selecionarModelo(modeloSelecionado) {

    const modeloSelecionadoAntes = document.querySelector('.modelo .borda-selecionado');

    if (modeloSelecionadoAntes !== null) {
        modeloSelecionadoAntes.classList.remove('borda-selecionado');
    }

    modeloSelecionado.classList.add('borda-selecionado');

    modelo = modeloSelecionado;

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

    let image = document.querySelector('.image');
    imagem = image.value;

    ativarBotaoFecharPedido();
}


const button = document.querySelector('.botao')
button.disabled = true;

function ativarBotaoFecharPedido() {

    if (modelo !== undefined && gola !== undefined && tecido !== undefined && imagem !== undefined) {

        button.classList.add('pedido-confirmado')
        button.disabled = false;
    }

    console.log(nome);
    console.log(modelo);
    console.log(tecido);
    console.log(gola);
    console.log(imagem);
}

function confirmarEncomenda() {
    alert('Sua encomenda foi confirmada!')
}


