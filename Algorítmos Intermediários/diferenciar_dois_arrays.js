// Entrada: Dois arrais de numeros quaisquer

// Saida: Um arrai que contem todos os elementos que estão em
// apenas um dos dois arrays mas não em ambos.

function diffArray(arr1, arr2) {
    const newArr = [];
    
    for(let item of arr1) {
      if(arr2.indexOf(item) === -1){
        // Verifica se existe algum elemento no primeiro array
        // que não pertence ao segundo array. Se houver, adicio-
        // na este elemento em um array auxiliar.
        newArr.push(item);
      }
    }
    for(let item of arr2){
      if (arr1.indexOf(item) === -1){
        // Verifica se existe algum elemento no segundo array
        // que não pertence ao primeiro array. Se houver, adiciona
        // este elemento em um array auxiliar.
        newArr.push(item);
      }
    }
    return newArr;
    // NOTA: Array.indexOf(elem) retorna o menor indice onde foi encontrado
    // o parametro elem, caso elem não exista em Array, Array.indexOf(elem)
    // retorna -1.
}
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
  