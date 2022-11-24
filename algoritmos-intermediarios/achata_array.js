/*
    Achate um array aninhado. Você deve lidar com diferentes níveis de aninhamento.
*/

function steamrollArray(arr) {
    const flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Entra recursivamente no array para resgatar os elementos        
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        // Copia o conteudo que não está no array
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
  
  // test here
  steamrollArray([1, [2], [3, [[4]]]]);