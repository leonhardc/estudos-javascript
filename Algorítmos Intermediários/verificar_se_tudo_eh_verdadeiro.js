/*
    Verifique se o predicado (segundo argumento) é truthy em todos os 
    elementos de uma coleção (primeiro argumento).

    Em outras palavras, você recebe uma coleção de array de objetos. 
    O predicado pre será uma propriedade de objeto e você precisa retornar 
    true se seu valor for truthy. Caso contrário, retorne false.

    Em JavaScript, valores truthy são valores que traduzem para true quando 
    avaliados em um contexto booleano.
*/

function truthCheck(collection, pre) {
    // Cria um contador para checar quantos são verdadeiros.
    let counter = 0;
    // Checa cada objeto
    for (let c in collection) {
      // Se ele tem certa propriedade e certo valor então ele é verdadeiro
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    // Fora do loop, checa se obtivemos true para todo 
    // e retorna true ou false
    return counter == collection.length;
  }
  
  truthCheck(
    [
        { name: "Quincy", role: "Founder", isBot: false }, 
        { name: "Naomi", role: "", isBot: false }, 
        { name: "Camperbot", role: "Bot", isBot: true }
    ], 
    "isBot");