// A fórmula para converter de Celsius para Fahrenheit 
// é a temperatura em Celsius vezes 9/5, mais 32.

function convertCtoF(celsius) {
    let fahrenheit = (9/5)*celsius + 32;
    return fahrenheit;
}
  
console.log(convertCtoF(30)); // exibe 86