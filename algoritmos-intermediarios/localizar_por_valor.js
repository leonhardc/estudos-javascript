// Entrada: Um array de objetos (collection) 
// e um objeto (source)

// Saida: Um novo array que contem os objetos de collection
// que tem pelo pelo menos uma correspondencia chave:valor com
// o objeto source

function whatIsInAName(collection, source) {
    const arr = [];
    // Altere apenas o código abaixo desta linha
    for(let obj of collection){
      let entrou = false;
      for(let key of Object.keys(source)){
        if(
          (Object.keys(obj).indexOf(key) != -1) &&
          (obj[key] === source[key]) &&
          (entrou === false)
        ) {
          arr.push(obj);
          entrou = true;
        }
      }
    }
    // Altere apenas o código acima desta linha
    return arr;
  }
  
  whatIsInAName(
    [
        { "apple": 1, "bat": 2 }, 
        { "bat": 2 }, 
        { "apple": 1, "bat": 2, "cookie": 2 }
    ],    
    { "apple": 1, "bat": 2 }
    );