// Retorna o tamanho da palavra mais longa de uma string

function findLongestWordLength(str) {
    let strArray = str.split(" ");
    let maior = strArray[0].length;
  
    for(let i = 1; i < strArray.length; i++){
      if (strArray[i].length > maior){
        maior = strArray[i].length;
      } 
    }
    return maior;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");