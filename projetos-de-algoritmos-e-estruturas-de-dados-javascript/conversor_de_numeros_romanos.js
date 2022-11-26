/*
    Resolução:
    Passo 1: ver se o numero está entre os valores pre-defidos. Se sim, 
    retorna string do numero convertido

    Passo 2: Caso o passo 1 não funcione, decompor o numero em
    unidade de milhar + centena + dezena + unidade

    Verificar cada um se é um valor entre os pré-definidos, se não, 
    converter em seus respectivos valores.
*/

function convertToRoman(num) {
    let val = { // referencia de valores romanos
        1:"I",
        4:"IV",
        5:"V",
        9:"IX",
        10:"X",
        40:"XL",
        50:"L",
        90:"XC",
        100:"C",
        400:"CD",
        500:"D",
        900:"CM",
        1000:"M"
    }
    let milhar, centena, dezena, unidade, resto;
    let arr = [];
    /* Se já existir o numero no objeto val, retorna seu respectivo valor romano */
    if(val.hasOwnProperty(num)){
        return val[num];
    }

    /* Descobrir milhar */
    milhar = Math.floor(num/1000)*1000;
    resto = num - milhar;
    /* Descobrir centena */
    centena = Math.floor(resto/100)*100;
    resto = resto - centena;
    /* Descobrir dezena */
    dezena = Math.floor(resto/10)*10;
    resto = resto - dezena;
    /* Descobrir unidade */
    unidade = resto;

    /* Converte cada uma das parcelas do numero */
    /* milhar */
    if(val.hasOwnProperty(milhar)){
        arr.push(val[milhar]);
    }
    else{
        let mult = milhar/1000;
        switch(mult){
            case 2:
                arr.push("MM");
                break;
            case 3:
                arr.push("MMM");
                break;
        }
    }
    /* centena */
    if(val.hasOwnProperty(centena)){
        arr.push(val[centena]);
    }
    else{
        let mult = centena/100;
        switch(mult){
            case 2:
                arr.push("CC");
                break;
            case 3:
                arr.push("CCC");
                break;
            case 6:
                arr.push("DC");
                break;
            case 7:
                arr.push("DCC");
                break;
            case 8:
                arr.push("DCCC");
                break;
        }
    }
    /* dezena */
    if(val.hasOwnProperty(dezena)){
        arr.push(val[dezena]);
    }
    else{
        let mult = dezena/10;
        switch(mult){
            case 2:
                arr.push("XX");
                break;
            case 3:
                arr.push("XXX");
                break;
            case 6:
                arr.push("LX");
                break;
            case 7:
                arr.push("LXX");
                break;
            case 8:
                arr.push("LXXX");
                break;
        }
    } 
    /* unidade */
    if(val.hasOwnProperty(unidade)){
        arr.push(val[unidade]);
    }
    else{
        let mult = unidade;
        switch(mult){
            case 2:
                arr.push("II");
                break;
            case 3:
                arr.push("III");
                break;
            case 6:
                arr.push("VI");
                break;
            case 7:
                arr.push("VII");
                break;
            case 8:
                arr.push("VIII");
                break;
        }
    }

    console.log(milhar, centena, dezena,  unidade);
    console.log(arr);
    return arr.join("");
}


console.log(convertToRoman(2194));