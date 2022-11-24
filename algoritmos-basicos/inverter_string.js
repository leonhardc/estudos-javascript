// Inverte string dada como entrada da função reverseString()
// Função util para verificar a existencia de palindromo.

function reverseString(str) {
    let newStr = "";
    for(let i = str.length-1; i > -1; i--){
      newStr += str[i];
    }  
    return newStr;
  }
  
  reverseString("hello");