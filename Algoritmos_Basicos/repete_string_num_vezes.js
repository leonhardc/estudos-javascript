function repeatStringNumTimes(str, num) {
    if ( num < 1){
      return "";
    }
    let newStr = "";
    for (let i = 0; i < num; i++){
      newStr += str;
    }
    return newStr;
  }
  
  repeatStringNumTimes("abc", 3);