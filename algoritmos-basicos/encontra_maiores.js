function largestOfFour(arr) {
    let arrMaiores = [];
    
    for (let subArr of arr){
      let maior = subArr[0];
      for (let item of subArr){
        if (item > maior){
          maior = item;
        }
      }
      arrMaiores.push(maior);
    }
    return arrMaiores;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);