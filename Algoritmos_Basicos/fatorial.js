// encontrar fatorial de num
function factorialize(num) {
    //  Cabe uma verificação de numero negativo.
    // Pois não existe fatorial de numeros negativos
    if(num < 0){
        return undefined;
    }
    let fat = 1;    
    for(let i = 1; i <= num; i++){
      fat *= i;
    }
    
    return fat;
  }
  
  factorialize(5);