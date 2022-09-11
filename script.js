const nome = prompt("Qual é o seu nome?");
let modelo, gola, tecido, imagem, identificador;


getAPI()

function getAPI() {

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promise.then(renderizarBlusa);
}


function renderizarBlusa(dados) {

    let caixa = document.querySelector('.container-pedidos');

    for (let i = 0; i < 10; i++) {

        let blusa = dados.data[i];

        caixa.innerHTML +=
            ` <div class="pedidos" id="${blusa.id}">
            <img src='${blusa.image}'>
            <h2><b>Criador: </b>${blusa.owner}</h2>
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
    promise.catch(erroEncomenda);
}


function erroEncomenda(error) {
    if (error.response.status === 422) {
        alert("Ops, não conseguimos processar sua encomenda");
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
}

function confirmarEncomenda() {
    alert('Sua encomenda foi confirmada!')
    //criar um textinho com o resumo do pedido

    getAPI();
}



/*
- Encomendar blusa criada por alguém
    - [ ]  Ao clicar em uma blusa na lista "últimos pedidos" deve aparecer um `confirm()` e caso o usuário aceite. Deve fazer uma encomenda com os dados da blusa clicada.

###

*/
