// Pig Latin é uma forma de alterar palavras inglesas. 
// As regras são as seguintes:

// - Se uma palavra começar com uma consoante, tire a 
// primeira consoante ou grupo de consoantes, mova-a 
// para o final da palavra e adicione ay a ela.

// - Se uma palavra começar com uma vogal, basta 
// adicionar way no final.

// Solução:

function translatePigLatin(str) {
    const regex = /[aeiou]/i; // expressão regular, com a flag ignoreCase
    const result = str.match(regex); // Se houver match, ou seja, se a primeira 
                                     // letra for uma vogal. Entra na condição
    if(!result){
      str = str+"way"; // Adiciona 'way' ao final da string
    }
    else{
        let contChar = 0;
        for(let index=0; index < str.length; index++){
            // Este laço verifica quantas consoantes existem no inicio
            // da palavra.
            if(str[index].match(regex) === null){
                contChar++;
            }
            else {
                break;
            }
        }
        str = str.slice(contChar) + str.slice(0, contChar) + "ay";
    }
    return str;
    // String.match(regex) Ve se há match da primeira letra 
    // da palavra com a grupo de vogais (maiuscula ou minuscula)
    //
    // srt.slice(1): retorna uma copia da string sem o primeiro
    // caractere.
  }  
  
  translatePigLatin("consonant");