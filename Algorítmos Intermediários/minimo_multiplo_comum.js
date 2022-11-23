/*
    Achar Minimo Multiplo comum
*/

function smallestCommons(arr) {
    /*
        Os numeros não precisam estar em ordem para solucionar o problema.
        Usaremos a regra que diz que o MMC = (num1*num2)/MDC
        MMC: Minimo Multiplo Comum;
        MDC: Máximo divisor comum;
    */
    var resto, x, y;
    x = arr[0];
    y = arr[1];
    while(resto!=0){
      resto = x % y;
      x = y;
      y = resto;
    }
    return (arr[0]*arr[1])/x;
  }
  
console.log(smallestCommons([2,15]));