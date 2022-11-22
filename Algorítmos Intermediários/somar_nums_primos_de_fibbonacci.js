/*
    Dado um num inteiro e positivo, retorne a soma de todos os números ímpares 
    Fibonacci menores que ou iguais a num.

    Os dois primeiros números na sequência de Fibonacci são 1 e 1. Todo número 
    adicional na sequência é a soma dos dois números anteriores. Os seis 
    primeiros números da sequência de Fibonacci são 1, 1, 2, 3, 5 e 8.

    Por exemplo, sumFibs(10) deve retornar 10 porque todos os números ímpares 
    de Fibonacci menores ou iguais a 10 são 1, 1, 3 e 5.
*/

function sumFibs(num) {
    var fib = [1 , 1];
    var penultimo = fib[0];
    var ultimo = fib[1];
    var sum = function (arr) {
        var cont = 0;
        for(let i of arr){
            cont += i;
        }
        return cont;
    }
    // Gerando os 'num' primeiros numeros da série de fibonnaci
    
    while(ultimo < num){
        fib.push(penultimo + ultimo);
        penultimo = fib[fib.length-2];
        ultimo = fib[fib.length-1];
    }
    fib.pop(); // retira ultimo elemento para que todos os elementos do array
               // sejam menores que num
    console.log(sum(fib.filter(item => (item % 2) === 1)));
    
  }
  
  sumFibs(75025);