function checkCashRegister(price, cash, cid) {
    let troco = cash - price;
    let moedas = [
        ["PENNY",0.01],
        ["NICKEL",0.05],
        ["DIME",0.1],
        ["QUARTER",0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ]
    // moedas do caixa que vão ser usadas para o troco
    let moedas_usadas = moedas.filter(item => item[1] <= troco)
    // O que de fato será usado do troco
    let caixa_troco = [];
    for(let moeda of moedas_usadas){
        caixa_troco.unshift(cid.filter(item => item[0] == moeda[0])[0]);
    }
    
    // total do caixa
    let total = 0;
    for(let moeda of caixa_troco){ total += moeda[1]; }
    total = total.toFixed(2);   // deixar o resultado com formatação de
                                // duas casas decimais.
    
    if(total < troco){
        return {status: "INSUFICIENT_FOUNDS", change: []};
    }
    else{ // se o total for maior ou igual ao troco
        moedas_usadas = moedas_usadas.slice().reverse();
        moedas_usadas = moedas_usadas.map(item => [item[0] ,item[1]*100]);
        caixa_troco = caixa_troco.map(item => [item[0], Math.round(item[1]*100)]);
    
        let resto = (troco*100)%moedas_usadas[0][1];
        console.log(resto)
        if(resto === 0){
            let aux = [moedas_usadas[0][0], troco]
            console.log({status: "CLOSED", change:[aux]})
            // return {status: "CLOSED", change:[aux]};
        }
        else{ // se o resto nao for igual a zero

            let obj = [];
            let resto = troco*100;
            for(let item of caixa_troco){
                
            }
        }
    }


    // console.log(moedas_usadas);



    // console.log(troco,moedas_usadas);
    // console.log(caixa_troco, total);
}

  checkCashRegister(
    19.5, 20, 
    [
        ["PENNY", 1.01], 
        ["NICKEL", 2.05], 
        ["DIME", 3.1], 
        ["QUARTER", 4.25], 
        ["ONE", 90], 
        ["FIVE", 55], 
        ["TEN", 20], 
        ["TWENTY", 60], 
        ["ONE HUNDRED", 100]
    ]
    );

    // /*
    
        
    // let filter_coins = []; // moedas que podem ser usadas para dar o troco
    // let returned_cash = cash-price; // troco
    
    // // Arrai de coins


    // // Transformar cid em objeto
    // let cid_obj = {};
    // for(let arr of cid){
    //     cid_obj[arr[0]] = arr[1];
    // }
    
    // // filtrando moedas que podem ser passadas como troco

    // for(let coin of coins){
    //     if(coin[1] <= returned_cash){
    //         // Possiveis moedas que podem ser usadas para dar o troco
    //         filter_coins.unshift(coin[0]);
    //     }
    // }

    // // Fazer operações de troco
    // /*
    //     Checar: 
    //         1. Se o tem dinheiro suficiente no caixa para determinada moeda;
    //         2. Se é possivel dar todo o troco com determinada moeda:
    //             2.1 Se sim, retorna o objeto de troco
    //             2.2 Se não, adiciona o que pode ser dado de troco com determina
    //                 da moeda e passa para a proxima
    // */

    // /*
    //     A função checkCashRegister() deve sempre retornar um objeto com a chave 
    //     status e uma chave change.

    //     Retorne {status: "INSUFFICIENT_FUNDS", change: []} se o dinheiro no 
    //     caixa for menor que o troco devido, ou se você não pode retornar o 
    //     troco exato.

    //     Retorne {status: "CLOSED", change: [...]} com dinheiro no caixa como 
    //     o valor para a chave change se for igual ao troco devido.

    //     Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco 
    //     devido em moedas e notas, ordenado do maior para o menor, como o 
    //     valor da chave change.
    // */
    
    //     let obj_returned = {status: "", change: []}
    //     for(let coin of filter_coins){
    //         if(cid_obj[coin] >= returned_cash){ // Há mais dinheiro no caixa do que
    //             let divisor = coins.filter(item => item[0] == coin);
    //             let resto = returned_cash%divisor;
    //             if(resto == 0){
    //                 // Se o troco puder ser dado inteiramente nessa moeda
    //                 return {status: "CLOSED", change: [[coin, returned_cash]]};
    //             }
    //             else {
    //                 obj_returned.status = "OPEN"
    //             }
    //         }
    //     }
    //     // Caso não houver dinheiro em caixa para dar o troco
    //     return {status: "INSUFFICIENT_FUNDS", change: []};
    
    //     /* ...  */
    //     console.log(filter_coins);
    //     //return change;

