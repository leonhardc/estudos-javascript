function mutation(arr) {
    let teste = arr[1].toLowerCase();
    let objetivo = arr[0].toLowerCase();
    for (let i = 0; i < teste.length; i++) {
      if (objetivo.indexOf(teste[i]) < 0){
        return false;
      }
    }
    return true;
  }
  mutation(["hello", "hey"]);