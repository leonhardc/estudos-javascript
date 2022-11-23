/*
    Soma todos os numeros primos de menores ou iguais a num
*/

function sumPrimes(num) {
    /*
        1. Saber se um determinado numero é primo
        2. Se determinado numero for primo, adicionar a um array de numeros primos
        3. Somar todos os elementos do array de numemos primos
    */
    let primos = []; // Array que guarda os numeros primos
    let soma = 0; // Variável que será o somatório
    // varrer todos os numeros menores ou iguais a num
    for(let i = 1; i <= num; i++){
        let ehPrimo = true;
        for(let k = 2; k < i; k++){
            // verificar se determinado numero é divisível por algum inteiro
            // no intervalo aberto (1, i)
            if((i%k) === 0){
                ehPrimo = false;
            }
        }
        if(ehPrimo){ // Se i for primo, adicionar no array de numeros primos
            primos.push(i);
        }
    }
    console.log(primos);
    for(let i of primos){
        soma += i;
    }
    return soma; // soma de todos os numeros primos menores que num
  }
  
  sumPrimes(10);