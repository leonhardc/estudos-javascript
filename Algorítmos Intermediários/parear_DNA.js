// Os pares de fileiras de DNA são constituídos por pares 
// de bases nitrogenadas. Os pares de bases são representados 
// pelos caracteres AT e CG, que formam os blocos de construção 
// da dupla hélice do DNA.

// A fileira do DNA está sem o elemento de que faz par com ele. 
// Escreva uma função que corresponda aos pares de base que faltam 
// para a fileira de DNA fornecida. Para cada caractere na string 
// fornecida, encontre o caractere de par de bases. Retorne os 
// resultados em um array bidimensional.

// Por exemplo, para a entrada GCG, retorne 
// [["G", "C"], ["C","G"], ["G", "C"]]

function pairElement(str) {
    // Um simples uso de switch case resolve o problema
    let arr = [];
    for(let i in str){
      switch(str[i]){
        case 'A':
          arr.push(["A", "T"]);
          break;
        case 'T':
          arr.push(["T", "A"]);
          break;
        case 'C':
          arr.push(["C", "G"]);
          break;
        case 'G':
          arr.push(["G", "C"]);
          break;
      }    
    }
    return arr;
  }
  
  pairElement("GCG"); // teste
  console.log(pairElement("GCG")); // para exibir o teste no console
  