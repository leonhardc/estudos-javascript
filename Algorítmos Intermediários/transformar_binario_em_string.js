/*
    Retorne uma frase traduzida para o inglês da string binária passada.

    A string binária será separada por espaço.
*/

function binaryAgent(str) {
    var biString = str.split(" "); // Lista de strings separados por espacos
    var uniString = []; // lista de strings traduzidas
    

    for (var i = 0; i < biString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
    return uniString.join("");
  }
  
  // Teste
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );



