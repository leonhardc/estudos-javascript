/*
    Dado o array arr, faça iterações sobre ele e remova cada elemento 
    começando do primeiro elemento (o índice 0) até que a função func 
    retorne true quando o elemento iterado for passado através dele.

    Em seguida, retorne o resto do array uma vez que a condição for 
    satisfeita, caso contrário, arr deve ser retornado como um array 
    vazio.
*/

function dropElements(arr, func) {
    let elem; // guarda elemento que será procurado
    let entrou=false;
    for(let i of arr){
        console.log(i, func(i));
        if(func(i) === true){
            elem=i;
            entrou = true;
            break;
        }
    }
    if(entrou){
        return arr.slice(arr.indexOf(elem));
    }
    else{
        return [];
    }
  }
  
  // Testes
  dropElements([1, 2, 3], function(n) {return n < 3; });
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
  dropElements([0, 1, 0, 1], function(n) {return n === 1;});
  dropElements([1, 2, 3, 4], function(n) {return n > 5;});