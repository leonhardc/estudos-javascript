function telephoneCheck(str) {
    let tamanho = str.replace(/[\W]/g, '').length;
    if(tamanho < 10 || tamanho > 11){
        return false;
    }
    if(tamanho === 11 && str[0] !== '1'){
        return false;
    }
    let arrRegex = [
        /^[\d]{3}-[\d]{3}-[\d]{4}/, // 0
        /^\([\d]{3}\)[\d]{3}-[\d]{4}/, //1
        /^\([\d]{3}\) [\d]{3}-[\d]{4}/, //2
        /^[\d]{3} [\d]{3} [\d]{4}/,//3
        /^[\d]{10}/, // 4
        /^1 [\d]{3} [\d]{3} [\d]{4}/, //5
        /^1 [\d]{3}-[\d]{3}-[\d]{4}/,//6
        /^1 \([\d]{3}\)[\d]{3}-[\d]{4}/,//7
        /^1 \([\d]{3}\) [\d]{3}-[\d]{4}/,//8
    ];
    // console.log(
    //     arrRegex[6].test(str)
    // )
    for(let regex of arrRegex){
        if(regex.test(str)){
            return true;
        }
    } 
    return false;
 }
console.log(
    telephoneCheck("2 (757) 622-7382")
);