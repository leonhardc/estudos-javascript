// Entrada: Um array com dois numeros arr = [inicio, fim]. 
// Retorno: A soma de todos os numeros entre esse intervalo,
// indo os elementos de inicio e fim.

function sumAll(arr) {
    let [inicio, fim] = arr;
    let soma = 0;

    if (inicio > fim){
        // Se o primeiro elemento do array for maior que o segundo
        // troca a posição dos dois, garantindo que o inicio do inter-
        // valo sempre será menor que o final do intervalo.
        [inicio, fim] = [fim, inicio];
    }
    for (let i = inicio; i <= fim; i++){
      soma += i; // Soma todos os elementos do intervalo, incluindo
                 // o início e o final.
    }  
    return soma; // retona o valor da soma.
  }
  
  sumAll([1, 4]);
  