const exArray = `var nomes = ["Lucas", "Otávio", "Gabriel", "Claudemir", "Marcela", "Lívia" ]`
document.querySelector("#exArray").textContent = exArray

const exObjeto = `var carro = {nome: corsa, cor: preto, ano: 2004}`
document.querySelector("#exObjeto").textContent = exObjeto

const exArrayObjeto = "var pessoas =[" + "<br>" + "{nome: " + "Lucas" + ", idade: 23, instrutor: true}," + "<br>" + "{" + "nome" + ": " + "Otávio" + ", idade: 23, instrutor: true }," + "<br>" + "{nome: " + "Marcela" + ", idade: 40, instrutor: false}," + "<br>" + "]"
document.querySelector("#exArrayObjeto").innerHTML = exArrayObjeto

const exLoop = ` var pessoas = [
    <br>
    {
    nome: "Lucas",
    idade: 23,
    instrutor: true
    },
    <br>
    {
    nome: "Otávio",
    idade: 23,
    instrutor: true
    },
    <br>
    {
    nome: "Marcela",
    idade: 40,
    instrutor: false
    },
    <br>
    ]
    <br><br>
    for (var i = 0; i &lt; pessoas.length; i++) {
    <br>
    escreva(pessoas[i].nome);
    <br>
    }`
document.querySelector("#exLoop").innerHTML = exLoop

const exemplo11_1 = `
    &lt;!DOCTYPE html&gt;
    <br>
    &lt;html lang=&quot;en&quot;&gt;
    <br>

    &lt;head&gt;
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot;&gt;
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta http-equiv=&quot;X-UA-Compatible&quot;
    content=&quot;IE=edge&quot;&gt;
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,
    initial-scale=1.0&quot;&gt;
    &nbsp;&nbsp;&nbsp;&nbsp;
    <br>
    &lt;title&gt;Document&lt;/title&gt;
    <br>
    &lt;/head&gt;
    <br>
    &lt;body&gt;
    &lt;/body&gt;
    <br>
    &lt;/html&gt;
`
document.querySelector("#exemplo11_1").innerHTML = exemplo11_1

const exBr = `
&lt;br&gt;
`
document.querySelector("#exBr").innerHTML = exBr

const exButton = `
    &lt;button&gt;
    <br>
    Salvar
    <br>
    &lt;/button&gt;
`
document.querySelector("#exButton").innerHTML = exButton

const exTitle = `
    &lt;p&gt;
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Título
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/title&gt;
    <br>
    &lt;/p&gt;
    <br>
`
document.querySelector("#exTitle").innerHTML = exTitle

const exH1 = `
    &lt;h1&gt;Título exemplo&lt;/h1&gt;
`
document.querySelector("#exH1").innerHTML = exH1

const exA = `
    &lt;a href=&quot;https://faculdadeiv2.com.br/&quot;&gt;Clique aqui&lt;/a&gt;
`
document.querySelector("#exA").innerHTML = exA

const exId = `
&lt;div id=&quot;conteudo1&quot;&gt;
    <br>
        &nbsp;&nbsp;&lt;p class=&quot;texto-vermelho&quot;&gt;Texto qualquer&lt;/p&gt;
        <br>
        &nbsp;&nbsp;&lt;p class=&quot;texto-vermelho&quot;&gt;Texto qualquer&lt;/p&gt;
        <br>
        &nbsp;&nbsp;&lt;p class=&quot;texto-vermelho&quot;&gt;Texto qualquer&lt;/p&gt;
        <br>
        &lt;/div&gt;
    <br>
    &lt;div id=&quot;conteudo2&quot;&gt;
    <br>
        &nbsp;&nbsp;&lt;p class=&quot;texto-azul&quot;&gt;Texto qualquer&lt;/p&gt;
        <br>
        &nbsp;&nbsp;&lt;p class=&quot;texto-azul&quot;&gt;Texto qualquer&lt;/p&gt;
        <br>
        &nbsp;&nbsp;&lt;p class=&quot;texto-azul&quot;&gt;Texto qualquer&lt;/p&gt;
        <br>
        &lt;/div&gt;

`
document.querySelector("#exId").innerHTML = exId

const exHref = `
    &lt;a href=&quot;https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/a&quot;&gt;Clique&lt;/a&gt;
`
document.querySelector("#exHref").innerHTML = exHref

const exSrc = `
    &lt;img src=&quot;www.hospedagemdaimagemexemplo.com.br/imagem.png&quot;&gt;
`
document.querySelector("#exSrc").innerHTML = exSrc

const exAlt = `
    &lt;img src=&quot;gato.png&quot; alt=&quot;gato&quot;&gt;
`
document.querySelector("#exAlt").innerHTML = exAlt

const exWidth = `
    &lt;img src=&quot;gato.png&quot; alt=&quot;gato&quot; width=&quot;500&quot;&gt;
`
document.querySelector("#exWidth").innerHTML = exWidth

const exUl = `
                        // lista não ordenada
                        <br>
                        &lt;ul&gt;
                        <br>
                        &nbsp;&nbsp;&lt;li&gt;Item 1&lt;/li&gt;
                        <br>
                        &nbsp;&nbsp;&lt;li&gt;Item 2&lt;/li&gt;
                        <br>
                        &nbsp;&nbsp;&lt;li&gt;Item 3&lt;/li&gt;
                        <br>
                        &lt;/ul&gt;
                        <br>
                        // ou lista ordenada
                        <br>
                        &lt;ol&gt;
                        <br>
                        &nbsp;&nbsp;&lt;li&gt;Item 1&lt;/li&gt;
                        <br>
                        &nbsp;&nbsp;&lt;li&gt;Item 2&lt;/li&gt;
                        <br>
                        &nbsp;&nbsp;&lt;li&gt;Item 3&lt;/li&gt;
                        <br>
                        &lt;/ol&gt;
                        <br>
`
document.querySelector("#exUl").innerHTML = exUl

const exImg = `
&lt;img src=&quot;caminho da imagem&quot; alt=&quot;Breve descrição da imagem&quot;&gt;
`
document.querySelector("#exImg").innerHTML = exImg

const exStrong = `
        &lt;p&gt;
        <br>
        &nbsp;&nbsp;Um texto qualquer aqui, &lt;strong&gt;e aqui um texto em negrito&lt;/strong&gt;
        <br>
        &lt;/p&gt;
`
document.querySelector("#exStrong").innerHTML = exStrong

const exSpan = `
    &lt;p&gt;
    <br>
    &nbsp;&nbsp;Um texto qualquer, &lt;span&gt;um trecho do texto que será diferente&lt;/span&gt;
    <br>
    &lt;/p&gt;
`
document.querySelector("#exSpan").innerHTML = exSpan

const exColor = `
    &lt;style&gt;
    <br>
    &nbsp;&nbsp;p {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;color: blue;
    <br>
    &nbsp;&nbsp;}
    <br>
    &lt;/style&gt;
`
document.querySelector("#exColor").innerHTML = exColor

const exBgc = `
    &lt;style&gt;
        <br>
        &nbsp;&nbsp;div {
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;background-color: red;
        <br>
        &nbsp;&nbsp;}
        <br>
    &lt;/style&gt;
`
document.querySelector("#exBgc").innerHTML = exBgc

const exWidht2 = `
    div {
        <br>
        &nbsp;&nbsp;width: 300px;
        <br>
    }
`
document.querySelector("#exWidth2").innerHTML = exWidht2

const exHeight2 = `
    div {
        <br>
        &nbsp;&nbsp;height: 300px;
        <br>
    }
`
document.querySelector("#exHeight2").innerHTML = exHeight2

const exMargin = `
    div {
        <br>
        &nbsp;&nbsp;margin: 32px;
        <br>
    }
`
document.querySelector("#exMargin").innerHTML = exMargin

const exPadding = `
    div {
        <br>
        &nbsp;&nbsp;padding: 32px;
        <br>
    }
`
document.querySelector("#exPadding").innerHTML = exPadding

const exBorder = `
    button {border: 2px solid red;}
`
document.querySelector("#exBorder").innerHTML = exBorder

const exBorderRadius = `
    div {border-radius: 8px;}
`
document.querySelector("#exBorderRadius").innerHTML = exBorderRadius

const exFontSize = `
    p {font-size: 32px;}
`
document.querySelector("#exFontSize").innerHTML = exFontSize

const exFonteWeight = `
    a {font-weight: bold;}
`
document.querySelector("#exFontWeight").innerHTML = exFonteWeight

const exBgcImage = `
    div {
    <br>
    &nbsp;&nbsp;background-image: url('caminho da imagem');
    <br>
    &nbsp;&nbsp;background-repeat: no-repeat;
    <br>
    &nbsp;&nbsp;background-size: cover;
    <br>
    /* ou */
    <br>
    &nbsp;&nbsp;background-size: contain;
    <br>
    /* ou */
    <br>
    &nbsp;&nbsp;background-position: center center;
    <br>
    }
`
document.querySelector("#exBgcImage").innerHTML = exBgcImage

const exTextAlign = `
    p {
    <br>
    &nbsp;&nbsp;text-align: center;
    <br>
    /* ou */
    <br>
    &nbsp;&nbsp;text-align: justify;
    <br>
    /* ou */
    <br>
    &nbsp;&nbsp;text-align: left;
    <br>
    /* ou */
    <br>
    &nbsp;&nbsp;text-align: right;
    <br>
    }
`
document.querySelector("#exTextAlign").innerHTML = exTextAlign

const exVisibility = `
    p {
        <br>
        &nbsp;&nbsp;visibility: hidden;
        <br>
    /* ou */
        <br>
        &nbsp;&nbsp;visibility: visible;
        <br>
    }
`
document.querySelector("#exVisibility").innerHTML = exVisibility

const exString = `
    var exemploString = "Um texto qualquer com letras Maiúsculas, minúsculas , núm3r0s e símbolos!"
`
document.querySelector("#exString").innerHTML = exString

const exNumber = `
    var exemploNumber = -9826783.8965e+2
`
document.querySelector("#exNumber").innerHTML = exNumber

const exBoolean = `
    var exemploBoolean = false
    <br>
    <br>
    if(45>24){
        <br>
        &nbsp;&nbsp;console.log("Verdadeiro");
        <br>
        &nbsp;&nbsp;exemploBoolean = true;
        <br>
    } else {
        <br> 
        &nbsp;&nbsp;console.log("Falso");
        <br>
        &nbsp;&nbsp;exemploBoolean = Falso;
        <br>
    }
`
document.querySelector("#exBoolean").innerHTML = exBoolean

const exNull = `
    Exemplo: "cidade" / 2
`
document.querySelector("#exNull").innerHTML = exNull

const exUndefined = `
var exemploUndefined
`
document.querySelector("#exUndefined").innerHTML = exUndefined

const exArray2 = `
    var exemploArray = [1, 2, 3, "quatro", true]
`
document.querySelector("#exArray2").innerHTML = exArray2

const exObjeto2 = `
    var exemploObjeto = {
    <br>
    &nbsp;&nbsp;metal: "chumbo",
    <br>
    &nbsp;&nbsp;cor: "cinza",
    <br>
    &nbsp;&nbsp;pesado: true
    <br>
    }
`
document.querySelector("#exObjeto2").innerHTML = exObjeto2

const exFunction = `
    function exemploFunction(){
    <br>    
    console.log("Exibe o resultado desta função no console.")
    <br>
    }
`
document.querySelector("#exFunction").innerHTML = exFunction