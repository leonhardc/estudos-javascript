function convertHTML(str) {
    // Dividindo a string.
  
    var temp = str.split("");
  
    // Dá pra usar somente um switch/case para resolver o problema
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
  }
  
  // testes
  convertHTML("Dolce & Gabbana");