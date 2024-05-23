// Efeito digitação
const atraso = 100;
const textoElemento = document.querySelector(".apresentacao__conteudo__titulo");
const textoNormal = textoElemento.childNodes[0].textContent.trim();
const textoDestaque = textoElemento.querySelector(".titulo-destaque").textContent;

let textoCompleto = textoNormal + " " + textoDestaque;
let contadorDeLetras = 0;

function escreverTexto() {
  if (contadorDeLetras === 0) {
    textoElemento.innerHTML = '';
  }

  if (contadorDeLetras < textoCompleto.length) {
    if (contadorDeLetras === textoNormal.length) {
      textoElemento.innerHTML += '<strong class="titulo-destaque">' + textoCompleto.charAt(contadorDeLetras) + '</strong>';
    } else if (contadorDeLetras > textoNormal.length) {
      textoElemento.querySelector(".titulo-destaque").innerHTML += textoCompleto.charAt(contadorDeLetras);
    } else {
      textoElemento.innerHTML += textoCompleto.charAt(contadorDeLetras);
    }
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();
