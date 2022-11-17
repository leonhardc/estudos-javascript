// Entrada: Um array inicial e uma quantidade variável de
// argumentos.

// Saida: Um array como todos os elementos do array que são 
// diferentes dos numeros passados como parametro.

function destroyer(arr) {
    let args = Array.from(arguments); // Resgata os argumentos passados para função
                                      // como um array.
    let newArr = [];
    args.shift(); // Retira o primeiro elemento do array de argumentos, pois não
                  // precisamos dele
    for(let item of arr){
      if(args.indexOf(item) === -1){
        // Verfica todos os elementos que estão em 'arr' mas não são nenhum
        // dos elementos passados como argumento da função.
        newArr.push(item);
      }
    }
    return newArr;
    // O objeto 'arguments' é comum a todas as funções em javascript, nele
    // estão contidos todos os elementos passados como argumento da função.
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  