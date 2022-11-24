/*
Crie uma função que some dois argumentos juntos. Se apenas um 
argumento for fornecido, então retorne uma função que espera um 
argumento e retorna a sua soma.

Por exemplo, addTogether(2, 3) deve retornar 5 e addTogether(2) 
deve retornar uma função.
*/

function addTogether() {
    const [first, second] = arguments; // Descompacta os argumentos da função
    if (typeof(first) !== "number")
      return undefined; // retorna undefined se o primeiro argumento da função 
                        // não for um numero
    if (arguments.length === 1)
      return (second) => addTogether(first, second); // retorna uma função se for
                                                     // passado somente um argumento
    if (typeof(second) !== "number")
      return undefined; // Se o tipo do segundo argumento não for um numero, 
                        // retorna undefined
    return first + second; // Se tudo ocorrer bem, retorna a soma dos dois argumentos
  }