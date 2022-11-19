// Encontre a letra que falta no intervalo de letras passado 
// e devolva-a.

// Passo a Passo:

// Passo 1: Precisamos converter o caractere para codigo ASCII.
// Passo 2: Checamos a diferença entre o codigo ASCII, pois elas estão em ordem.
// Passo 3: Precisamos descobrir onde está a letra ausente, além de lidar com o
// caso de não haver letra ausente. Pois ela precisa de um valor de retorno 
// específico.

function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      /* codigo ASCII do caractere atual */
      const charCode = str.charCodeAt(i);
  
      /* Se o charcode da letra atual for diferente do charcode da string mais
         o numero de iterações, então a letra foi pulada */
      if (charCode !== str.charCodeAt(0) + i) {
        /* Se o caractere atual foi pulado, então o caractere que está faltando corres-
        ponde ao caractere referente ao charcode menos um. */
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }