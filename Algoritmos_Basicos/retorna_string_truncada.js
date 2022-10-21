// retorna string truncada se o tamanho de str for maior 
// que num
function truncateString(str, num) {
    if (str.length > num){
      return str.slice(0, num) + "...";
    }
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);