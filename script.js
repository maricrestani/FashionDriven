const nome = prompt("Qual é o seu nome?");
let modelo, gola, tecido, imagem;

getAPI()


function getAPI() {

    console.log("getAPI foi chamada")

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promise.then(renderizarBlusa);
    //  promise.catch(erro);
}

function renderizarBlusa(dados) {

    console.log("renderizarBlusa foi chamada")

    let caixa = document.querySelector('.container-pedidos');

    for (let i = 0; i < 10; i++) {

        let blusa = dados.data[i];

        caixa.innerHTML +=
            ` <div class="pedidos" id="${blusa.id}">
            <img src='${blusa.image}'>
            <h2><strong>Criador: </stong>${blusa.owner}</h2>
        </div>`
    }
}


function encomendarBlusa() {

    let pedido =
    {
        model: "",
        neck: "",
        material: "",
        image: "",
        owner: "",
        author: ""
    };

    pedido.model = modelo;
    pedido.neck = gola;
    pedido.material = tecido;
    pedido.image = imagem;
    pedido.owner = nome;
    pedido.author = nome;


    console.log("esse é o pedido", pedido)

    const promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', pedido);
    promise.then(confirmarEncomenda);
    promise.catch(erro);
}


function erro(error) {
    if (error.response.status === 422) {
        alert('****detalhar erro aqui****');
    }
}



function selecionarModelo(modeloSelecionado) {

    const modeloSelecionadoAntes = document.querySelector('.modelo .borda-selecionado');

    if (modeloSelecionadoAntes !== null) {
        modeloSelecionadoAntes.classList.remove('borda-selecionado');
    }

    modeloSelecionado.classList.add('borda-selecionado');

    modelo = modeloSelecionado.id;

    ativarBotaoFecharPedido();
}


function selecionarGola(golaSelecionada) {

    const golaSelecionadaAntes = document.querySelector('.gola .borda-selecionado');

    if (golaSelecionadaAntes !== null) {
        golaSelecionadaAntes.classList.remove('borda-selecionado');
    }

    golaSelecionada.classList.add('borda-selecionado');

    gola = golaSelecionada.id

    ativarBotaoFecharPedido();
}


function selecionarTecido(tecidoSelecionado) {

    const tecidoSelecionadoAntes = document.querySelector('.tecido .borda-selecionado');

    if (tecidoSelecionadoAntes !== null) {
        tecidoSelecionadoAntes.classList.remove('borda-selecionado');
    }

    tecidoSelecionado.classList.add('borda-selecionado');

    tecido = tecidoSelecionado.id

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

    //criar um textinho com o resumo do pedido
}


