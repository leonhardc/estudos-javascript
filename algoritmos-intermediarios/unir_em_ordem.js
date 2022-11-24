/*
    Escreva uma função que recebe dois ou mais arrays e retorne 
    um novo array de calores únicos na ordem do array original 
    fornecido.

    Em outras palavras, todos os valores presentes de todos os 
    arrays devem ser incluídos na sua ordem original, mas sem 
    valores duplicados no array final.

    Os números únicos devem ser ordenados pela sua ordem original, 
    mas o array final não deve ser ordenado em ordem numérica.
*/

function uniteUnique(arr) {
    let newArr = [];
    for(let item of Object.values(arguments)){
        for(let i = 0; i < item.length; i++){
            if(newArr.indexOf(item[i]) == -1){
                newArr.push(item[i]);
            }
        }
    }
    return newArr;
    /* 
       O objeto 'arguments' é um objeto presente em todas as
       funções. Nele, contém todos os argumentos passados na
       chamada da função
       
       Array.indexOf() retorna o indice de determinado elemento
       dentro do array. Caso esse elemento não exista dentro do 
       Array, a função retorna -1.
    */
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);