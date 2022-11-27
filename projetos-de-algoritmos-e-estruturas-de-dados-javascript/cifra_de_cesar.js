/*
    1. Divide a string em um array.
    2. Avaliar cada letra de cada string do array criado.
    3. Fazer a operação de decodificação
        Operar sobre o indice da letra menos 13
            Se o resultado for zero ou positivo, caractere decodificado é aquele indice
            Caso contrário, caractere decodificado será visto de trás pra frente
*/


function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arr = str.split(" ");
    let decod = [];
    for(let palavra of arr){
        palavra = palavra.replace(/[\W]/g, '');
        let palavra_decod = "";
        for(let i = 0; i < palavra.length; i++){
            let result = alphabet.indexOf(palavra[i]) - 13;
            if(result >= 0){
                palavra_decod += alphabet[result];
            } else {
                palavra_decod += alphabet[alphabet.length+result];
            }
        }
        decod.push(palavra_decod);
    }
    let str_decod = decod.join(" ");
    if(str_decod.length < str.length){
        str_decod += str[str.length-1];
    }
    return str_decod;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")