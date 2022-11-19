function myReplace(str, before, after) {
    // Checa se o primeiro caractere do argumento 'before'
    // está em caixa alta. Se sim, troca o primeiro caractere
    // do argumento after para caixa alta, ou caixa baixa,
    // a depender da capitalização do argumento before.
    if(/^[A-Z]/.test(before)){
        after = after[0].toUpperCase() + after.substring(1);
    } else {
        after = after[0].toLowerCase() + after.substring(1);
    }
    // retorna a string com o argumento 'before' substituido pelo 
    // argumento 'after'.
    return str.replace(before, after);
    // O método .test() executa uma busca entre uma expressão 
    // regular e uma string especificada. Retorna true ou false.
    //
    // O método .substring() retorna a parte da string entre os 
    // indices inicial e final passados como argumento. Se for passado
    // somente um  indice, este será o inidice de inicio, e o indice final,
    // por padrão, será o final da string.
  }
  