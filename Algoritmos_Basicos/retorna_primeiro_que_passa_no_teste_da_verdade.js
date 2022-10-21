// retorna o primeiro elemento do array que passa no teste
// da  verdade de func(x)
function findElement(arr, func) {
    for(let i = 0; i < arr.length; i++){
      if (func(arr[i])){
        return arr[i];
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);