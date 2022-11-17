// Entrada: Uma string qualquer deparada por espaço

// Saida: Uma string contendo todas as palavras da string
// de entrada, em caixa baixa e separas por hifen.

function spinalCase(str) {
    str = str.toLowerCase(); // Reescreve a string com todos os 
                             // caracteres minusculos
    
    let strList = str.split(" "); // Transforma a string em uma lista de
                                  // palavras.
    
    str = strList.join("-"); // Reconstroi a string com '-' (hifem) como separador
    return str;
  }
  
  spinalCase('This Is Spinal Tap');

  // Solução FreeCodeCamp

//   function spinalCase(str) {
//     // Replace low-upper case to low-space-uppercase
//     str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//     // Split on whitespace and underscores and join with dash
//     return str
//       .toLowerCase()
//       .split(/(?:_| )+/)
//       .join("-");
//   }
  
//   // test here
//   spinalCase("This Is Spinal Tap");