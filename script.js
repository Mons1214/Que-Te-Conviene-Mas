function sumaTotal() {

    const input = document.getElementById('cantidad');
    const inputValor = input.value;

    
let cantidad = 1000;
let resultado = cantidad * inputValor;

let cantidad2 = 0.50;
let total = cantidad2 * (2 ** inputValor);

const h2 = document.querySelector('#Totality');
const h2TextContent = h2.textContent

let sumaFinal = `ganaría por ${inputValor} días, ganaría ${resultado} de darme la misma cantidad por día, y ganaría ${total}`;


h2.textContent = sumaFinal;
input.value = ""
}
