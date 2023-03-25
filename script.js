//precisamos pensar oque nos vamos fazer funcionar primeiro 
//ja entendemos que quando queremos pegar algo do html nos ultilizamos o document
//e tambem aprendemos que existem varias formas da gente puxar por elementos,id,tag entre outros


//primeiro desafio a primeira coisa que vai funcionar sera o botao, oque queremos que o botao faça ? retorne o valor que a gente colocar no input convertendo para dolar ou euro
// o outro desafio é trocar os valores assim que a gente colocar algum valor no input
// precisamos formatar os valores eles precisam aparecer em formato de reais
//precisamos mudar as bandeiras automaticamente quando forem selecionadas
//colocar para converter automaticamente sem apertar no botao


const button = document.getElementsByTagName('button')[0] // vamos começar pelo botao estamos falando pro computador que a variavel vai ser botao que estamos pegando um elemnto do html  e eu vou puxar esse elemento ultilizando o getelementbytagname que é o button e que eu quero apenas a inf do botao como ele é o unico botao da pagina agente usa a tag mais se tivesse mais de um botao poderiamos usar o id
const select = document.getElementById("select")

const dolar = 5.2//valor do dolar
const euro = 5.9 //valor do euro
const bitcoin=144.039 // valor do bitcoin
const convertValues = () => {                                               //vou criar a função que sera chamada toda vez que houver um click no botao 
    const inputReais = document.getElementById('input-real').value          // valor do input peguei pelo (id =identificador unico )e falei que so quero apenas o valor
    const real = document.getElementById('valorreal')    //aqui vamos criar as variaveis do real e do dolar que se refere aos valores em baixo das bandeiras.
    const dolar1 = document.getElementById('valordolar')
     
    //real.innerHTML= inputReais       // aqui voce pegou o valor de real e falou que é igual ao do input reais
    // dolar1.innerHTML=inputReais/dolar //aqui estamos falando que o dolar é igual ao real dividido pelo dolar e assim teremos os valores alterados em baixo das imagens toda vez que mudarmos o valor do input ira converter e mudar o valor de baixo

    real.innerHTML = new Intl.NumberFormat("pt-BR", { // isso aqui é para colocar os valores em formato de moeda aqui estamos mechendo no real
        style: "currency",
        currency: "BRL",
    }).format(inputReais);

    if (select.value === "US$ Dólar americano") {
        dolar1.innerHTML = new Intl.NumberFormat("en-US", { // isso aqui é para colocar os valores em formato de moeda aqui estamos mechendo no dolar e convertendo o valor no caso doçar dividido por real 
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar);
    }
    if (select.value === "€ Euro") { //isso é uma comparação ,se o valor do select for igual ao euro ele vai mudar
        dolar1.innerHTML = new Intl.NumberFormat("de-DE", { // isso aqui é para colocar os valores em formato de moeda aqui estamos mechendo no euro e convertendo o valor no caso o euro é dividido por real 
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro);
    }
    if (select.value === "Bitcoin") { //isso é uma comparação ,se o valor do select for igual ao bitcoin ele vai mudar e mostrar o bitcoin
        dolar1.innerHTML = new Intl.NumberFormat("de-DE", { // isso aqui é para colocar os valores em formato de moeda aqui estamos mechendo no bitcoin e convertendo o valor no caso o bitcoin é dividido por real 
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin);
   };
   }

    const trocaeuro = () => {
        const descricao = document.getElementById("descricao")
        const imagemeuro = document.getElementById("foto")


        if (select.value === "€ Euro") { // se a pessoa escolher  o euro para mostar o euro e trocar 
            descricao.innerHTML = "Euro"
            imagemeuro.src = "./assets/img/euro.png" //imagem do euro
        }
        if (select.value === "US$ Dólar americano") {  //se a pessoa escolher o trocar imagem e mostrar dolar
            descricao.innerHTML = "Dólar americano"
            imagemeuro.src = "./assets/img/estados-unidos (1) 1.svg" //imagem do estados unidos
        }
        if (select.value === "Bitcoin") {  //se a pessoa escolher o trocar imagem e mostrar bitcoin
            descricao.innerHTML = "Bitcoin"
            imagemeuro.src = "./assets/img/bitcoin.png" //imagem do bitcoin
            }


        convertValues() //toda vez que eu tiver uma troca de valor essa função tbm vai ser chamada
    }


    button.addEventListener("click", convertValues)                //aqui estou falando que quero ouvir um evento e sera o click ou seja toda vez que meu botao for cliclado eu chamo uma função que é aquela que criamos a convertValues
    select.addEventListener("change", trocaeuro)  //aqui estamos falando que quando houver mudança ele vai trocar